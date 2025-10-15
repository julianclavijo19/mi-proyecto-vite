// Performance optimization utilities
export const performanceConfig = {
  // Image optimization
  imageFormats: ['webp', 'avif', 'jpg', 'png'],
  imageSizes: [320, 640, 768, 1024, 1280, 1920],
  
  // Animation settings
  animationDuration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  
  // Lazy loading
  lazyLoading: {
    rootMargin: '50px',
    threshold: 0.1,
  },
  
  // Debounce settings
  debounceDelay: 300,
  
  // Toast settings
  toastDuration: 5000,
};

// Utility functions for performance
export const optimizeImages = (src: string, width?: number, height?: number) => {
  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('f', 'webp');
  params.set('q', '80');
  
  return `${src}?${params.toString()}`;
};

export const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
  return img;
};

export const preloadImages = (srcs: string[]) => {
  return Promise.all(srcs.map(preloadImage));
};

// Intersection Observer for animations
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    rootMargin: performanceConfig.lazyLoading.rootMargin,
    threshold: performanceConfig.lazyLoading.threshold,
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Memory management
export const cleanupEventListeners = (element: Element, events: string[]) => {
  events.forEach(event => {
    element.removeEventListener(event, () => {});
  });
};

// Bundle size optimization
export const lazyImport = <T>(importFn: () => Promise<T>) => {
  return React.lazy(importFn);
};



