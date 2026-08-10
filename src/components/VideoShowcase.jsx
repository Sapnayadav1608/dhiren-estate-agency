import React, { useState } from 'react';
import { Play, Youtube, CheckCircle2, Video } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

export default function VideoShowcase() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const currentVideo = agencyInfo.youtubeVideos[activeVideoIndex] || agencyInfo.youtubeVideos[0];

  return (
    <section className="section-padding bg-alt" id="videoshowcase">
      <div className="container">
        <div className="section-header">
          <div className="badge-gold">Video Tour & Overview</div>
          <h2>Corporate Video Showcase</h2>
          <p>Watch our latest property walkthroughs, client guidance videos, and real estate market insights.</p>
        </div>

        <div className="video-showcase-grid">
          {/* YouTube Player Frame */}
          <div className="video-player-card">
            <div className="video-responsive-wrapper">
              <iframe
                src={`${currentVideo.embedUrl}?autoplay=0&rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>

            <div className="video-player-footer">
              <div className="yt-badge">
                <Youtube size={20} />
                <span>YouTube Video Presentation</span>
              </div>
              <a 
                href={currentVideo.watchUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary btn-yt-watch"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>

          {/* Video Information Side */}
          <div className="video-info-side">
            <div className="badge-gold">
              <Video size={14} />
              <span>Video Presentation</span>
            </div>

            <h3 className="video-title">{currentVideo.title}</h3>
            <p className="video-desc">{currentVideo.desc}</p>

            <div className="video-check-list">
              <div className="check-item">
                <CheckCircle2 size={16} className="icon-gold" /> 100% Real Property Walkthroughs
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="icon-gold" /> Detailed Borivali Market & Legal Guidance
              </div>
              <div className="check-item">
                <CheckCircle2 size={16} className="icon-gold" /> Direct Advice from Founder Dhiren P. Doshi
              </div>
            </div>

            <div className="playlist-selector-box">
              <div className="playlist-label">Select Video Tour</div>
              <div className="playlist-buttons">
                {agencyInfo.youtubeVideos.map((vid, idx) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`playlist-btn ${activeVideoIndex === idx ? 'active' : ''}`}
                  >
                    <Play size={15} className="play-icon" />
                    <span>{vid.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
