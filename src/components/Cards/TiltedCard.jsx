import { useRef, useState, useEffect } from 'react';
import './TiltedCard.css';

const TiltedCard = ({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  children,
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
    
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    const rotationX = -(offsetY / (rect.height / 2)) * rotateAmplitude;
    
    setRotateX(rotationX);
    setRotateY(rotationY);
    
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      className="tilted-card"
      style={{
        height: containerHeight,
        width: containerWidth,
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? scaleOnHover : 1})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilted-card-inner">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-image"
            style={{
              height: imageHeight,
              width: imageWidth,
            }}
          />
        )}
        
        {children && (
          <div className="tilted-card-content">
            {children}
          </div>
        )}
        
        {captionText && (
          <figcaption className="tilted-card-caption">
            {captionText}
          </figcaption>
        )}
        
        {displayOverlayContent && overlayContent && (
          <div 
            className="tilted-card-overlay"
            style={{
              opacity: isHovered ? 1 : 0,
            }}
          >
            {overlayContent}
          </div>
        )}
        
        <div 
          className="tilted-card-glare"
          style={{
            background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(168, 239, 255, 0.3) 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default TiltedCard;
