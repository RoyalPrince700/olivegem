import { useEffect } from 'react';
import logoImg from '../assets/oggclogo.png';
import heroImg from '../assets/oilandgas.png';

/**
 * Preloads critical images for faster initial load
 * This component should be included in App.jsx to preload images on app start
 */
const ImagePreloader = () => {
  useEffect(() => {
    // List of critical images to preload (using imported paths)
    const criticalImages = [
      { src: logoImg, priority: 'high' },
      { src: heroImg, priority: 'high' },
    ];

    // Preload each critical image
    criticalImages.forEach(({ src, priority }) => {
      // Preload using link tag for better browser support
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (priority) {
        link.setAttribute('fetchpriority', priority);
      }
      document.head.appendChild(link);

      // Also preload using Image object for immediate loading
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;

