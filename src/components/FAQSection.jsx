import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/properties';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Frequently Asked Questions</div>
          <h2>Buyer & Seller Guidance</h2>
          <p>Clear answers to common questions about buying, legal title checks, and property deals in Mumbai.</p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button 
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <div className="faq-question-text">
                    <HelpCircle size={18} className="icon-navy" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown size={18} className="faq-chevron" />
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
