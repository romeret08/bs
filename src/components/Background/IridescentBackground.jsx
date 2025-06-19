import React from 'react';
import './IridescentBackground.css';

const IridescentBackground = () => {
  return (
    <div className="iridescent-background">
      <div className="iridescent-layer layer-1"></div>
      <div className="iridescent-layer layer-2"></div>
      <div className="iridescent-layer layer-3"></div>
      <div className="particles">
        {[...Array(20)].map((_, index) => (
          <div 
            key={index} 
            className={`particle particle-${index % 4}`}
            style={{
              '--delay': `${Math.random() * 10}s`,
              '--duration': `${15 + Math.random() * 20}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default IridescentBackground;