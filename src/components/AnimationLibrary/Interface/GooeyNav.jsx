import { useState, useRef, useEffect } from 'react';
import './GooeyNav.css';

const GooeyNav = ({ items, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!nav || !indicator) return;

    const activeItem = nav.children[hoverIndex !== null ? hoverIndex : activeIndex];
    if (activeItem) {
      const rect = activeItem.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      
      indicator.style.width = `${rect.width}px`;
      indicator.style.left = `${rect.left - navRect.left}px`;
    }
  }, [activeIndex, hoverIndex]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`gooey-nav ${className}`}>
      <nav ref={navRef} className="gooey-nav-container">
        <div ref={indicatorRef} className="gooey-nav-indicator"></div>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href || '#'}
            className={`gooey-nav-item ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <span className="gooey-nav-text">{item.text}</span>
            <div className="gooey-nav-blob"></div>
          </a>
        ))}
      </nav>
      
      {/* SVG Filter for Gooey Effect */}
      <svg width="0" height="0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GooeyNav;
