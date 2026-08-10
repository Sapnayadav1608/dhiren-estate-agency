import React from 'react';
import { Home, Layers, Building2, Key, ShieldCheck, ArrowRight } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

const iconMap = {
  Home: Home,
  Layers: Layers,
  Building2: Building2,
  Key: Key,
  ShieldCheck: ShieldCheck
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding sec-white">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Core Expertise</div>
          <h2>Real Estate Advisory Services</h2>
          <p>Comprehensive real estate solutions tailored for home buyers, sellers, commercial clients, and investors in Mumbai.</p>
        </div>

        <div className="services-grid">
          {agencyInfo.services.map((srv) => {
            const IconComp = iconMap[srv.icon] || Home;

            return (
              <div key={srv.id} className="service-card">
                <div className="service-icon">
                  <IconComp size={26} />
                </div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <a 
                  href={`https://wa.me/${agencyInfo.whatsapp}?text=Hi%20Dhiren%20Estate%20Agency,%20I%20want%20to%20know%20more%20about%20your%20${encodeURIComponent(srv.title)}%20services.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="service-link"
                >
                  <span>Enquire Service</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
