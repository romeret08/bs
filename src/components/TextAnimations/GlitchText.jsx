import { useState, useEffect } from 'react';
import './GlitchText.css';

const GlitchText = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
}) => {
  const [isAnimating, setIsAnimating] = useState(!enableOnHover);

  const inlineStyles = {
    '--after-duration': `${speed * 3}s`,
    '--before-duration': `${speed * 2}s`,
    '--after-shadow': enableShadows ? '-5px 0 var(--bs-cian-electrico)' : 'none',
    '--before-shadow': enableShadows ? '5px 0 var(--bs-rosa-pastel)' : 'none',
  };

  const handleMouseEnter = () => {
    if (enableOnHover) {
      setIsAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    if (enableOnHover) {
      setIsAnimating(false);
    }
  };

  return (
    <div
      className={`glitch-text ${isAnimating ? 'animate' : ''} ${className}`}
      style={inlineStyles}
      data-text={children}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default GlitchText;
