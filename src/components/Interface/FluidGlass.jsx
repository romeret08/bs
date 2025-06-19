import { useState, useRef } from 'react';
import './FluidGlass.css';

const FluidGlass = ({
  children,
  className = "",
  blurStrength = 10,
  opacity = 0.1,
  borderRadius = "12px",
  borderColor = "rgba(255, 255, 255, 0.2)",
  backgroundColor = "rgba(255, 255, 255, 0.05)",
  shadowColor = "rgba(168, 239, 255, 0.2)",
  enableHoverEffect = true,
  enableMouseParallax = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const glassRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!enableMouseParallax || !glassRef.current) return;

    const rect = glassRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = (e.clientX - centerX) / rect.width;
    const offsetY = (e.clientY - centerY) / rect.height;
    
    setMousePos({ x: offsetX * 10, y: offsetY * 10 });
  };

  const handleMouseEnter = () => {
    if (enableHoverEffect) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (enableHoverEffect) setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={glassRef}
      className={`fluid-glass ${isHovered ? 'hovered' : ''} ${className}`}
      style={{
        backgroundColor: isHovered 
          ? `rgba(255, 255, 255, ${opacity * 2})` 
          : backgroundColor,
        borderColor: isHovered 
          ? "rgba(168, 239, 255, 0.4)" 
          : borderColor,
        borderRadius,
        backdropFilter: `blur(${isHovered ? blurStrength * 1.5 : blurStrength}px)`,
        boxShadow: isHovered 
          ? `0 8px 32px ${shadowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
          : `0 4px 16px rgba(0, 0, 0, 0.1)`,
        transform: enableMouseParallax 
          ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`
          : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fluid-glass-content">
        {children}
      </div>
      
      {/* Liquid glass effect overlay */}
      <div 
        className="fluid-glass-overlay"
        style={{
          background: `radial-gradient(circle at ${50 + mousePos.x * 2}% ${50 + mousePos.y * 2}%, 
            rgba(168, 239, 255, 0.1) 0%, 
            rgba(250, 213, 255, 0.05) 40%, 
            transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </div>
  );
};

export default FluidGlass;
