import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviewsData } from '../data/properties';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding sec-white">
      <div className="container">

        <div className="section-header">
          <div className="badge-gold">Client Testimonials</div>
          <h2>Trusted by 650+ Families in Mumbai</h2>
          <p>Real experiences from home buyers, sellers, and commercial clients across Borivali & Western Suburbs.</p>
        </div>

        {/* Google Rating Strip */}
        <div className="rating-strip">
          <div className="rating-strip-score">
            <span className="rating-number">5.0</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="star-icon" />)}
            </div>
            <span className="rating-label">Google Rating</span>
          </div>
          <div className="rating-strip-divider" />
          <div className="rating-strip-stat"><strong>650+</strong><span>Successful Deals</span></div>
          <div className="rating-strip-divider" />
          <div className="rating-strip-stat"><strong>20+</strong><span>Years of Trust</span></div>
          <div className="rating-strip-divider" />
          <div className="rating-strip-stat"><strong>99%</strong><span>Client Satisfaction</span></div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviewsData.map((rev) => (
            <div key={rev.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-header-row">
                  <div className="star-rating">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="star-icon" />
                    ))}
                  </div>
                  <Quote size={22} className="quote-icon" />
                </div>
                <p className="testimonial-quote">"{rev.text}"</p>
              </div>

              <div className="testimonial-author-row">
                <div className="author-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{rev.name}</h4>
                  <p className="author-location">{rev.location}</p>
                </div>
                <span className="testimonial-type-badge">{rev.type}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
