"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Component for typing animation
export function AnimatedSubtitle({ subtitles }: { subtitles: string[] }) {
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const subtitle = subtitles[currentSubtitleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typedSubtitle.length < subtitle.length) {
        timeout = setTimeout(() => {
          setTypedSubtitle(subtitle.slice(0, typedSubtitle.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedSubtitle.length > 0) {
        timeout = setTimeout(() => {
          setTypedSubtitle(typedSubtitle.slice(0, typedSubtitle.length - 1));
        }, 30);
      } else {
        setIsTyping(true);
        setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedSubtitle, isTyping, subtitles, currentSubtitleIndex]);

  return (
    <p className="text-lg text-muted-foreground md:text-xl">
      {typedSubtitle}
      <span className="animate-pulse">|</span>
    </p>
  );
}

// Wrapper for view-controlled animations
interface ViewControlledAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ViewControlledAnimation({ children, className, delay = 0.2 }: ViewControlledAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
