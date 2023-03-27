import { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex));
      setCurrentIndex(currentIndex + 1);
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text, currentIndex]);

  return <span>{displayText}</span>;
};

export default TypingText;
