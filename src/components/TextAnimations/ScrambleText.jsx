import { useEffect, useRef, useState } from 'react';
import './ScrambleText.css';

const ScrambleText = ({
  children,
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+",
  className = "",
  style = {},
  enableOnView = false,
}) => {
  const rootRef = useRef(null);
  const [isScrambling, setIsScrambling] = useState(false);
  const [scrambledText, setScrambledText] = useState('');
  const originalText = typeof children === 'string' ? children : '';

  useEffect(() => {
    if (!rootRef.current) return;

    const handleMouseMove = (e) => {
      if (!originalText) return;
      
      const rect = rootRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      
      if (distance < radius && !isScrambling) {
        scrambleNearbyText(e.clientX, e.clientY);
      }
    };

    const scrambleNearbyText = (mouseX, mouseY) => {
      setIsScrambling(true);
      
      let iterations = 0;
      const maxIterations = Math.floor(duration * 60); // 60fps approximation
      
      const interval = setInterval(() => {
        const progress = iterations / maxIterations;
        
        let newText = '';
        for (let i = 0; i < originalText.length; i++) {
          if (originalText[i] === ' ') {
            newText += ' ';
          } else if (Math.random() < progress) {
            newText += originalText[i];
          } else {
            newText += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
        }
        
        setScrambledText(newText);
        iterations++;
        
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setScrambledText(originalText);
          setIsScrambling(false);
        }
      }, 1000 * speed / 60);
    };

    // Auto-scramble on view
    if (enableOnView) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isScrambling) {
            // Simulate mouse move at center
            const rect = entry.target.getBoundingClientRect();
            scrambleNearbyText(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }
        });
      });
      
      observer.observe(rootRef.current);
      
      return () => observer.disconnect();
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [originalText, radius, duration, speed, scrambleChars, isScrambling, enableOnView]);

  const displayText = isScrambling ? scrambledText : originalText;

  return (
    <div
      ref={rootRef}
      className={`scramble-text ${className}`}
      style={style}
    >
      <p className="scramble-text-content">{displayText}</p>
    </div>
  );
};

export default ScrambleText;
