import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Menu, X, Search, Filter, RotateCcw } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Properties',   href: '#properties' },
  { label: 'Services',     href: '#services' },
  { label: 'Calculator',   href: '#calculator' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar({ onSearch, activeSearchFilters, onClearSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Search Filter State in Navbar
  const [searchFilterOpen, setSearchFilterOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [bhk, setBhk] = useState('All');

  const whatsappUrl = `https://wa.me/${agencyInfo.whatsapp}?text=Hello%20Dhiren%20Estate%20Agency,%20I%20am%20interested%20in%20a%20property%20consultation.`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ keyword, location, propertyType, bhk });
    }
  };

  const handleReset = () => {
    setKeyword('');
    setLocation('All');
    setPropertyType('All');
    setBhk('All');
    if (onClearSearch) onClearSearch();
  };

  const hasActiveFilter = !!activeSearchFilters || keyword || location !== 'All' || propertyType !== 'All' || bhk !== 'All';

  return (
    <header className="header-wrapper">
      {/* Top Bar */}
      <div className={`top-bar${scrolled ? ' top-bar-hidden' : ''}`}>
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-info-item">
              <MapPin size={13} className="icon-gold" /> Borivali West, Mumbai
            </span>
            <span className="top-info-item">
              <Clock size={13} className="icon-gold" /> Mon–Sat: 10:00 AM – 8:30 PM
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-info-item">
              <ShieldCheck size={14} className="icon-gold" /> 100% Legal Title Scrutiny
            </span>
            <a href={`tel:${agencyInfo.phones[0]}`} className="top-phone-link">
              <Phone size={13} /> {agencyInfo.phones[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="brand-logo" aria-label="Dhiren Estate Agency Home">
            <img src="/img/logo.png" alt="Dhiren Estate Agency Logo" className="logo-img" />
          </a>

          <div className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link${activeSection === link.href.replace('#', '') ? ' nav-link-active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className={`btn-nav-search${searchFilterOpen ? ' active' : ''}${hasActiveFilter ? ' has-filter' : ''}`}
              onClick={() => setSearchFilterOpen(!searchFilterOpen)}
              title="Search & Filter Properties"
            >
              <Search size={16} />
              <span>Search Filter</span>
              {hasActiveFilter && <span className="filter-dot" />}
            </button>

            <a href={`tel:${agencyInfo.phones[0]}`} className="btn-primary btn-nav-call">
              <Phone size={15} />
              <span className="desktop-only">Call Agent</span>
            </a>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Expandable Search Filter Drawer */}
        {searchFilterOpen && (
          <div className="nav-search-bar-expand">
            <div className="container nav-search-container">
              <div className="nav-search-header">
                <span className="nav-search-title">
                  <Filter size={15} className="icon-gold" /> Search & Filter Portfolio
                </span>
                {hasActiveFilter && (
                  <button type="button" className="btn-clear-nav-filter" onClick={handleReset}>
                    <RotateCcw size={13} /> Reset Filter
                  </button>
                )}
              </div>
              <form onSubmit={handleSearchSubmit} className="nav-search-form">
                <div className="nav-search-input-wrap">
                  <Search size={15} className="input-search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search by area, project or BHK..." 
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>

                <select value={location} onChange={(e) => setLocation(e.target.value)} className="nav-select">
                  <option value="All">All Locations</option>
                  <option value="Borivali West">Borivali West</option>
                  <option value="IC Colony">IC Colony</option>
                  <option value="Shimpoli Road">Shimpoli Road</option>
                  <option value="Kandivali West">Kandivali West</option>
                  <option value="Gorai">Gorai</option>
                </select>

                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="nav-select">
                  <option value="All">All Categories</option>
                  <option value="Residential">Residential</option>
                  <option value="Jodi Flat">Jodi Flat</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Luxury">Luxury</option>
                </select>

                <select value={bhk} onChange={(e) => setBhk(e.target.value)} className="nav-select">
                  <option value="All">Any BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK / Jodi</option>
                </select>

                <button type="submit" className="btn-gold nav-search-btn-submit">
                  <Search size={15} /> Apply Search
                </button>
              </form>
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)} />
        )}

        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            <ul className="mobile-nav-links">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-actions">
              <button
                type="button"
                className="btn-primary btn-full-width"
                style={{ marginBottom: '0.5rem' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchFilterOpen(true);
                }}
              >
                <Search size={16} />
                <span>Search & Filter Properties</span>
              </button>
              <a href={`tel:${agencyInfo.phones[0]}`} className="btn-primary btn-full-width" onClick={() => setMobileMenuOpen(false)}>
                <Phone size={16} />
                <span>Call {agencyInfo.phones[0]}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
