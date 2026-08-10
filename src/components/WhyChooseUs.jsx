import React from 'react';
import { Award, FileText, UserCheck } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container">
        <div className="why-grid">
          <div className="why-content-side">
            <div className="badge-gold">Why Choose Dhiren Estate Agency</div>
            <h2>
              Your Trusted Local Market Authority in <span className="text-gold-highlight">Borivali</span>
            </h2>
            <p className="why-subtext">
              With over two decades of experience led by <b>{agencyInfo.founder}</b>, Dhiren Estate Agency has established a stellar reputation for integrity, clear-title verifications, and stress-free property deals.
            </p>

            <div className="feature-list">
              <div className="feature-point">
                <div className="feature-point-icon">
                  <Award size={20} />
                </div>
                <div className="feature-point-text">
                  <h4>20+ Years Local Market Mastery</h4>
                  <p>Deep insight into Borivali West, Shimpoli, IC Colony, Gorai, and Kandivali property valuations and growth trends.</p>
                </div>
              </div>

              <div className="feature-point">
                <div className="feature-point-icon">
                  <FileText size={20} />
                </div>
                <div className="feature-point-text">
                  <h4>100% Legal & Title Scrutiny</h4>
                  <p>Every listing undergoes rigorous legal verification to guarantee zero litigation risk for buyers and sellers.</p>
                </div>
              </div>

              <div className="feature-point">
                <div className="feature-point-icon">
                  <UserCheck size={20} />
                </div>
                <div className="feature-point-text">
                  <h4>Direct Buyer-Seller Transparency</h4>
                  <p>No hidden markups or inflated pricing. Clear, straightforward negotiation managed directly by senior advisors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="founder-card-side">
            <div className="founder-card">
              <div className="badge-gold">Founder's Promise</div>
              <blockquote className="founder-quote">
                "Our single focus is providing transparent, reliable real estate guidance so families can buy their dream home with total confidence."
              </blockquote>
              <div className="founder-info-row">
                <img src="/img/logo.png" alt="Logo" className="founder-logo-badge" />
                <div>
                  <h4 className="founder-name">Dhiren P. Doshi</h4>
                  <p className="founder-role">Principal Founder & Real Estate Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
