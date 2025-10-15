import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}) => {
  const { scrollY } = useScroll();
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
      case 'down':
        return useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
      case 'left':
        return useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
      case 'right':
        return useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
      default:
        return useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0;
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0;

  return (
    <motion.div
      style={{ y, x }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  duration = 3,
  delay = 0
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`reveal-${delay}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  return (
    <motion.div
      id={`reveal-${delay}`}
      className={className}
      initial={getInitialPosition()}
      animate={isVisible ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

interface GradientBackgroundProps {
  className?: string;
  colors?: string[];
  speed?: number;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className = '',
  colors = ['#3b82f6', '#8b5cf6', '#06b6d4'],
  speed = 20
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: color }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
        />
      ))}
    </div>
  );
};



