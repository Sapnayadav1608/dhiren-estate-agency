import React from 'react';
import { ShieldCheck, Award, UserCheck, MapPin, FileText, Handshake } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

const features = [
  { icon: Award,       title: '20+ Years of Local Expertise',       desc: 'Deep knowledge of Borivali West, IC Colony, Shimpoli & Western Suburbs property market.' },
  { icon: ShieldCheck, title: '100% Legal Title Scrutiny',           desc: 'Every property is verified for clear title, OC, CC, and zero legal encumbrances.' },
  { icon: Handshake,   title: 'Direct Owner Negotiations',           desc: 'No middlemen. We negotiate directly with owners for the best price.' },
  { icon: FileText,    title: 'End-to-End Documentation',            desc: 'Stamp duty, registration, loan coordination — all handled under one roof.' },
  { icon: UserCheck,   title: 'Transparent & Honest Advisory',       desc: 'No hidden charges. All terms clearly documented before any deal proceeds.' },
  { icon: MapPin,      title: 'Jodi Flat Specialists',               desc: 'Exclusive expertise in sourcing adjacent flats for 3BHK/4BHK combined living.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-padding sec-white">
      <div className="container">

        {/* Top: Two column layout */}
        <div className="about-grid">
          <div className="about-image-side">
            <div className="about-img-wrap">
              <img src="/img/sea_view.png" alt="Dhiren Estate Agency" />
              <div className="about-exp-badge">
                <span className="about-exp-number">20+</span>
                <span className="about-exp-text">Years of<br />Excellence</span>
              </div>
            </div>
          </div>

          <div className="about-content-side">
            <div className="badge-gold">About Dhiren Estate Agency</div>
            <h2>Mumbai's Most Trusted<br /><span className="text-gold-highlight">Real Estate Partner</span></h2>
            <p className="about-desc">
              Founded by <strong>{agencyInfo.founder}</strong>, Dhiren Estate Agency has been Borivali's most trusted real estate consultancy for over two decades. We specialize in residential resale, exclusive Jodi flats, commercial spaces, and complete legal advisory — all under one roof.
            </p>

            <div className="founder-card">
              <div className="badge-gold">Founder's Promise</div>
              <blockquote className="founder-quote">
                "Our single focus is providing transparent, reliable real estate guidance so families can buy their dream home with total confidence."
              </blockquote>
              <div className="founder-info-row">
                <img src="/img/logo.png" alt="Logo" className="founder-logo-badge" />
                <div>
                  <h4 className="founder-name">{agencyInfo.founder}</h4>
                  <p className="founder-role">Principal Founder & Real Estate Consultant</p>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="btn-primary">Get Free Consultation</a>
              <a href={`tel:${agencyInfo.phones[0]}`} className="btn-secondary">{agencyInfo.phones[0]}</a>
            </div>
          </div>
        </div>

        {/* Bottom: What Sets Us Apart */}
        <div className="about-features-bottom">
          <div className="about-features-header">
            <div className="badge-gold">Why Choose Us</div>
            <h3>What Sets Us Apart</h3>
          </div>
          <div className="apart-grid">
            {features.map((f, i) => (
              <div key={i} className="apart-card">
                <div className="apart-number">0{i + 1}</div>
                <div className="apart-icon"><f.icon size={24} /></div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
