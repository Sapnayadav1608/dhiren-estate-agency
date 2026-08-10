import React from 'react';
import { MapPin, CheckCircle, Navigation } from 'lucide-react';
import { localityData } from '../data/properties';
import { agencyInfo } from '../data/agencyInfo';

export default function LocalityGuide() {
  return (
    <section className="section-padding bg-alt">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Location Expertise</div>
          <h2>Prime Areas We Serve</h2>
          <p>We have deep on-ground knowledge of these Borivali & Western Suburb micro-markets — their infrastructure, connectivity, and long-term investment potential.</p>
        </div>

        <div className="locality-grid">
          {localityData.map((loc) => (
            <div key={loc.id} className="locality-card">
              <div className="locality-header">
                <span className="badge-gold">{loc.tag}</span>
                <MapPin size={20} className="icon-gold" />
              </div>

              <h3>{loc.name}</h3>
              <p className="locality-desc">{loc.desc}</p>

              <div className="locality-highlights-wrap">
                <div className="highlights-title">Key Highlights</div>
                {loc.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle size={14} className="icon-gold" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/${agencyInfo.whatsapp}?text=Hi%20Dhiren%20Estate%20Agency,%20I%20am%20looking%20for%20properties%20in%20${encodeURIComponent(loc.name)}.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="locality-action-link"
              >
                <span>View {loc.name} Listings</span>
                <Navigation size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
