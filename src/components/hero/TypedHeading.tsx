import { useEffect, useState } from 'react';

interface TypedHeadingProps {
  words: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypedHeading({ 
  words, 
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000 
}: TypedHeadingProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const maxLength = Math.max(...words.map(word => word.length));

  useEffect(() => {
    const word = words[currentWordIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(timer);
    }

    if (currentText === word) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentText(word.slice(0, currentText.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span 
      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]"
      style={{
        minWidth: `${maxLength}ch`,
        display: 'inline-block',
        verticalAlign: 'top'
      }}
    >
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}