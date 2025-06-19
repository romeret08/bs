import { useRef, useEffect, useCallback, useState } from 'react';
import './BlobCursor.css';

const BlobCursor = ({
  blobType = "circle",
  fillColor = "#A8EFFF", // Beatsupplier celeste
  trailCount = 3,
  sizes = [60, 100, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.4, 0.3],
  shadowColor = "rgba(168, 239, 255, 0.5)",
  shadowBlur = 10,
  useFilter = true,
  zIndex = 1000,
  disabled = false,
}) => {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (disabled) return;
    
    setMousePos({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (disabled) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, [handleMouseMove, handleMouseLeave, disabled]);

  useEffect(() => {
    if (!isVisible || disabled) return;

    blobsRef.current.forEach((blob, index) => {
      if (!blob) return;

      const delay = index * 50; // Stagger animation
      const speed = index === 0 ? 1 : 0.5 - (index * 0.1);

      setTimeout(() => {
        blob.style.transform = `translate(${mousePos.x - sizes[index] / 2}px, ${mousePos.y - sizes[index] / 2}px)`;
        blob.style.transition = `transform ${speed}s cubic-bezier(0.16, 1, 0.3, 1)`;
      }, delay);
    });
  }, [mousePos, isVisible, sizes, disabled]);

  if (disabled) return null;

  return (
    <>
      {useFilter && (
        <svg className="blob-cursor-filter">
          <filter id="blob-filter">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="20" />
            <feColorMatrix 
              in="blur" 
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10" 
            />
          </filter>
        </svg>
      )}

      <div
        ref={containerRef}
        className={`blob-cursor-container ${isVisible ? 'visible' : ''}`}
        style={{ 
          zIndex,
          filter: useFilter ? 'url(#blob-filter)' : 'none'
        }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobsRef.current[i] = el)}
            className={`blob-cursor ${blobType}`}
            style={{
              width: sizes[i],
              height: sizes[i],
              backgroundColor: fillColor,
              opacity: isVisible ? opacities[i] : 0,
              boxShadow: `0 0 ${shadowBlur}px ${shadowColor}`,
              transition: `opacity 0.3s ease, transform 0.1s ease`,
            }}
          >
            <div
              className="blob-cursor-inner"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                backgroundColor: innerColor,
                borderRadius: blobType === "circle" ? "50%" : "0",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlobCursor;
