import React, { useEffect } from 'react';
import { X, MapPin, Check, Phone, MessageSquare } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const whatsappMsg = encodeURIComponent(
    `Hello Dhiren Estate Agency, I am interested in property #${property.id}: "${property.title}" priced at ${property.price} located in ${property.location}. Please share details.`
  );
  const whatsappLink = `https://wa.me/${agencyInfo.whatsapp}?text=${whatsappMsg}`;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-img-wrap">
          <img src={property.image} alt={property.title} className="modal-header-img" />
          <div className="modal-status-badge">{property.status}</div>
        </div>

        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <span className="badge-gold modal-category-badge">{property.category}</span>
              <h2 className="modal-title">{property.title}</h2>
              <p className="modal-location">
                <MapPin size={16} className="icon-gold" /> {property.area}, {property.location}
              </p>
            </div>

            <div className="modal-price-box">
              <div className="modal-price">{property.price}</div>
            </div>
          </div>

          <div className="modal-specs-grid">
            <div className="modal-spec-item">
              <span className="spec-label">Configuration</span>
              <strong className="spec-val">{property.bhk}</strong>
            </div>
            <div className="modal-spec-item">
              <span className="spec-label">Super Built Area</span>
              <strong className="spec-val">{property.sqft}</strong>
            </div>
            <div className="modal-spec-item">
              <span className="spec-label">Bathrooms</span>
              <strong className="spec-val">{property.bathrooms} Baths</strong>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-subtitle">Property Overview</h4>
            <p className="modal-description">{property.description}</p>
          </div>

          {property.highlights && (
            <div className="modal-section">
              <h4 className="modal-subtitle">Key Highlights</h4>
              <div className="modal-highlights-grid">
                {property.highlights.map((item, i) => (
                  <div key={i} className="modal-highlight-item">
                    <div className="highlight-icon-box">
                      <Check size={12} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="modal-actions-row">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp modal-btn">
              <MessageSquare size={18} />
              <span>Enquire on WhatsApp</span>
            </a>
            <a href={`tel:${agencyInfo.phones[0]}`} className="btn-primary modal-btn">
              <Phone size={18} />
              <span>Call {agencyInfo.phones[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
