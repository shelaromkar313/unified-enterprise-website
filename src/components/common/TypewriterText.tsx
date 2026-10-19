import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  textClassName?: string;
}

export default function TypewriterText({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = '',
  textClassName = 'text-white',
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] || '';

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      // Word fully typed, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && text === '') {
      // Word fully cleared, switch to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Step character typing or deleting
      const stepDuration = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, stepDuration);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center justify-start min-h-[1.25em] ${className}`}>
      <span className={textClassName}>
        {text || '\u00A0'}
      </span>
      <span className="ml-1 text-white/80 font-light animate-pulse select-none inline-block">
        |
      </span>
    </span>
  );
}

