import { useRef, useEffect } from 'react';
import './MetallicPaint.css';

const MetallicPaint = ({ children, className = '', intensity = 1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
      element.style.setProperty('--delta-x', deltaX);
      element.style.setProperty('--delta-y', deltaY);
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--mouse-x', '50%');
      element.style.setProperty('--mouse-y', '50%');
      element.style.setProperty('--delta-x', 0);
      element.style.setProperty('--delta-y', 0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={elementRef}
      className={`metallic-paint ${className}`}
      style={{ '--intensity': intensity }}
    >
      <div className="metallic-paint-content">
        {children}
      </div>
      <div className="metallic-paint-overlay"></div>
    </div>
  );
};

export default MetallicPaint;
