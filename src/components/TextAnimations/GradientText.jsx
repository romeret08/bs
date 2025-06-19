import { useState, useEffect } from 'react';
import './GradientText.css';

const GradientText = ({
  children,
  className = "",
  colors = ["#A8EFFF", "#FAD5FF", "#B8FFEC", "#C385FF", "#00F7FF"], // Beatsupplier colors
  animationSpeed = 8,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`gradient-text-container ${showBorder ? 'with-border' : ''} ${className}`}>
      {showBorder && (
        <div
          className="gradient-border"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div className="gradient-border-inner"></div>
        </div>
      )}
      <div
        className="gradient-text"
        style={{
          ...gradientStyle,
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientText;
