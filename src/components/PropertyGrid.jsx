import React, { useState } from 'react';
import { MapPin, Bed, Maximize2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { propertiesData } from '../data/properties';
import { agencyInfo } from '../data/agencyInfo';
import PropertyModal from './PropertyModal';

export default function PropertyGrid({ searchFilters }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = propertiesData.filter((prop) => {
    if (activeFilter === 'Resale' && prop.category !== 'Resale') return false;
    if (activeFilter === 'Jodi Flat' && prop.category !== 'Jodi Flat') return false;
    if (activeFilter === 'Commercial' && prop.category !== 'Commercial') return false;
    if (activeFilter === 'Luxury' && prop.category !== 'Luxury') return false;

    if (searchFilters) {
      if (searchFilters.activeType === 'Buy' && prop.category === 'Commercial') return false;
      if (searchFilters.activeType === 'Jodi' && prop.category !== 'Jodi Flat') return false;
      if (searchFilters.activeType === 'Commercial' && prop.category !== 'Commercial') return false;
      if (searchFilters.location && searchFilters.location !== 'All' && !prop.location.toLowerCase().includes(searchFilters.location.toLowerCase()) && !prop.area.toLowerCase().includes(searchFilters.location.toLowerCase())) return false;
      if (searchFilters.propertyType && searchFilters.propertyType !== 'All' && prop.type !== searchFilters.propertyType && prop.category !== searchFilters.propertyType) return false;
      if (searchFilters.bhk && searchFilters.bhk !== 'All' && !prop.bhk.includes(searchFilters.bhk.split(' ')[0])) return false;
      if (searchFilters.keyword && searchFilters.keyword.trim() !== '') {
        const kw = searchFilters.keyword.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(kw);
        const matchesLoc = prop.location.toLowerCase().includes(kw);
        const matchesArea = prop.area.toLowerCase().includes(kw);
        const matchesCategory = prop.category.toLowerCase().includes(kw);
        if (!matchesTitle && !matchesLoc && !matchesArea && !matchesCategory) return false;
      }
    }

    return true;
  });

  return (
    <section id="properties" className="section-padding sec-grey">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Verified Portfolio</div>
          <h2>Featured Properties in Mumbai</h2>
          <p>Handpicked clear-title residential and commercial properties across Borivali and Western Suburbs.</p>
        </div>

        {/* Filter Tag Buttons */}
        <div className="filter-tags">
          <button 
            className={`filter-tag ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All Listings ({propertiesData.length})
          </button>
          <button 
            className={`filter-tag ${activeFilter === 'Resale' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Resale')}
          >
            Residential Resale
          </button>
          <button 
            className={`filter-tag ${activeFilter === 'Jodi Flat' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Jodi Flat')}
          >
            Jodi Flats (3-4 BHK)
          </button>
          <button 
            className={`filter-tag ${activeFilter === 'Commercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Commercial')}
          >
            Commercial Offices & Shops
          </button>
          <button 
            className={`filter-tag ${activeFilter === 'Luxury' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Luxury')}
          >
            Luxury / Penthouses
          </button>
        </div>

        {/* Properties Grid */}
        <div className="properties-grid">
          {filteredProperties.map((prop) => {
            const whatsappMsg = encodeURIComponent(
              `Hello Dhiren Estate Agency, I want to inquire about "${prop.title}" (${prop.price}) located in ${prop.area}, ${prop.location}.`
            );
            const waLink = `https://wa.me/${agencyInfo.whatsapp}?text=${whatsappMsg}`;

            return (
              <div key={prop.id} className="property-card">
                <div className="property-image-wrap">
                  <img src={prop.image} alt={prop.title} />
                  <div className="property-badge">{prop.category}</div>
                  <div className="property-price-tag">{prop.price}</div>
                </div>

                <div className="property-content">
                  <div className="property-location">
                    <MapPin size={14} color="var(--gold-muted)" />
                    <span>{prop.area}, {prop.location}</span>
                  </div>

                  <h3 className="property-title">{prop.title}</h3>

                  <div className="property-features">
                    <div className="feature-item">
                      <Bed size={16} color="var(--navy-primary)" />
                      <span>{prop.bhk}</span>
                    </div>
                    <div className="feature-item">
                      <Maximize2 size={16} color="var(--navy-primary)" />
                      <span>{prop.sqft}</span>
                    </div>
                  </div>

                  <div className="property-footer">
                    <button 
                      onClick={() => setSelectedProperty(prop)}
                      className="btn-primary btn-property-details"
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={16} />
                    </button>
                    <a 
                      href={waLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-whatsapp btn-property-wa"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare size={18} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProperties.length === 0 && (
          <div className="no-listings-card">
            <h3>No listings matching your current filter</h3>
            <p>Contact us directly for unlisted off-market properties in Borivali.</p>
            <button onClick={() => setActiveFilter('All')} className="btn-primary">Reset Filters</button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </section>
  );
}
