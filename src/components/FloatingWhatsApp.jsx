import React, { useState } from 'react';
import { MessageSquare, X, Phone, Send, MessageCircle } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    "Hello Dhiren Estate Agency, I am interested in property consultation / options in Borivali West. Please contact me with details."
  );

  const quickPrompts = [
    { title: "🏡 3 / 4 BHK Jodi Flat", text: "Hello Dhiren Estate Agency, I am looking for 3/4 BHK Jodi flats in Borivali West. Please share available options." },
    { title: "🏢 Commercial Office / Shop", text: "Hello Dhiren Estate Agency, I am interested in commercial shops or office space in Borivali West." },
    { title: "📅 Schedule Site Visit", text: "Hello Dhiren Estate Agency, I would like to schedule a property site visit with Dhiren P. Doshi." },
    { title: "📄 Legal Title Scrutiny & Listing", text: "Hello Dhiren Estate Agency, I want assistance with property legal title verification and valuation." }
  ];

  const handleSendWhatsApp = (msgToSend) => {
    const text = msgToSend || customMsg;
    window.open(`https://wa.me/${agencyInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="floating-wa-wrapper">
      {isOpen && (
        <div className="floating-wa-card">
          <div className="floating-wa-header">
            <div className="floating-wa-title">
              <span className="wa-online-dot"></span>
              <div>
                <strong>Dhiren Estate Agency</strong>
                <div className="wa-online-subtitle">Online • Typically replies instantly</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="floating-wa-close" aria-label="Close">
              <X size={16} />
            </button>
          </div>

          <p className="floating-wa-sub">
            Select a quick topic or edit your message below to start WhatsApp consultation:
          </p>

          <div className="floating-wa-prompts">
            {quickPrompts.map((p, i) => (
              <button 
                key={i} 
                type="button"
                onClick={() => setCustomMsg(p.text)}
                className={`floating-wa-prompt-btn${customMsg === p.text ? ' active-prompt' : ''}`}
              >
                <span>{p.title}</span>
              </button>
            ))}
          </div>

          {/* Built-in Message Input Box */}
          <div className="floating-wa-message-box">
            <label className="floating-wa-input-label">
              <MessageCircle size={13} className="icon-gold" /> Built-in Message:
            </label>
            <textarea
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              rows={3}
              className="floating-wa-textarea"
              placeholder="Type your WhatsApp message..."
            />
          </div>

          <button 
            type="button"
            onClick={() => handleSendWhatsApp(customMsg)}
            className="btn-whatsapp floating-wa-send-btn"
          >
            <Send size={15} />
            <span>Chat on WhatsApp</span>
          </button>

          <div className="floating-wa-footer">
            <a 
              href={`tel:${agencyInfo.phones[0]}`}
              className="floating-wa-call-link"
            >
              <Phone size={13} /> Direct Call: {agencyInfo.phones[0]}
            </a>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="floating-wa-toggle"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>
    </div>
  );
}
