import React, { useState, useEffect } from 'react';


const TypingEffect = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const currentText = texts[textIndex];

  useEffect(() => {
    let charIndex = 0;
    const intervalId = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          // Move to the next text after a pause
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000); // Adjust pause duration before moving to the next text
      }
    }, 100); // Adjust typing speed here (e.g., decrease/increase milliseconds)

    return () => clearInterval(intervalId);
  }, [currentText, textIndex, texts]);

  return <span className="typing-effect">{displayText}</span>;
};

export default TypingEffect;
