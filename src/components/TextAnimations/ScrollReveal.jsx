import { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  triggerOnce = true,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          } else if (!triggerOnce && !hasAnimated) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [triggerOnce, hasAnimated]);

  const splitText = () => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span 
          key={index} 
          className="scroll-reveal-word"
          style={{
            animationDelay: `${index * 0.05}s`
          }}
        >
          {word}
        </span>
      );
    });
  };

  const containerStyle = {
    '--base-opacity': baseOpacity,
    '--base-rotation': `${baseRotation}deg`,
    '--blur-strength': enableBlur ? `${blurStrength}px` : '0px',
  };

  return (
    <div
      ref={containerRef}
      className={`scroll-reveal-container ${isVisible ? 'animate' : ''} ${containerClassName}`}
      style={containerStyle}
    >
      <div className={`scroll-reveal-text ${textClassName}`}>
        {splitText()}
      </div>
    </div>
  );
};

export default ScrollReveal;
