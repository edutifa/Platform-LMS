'use client';

import { useEffect, useState } from 'react';

interface RotatingTextProps {
  text: string[];
  duration?: number;
  className?: string;
}

export function RotatingText({
  text,
  duration = 2000,
  className = '',
}: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycle = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % text.length);
        setIsVisible(true);
      }, 300);
    };

    const interval = setInterval(cycle, duration);
    return () => clearInterval(interval);
  }, [text.length, duration]);

  return (
    <span className="relative inline-block min-w-max">
      <span
        className={`${className} block transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {text[currentIndex]}
      </span>
    </span>
  );
}