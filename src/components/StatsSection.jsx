import React, { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Users, Building } from 'lucide-react';
import { agencyInfo } from '../data/agencyInfo';

const iconList = [Award, Building, CheckCircle, Users];

function parseValue(val) {
  const num = parseInt(val.replace(/\D/g, ''));
  const suffix = val.replace(/[0-9]/g, '');
  return { num, suffix };
}

function AnimatedNumber({ value, isVisible }) {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = num / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setDisplay(num);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isVisible, num]);

  return <>{display}{suffix}</>;
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-strip-light" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {agencyInfo.stats.map((stat, idx) => {
            const IconComponent = iconList[idx] || Award;
            return (
              <div key={idx} className="stat-item">
                <div className="stat-icon-wrap">
                  <IconComponent size={22} />
                </div>
                <div className="stat-number">
                  <AnimatedNumber value={stat.value} isVisible={isVisible} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
