import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

const contactDetails = [
  {
    icon: Phone,
    label: 'Direct Phone',
    content: agencyInfo.phones,
    type: 'phones'
  },
  {
    icon: MapPin,
    label: 'Office Location',
    content: agencyInfo.location,
    type: 'location'
  },
  {
    icon: Mail,
    label: 'Email',
    content: agencyInfo.email,
    type: 'email'
  },
  {
    icon: Clock,
    label: 'Working Hours',
    content: 'Mon – Sat: 10:00 AM – 8:30 PM\nSunday: By Appointment',
    type: 'hours'
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', interest: 'Buy Residential', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Full Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email || 'N/A'}%0ARequirement: ${formData.interest}%0AMessage: ${formData.message || 'No additional message'}`;
    window.open(`https://wa.me/${agencyInfo.whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding sec-grey">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Get In Touch</div>
          <h2>Schedule A Free Consultation</h2>
          <p>Speak directly with <strong>Dhiren P. Doshi</strong> for expert guidance on buying, selling, or leasing property in Borivali.</p>
        </div>

        <div className="contact-grid">
          {/* Left — Info Card */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Office & Contact Details</h3>

            {contactDetails.map((item, i) => (
              <div key={i} className="contact-detail-item">
                <div className="contact-icon-box">
                  <item.icon size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">{item.label}</div>
                  {item.type === 'phones' ? (
                    <>
                      <a href={`tel:${agencyInfo.phones[0]}`} className="contact-phone-link">{agencyInfo.phones[0]}</a>
                      <a href={`tel:${agencyInfo.phones[1]}`} className="contact-phone-link contact-phone-alt">{agencyInfo.phones[1]}</a>
                    </>
                  ) : item.type === 'location' ? (
                    <>
                      <p className="contact-detail-value">{agencyInfo.location}</p>
                      <a href={agencyInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="contact-maps-link">View on Google Maps →</a>
                    </>
                  ) : (
                    <p className="contact-detail-value" style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={`https://wa.me/${agencyInfo.whatsapp}?text=Hi%20Dhiren%20Estate%20Agency,%20I%20want%20to%20connect%20for%20property%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-full-width contact-wa-btn"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Right — Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 size={52} className="contact-success-icon" />
                <h4>Request Sent!</h4>
                <p>Opening WhatsApp to connect with Dhiren P. Doshi directly.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Submit Another</button>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send Consultation Request</h3>
                <p className="contact-form-subtitle">Our advisor will respond within 30 minutes.</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" required className="form-control" placeholder="Your full name"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Mobile Number *</label>
                      <input type="tel" required className="form-control" placeholder="10-digit number"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Requirement</label>
                      <select className="form-control" value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}>
                        <option value="Buy Residential">Buy Residential Flat</option>
                        <option value="Buy Jodi Flat">Buy Jodi Flat (3-4 BHK)</option>
                        <option value="Buy Commercial">Buy Commercial Space</option>
                        <option value="Rent / Lease">Rent / Lease</option>
                        <option value="Sell Property">Sell My Property</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email (Optional)</label>
                    <input type="email" className="form-control" placeholder="your@email.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Budget & Requirements</label>
                    <textarea rows={3} className="form-control"
                      placeholder="Location preference, budget range, BHK requirement..."
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>

                  <button type="submit" className="btn-primary btn-full-width contact-submit-btn">
                    <Send size={17} />
                    <span>Submit via WhatsApp</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
