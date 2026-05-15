import React, { useState, useEffect, useRef } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+';

const MatrixText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let iterations = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text.split('').map((char, index) => {
          if (index < iterations) return text[index];
          if (char === ' ') return ' ';
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );
      
      if (iterations >= text.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
      }
      
      iterations += 1/3;
    }, 30);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span 
      onMouseEnter={startAnimation} 
      className={`${className} cursor-default`}
    >
      {displayText}
    </span>
  );
};

export default MatrixText;
