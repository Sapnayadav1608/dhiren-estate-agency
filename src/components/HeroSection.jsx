import React, { useState, useEffect } from 'react';
import { Search, Building, MapPin, CheckCircle2, Phone, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

const bgSlides = [
  { img: '/img/luxury_apartment.png', label: 'Luxury 3 BHK High-Rise', location: 'Shimpoli Road, Borivali West', price: '₹ 2.45 Cr' },
  { img: '/img/sea_view.png',         label: 'Sea View Premium Apartment', location: 'Gorai Creek, Borivali West', price: '₹ 3.10 Cr' },
  { img: '/img/jodi_suite.png',       label: 'Exclusive 4 BHK Jodi Flat', location: 'IC Colony, Borivali West',  price: '₹ 3.85 Cr' },
  { img: '/img/penthouse_interior.png', label: 'Luxury Penthouse Interior', location: 'Borivali West, Mumbai',   price: '₹ 4.50 Cr' },
];

export default function HeroSection({ onSearch }) {
  const [activeType, setActiveType] = useState('All');
  const [location, setLocation] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % bgSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(p => (p - 1 + bgSlides.length) % bgSlides.length);
  const next = () => setCurrent(p => (p + 1) % bgSlides.length);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch({ activeType, location, propertyType });
  };

  return (
    <section id="home" className="hero-section">

      {/* Background Carousel */}
      <div className="hero-carousel">
        {bgSlides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'hero-slide-active' : ''}`}>
            <img src={slide.img} alt={slide.label} />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="hero-overlay" />
      </div>

      {/* Carousel Controls */}
      <button className="hero-carousel-btn hero-carousel-prev" onClick={prev} aria-label="Previous">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-carousel-btn hero-carousel-next" onClick={next} aria-label="Next">
        <ChevronRight size={22} />
      </button>

      {/* Slide Dots */}
      <div className="hero-dots">
        {bgSlides.map((_, i) => (
          <button key={i} className={`hero-dot ${i === current ? 'hero-dot-active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>

      {/* Content */}
      <div className="container hero-container">
        <div className="hero-grid">

          {/* Left Content */}
          <div className="hero-content">
            <div className="badge-gold hero-badge">
              <Star size={13} />
              <span>Mumbai's #1 Trusted Real Estate Advisor</span>
            </div>

            <h1 className="hero-heading">
              Find Your Dream<br />
              Property Today<br />
              <span className="hero-heading-gold">With Trusted Expertise</span>
            </h1>

            <p className="hero-subtext">
              20+ years of trusted expertise in <strong>Residential Resale</strong>, exclusive <strong>Jodi Flats</strong>, and <strong>Commercial Spaces</strong>.
            </p>

            <div className="hero-btns">
              <a href="#properties" className="btn-gold hero-btn-main">
                <Building size={18} />
                <span>Explore Properties</span>
                <ArrowRight size={16} />
              </a>
              <a href={`tel:${agencyInfo.phones[0]}`} className="btn-hero-call">
                <Phone size={17} />
                <span>{agencyInfo.phones[0]}</span>
              </a>
            </div>

            <div className="hero-trust-strip">
              <div className="trust-item"><CheckCircle2 size={15} className="icon-gold" /> 100% Legal Title Scrutiny</div>
              <div className="trust-item"><CheckCircle2 size={15} className="icon-gold" /> Direct Owner Deals</div>
              <div className="trust-item"><CheckCircle2 size={15} className="icon-gold" /> Zero Hidden Charges</div>
            </div>
          </div>

          {/* Right — Active Slide Info Card */}
          <div className="hero-visual">
            <div className="hero-slide-card">
              <div className="badge-featured">Featured Property</div>
              <h3>{bgSlides[current].label}</h3>
              <p className="hero-card-location">
                <MapPin size={14} /> {bgSlides[current].location}
              </p>
              <div className="hero-card-price">{bgSlides[current].price}</div>

              <div className="hero-float-badge">
                <span className="hero-float-num">650+</span>
                <span className="hero-float-text">Deals Closed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Search Bar */}
        <div className="search-filter-card">
          <div className="search-tabs">
            {['All', 'Buy', 'Jodi', 'Commercial'].map((type) => (
              <button key={type} type="button"
                className={`search-tab ${activeType === type ? 'active' : ''}`}
                onClick={() => setActiveType(type)}>
                {type === 'All' ? 'All Listings' : type === 'Buy' ? 'Buy / Resale' : type === 'Jodi' ? 'Jodi Flats' : 'Commercial'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSearchSubmit} className="search-inputs-grid">
            <div className="input-group">
              <label>Locality</label>
              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="All">All Areas</option>
                <option value="Borivali West">Borivali West</option>
                <option value="IC Colony">IC Colony</option>
                <option value="Shimpoli Road">Shimpoli Road</option>
                <option value="Kandivali West">Kandivali West</option>
              </select>
            </div>
            <div className="input-group">
              <label>Category</label>
              <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="All">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Jodi Flat">Jodi Flat</option>
                <option value="Commercial">Commercial</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
            <div className="input-group">
              <label>Budget</label>
              <select defaultValue="All">
                <option value="All">Any Budget</option>
                <option value="1.5Cr - 2.5Cr">₹ 1.5 – 2.5 Cr</option>
                <option value="2.5Cr - 4Cr">₹ 2.5 – 4.0 Cr</option>
                <option value="4Cr+">₹ 4.0 Cr+</option>
              </select>
            </div>
            <div className="input-group">
              <label>BHK</label>
              <select defaultValue="All">
                <option value="All">Any BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK / Jodi</option>
              </select>
            </div>
            <button type="submit" className="btn-primary btn-search-submit">
              <Search size={17} /><span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
