import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, Shield, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${agencyInfo.whatsapp}?text=Hello%20Dhiren%20Estate%20Agency,%20I%20am%20interested%20in%20a%20property%20consultation.`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#home" className="brand-logo">
              <img src="/img/logo.png" alt="Dhiren Estate Agency" className="logo-img" />
            </a>
            <p className="footer-desc">
              Borivali's most trusted real estate consultancy since 2004. Clear-title properties, transparent deals, and expert guidance — all under one roof.
            </p>
            <div className="footer-social-links">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-wa" title="WhatsApp Chat">
                <MessageSquare size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-fb" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-ig" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-yt" title="YouTube Channel">
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon icon-li" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#calculator">EMI Calculator</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="footer-col">
            <h4>Areas We Serve</h4>
            <ul className="footer-links">
              <li><a href="#properties">Borivali West</a></li>
              <li><a href="#properties">IC Colony</a></li>
              <li><a href="#properties">Shimpoli Road</a></li>
              <li><a href="#properties">Chandavarkar Road</a></li>
              <li><a href="#properties">Kandivali West</a></li>
              <li><a href="#properties">Gorai</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <Phone size={14} className="icon-gold" />
              <a href={`tel:${agencyInfo.phones[0]}`} className="footer-contact-link">{agencyInfo.phones[0]}</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} className="icon-gold" />
              <a href={`tel:${agencyInfo.phones[1]}`} className="footer-contact-link">{agencyInfo.phones[1]}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} className="icon-gold" />
              <span>{agencyInfo.email}</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={14} className="icon-gold" />
              <span>Borivali West, Mumbai 400092</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dhiren Estate Agency. All Rights Reserved.</span>
          <span className="footer-designed-by">
            Designed by <span className="text-gold-highlight" style={{ color: 'var(--gold-primary)', fontWeight: 700 }}>AstralynTech</span>
          </span>
          <span className="footer-title-badge">
            <Shield size={13} className="icon-gold" /> Verified Legal Title Advisory
          </span>
        </div>
      </div>
    </footer>
  );
}
