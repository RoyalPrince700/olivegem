import React, { useState } from 'react';

/**
 * Optimized Image Component with loading states and proper attributes
 * @param {string} src - Image source
 * @param {string} alt - Alt text
 * @param {string} className - CSS classes
 * @param {boolean} eager - If true, loads immediately (for above-the-fold images)
 * @param {string} fetchPriority - 'high' for critical images, 'low' for others
 * @param {function} onError - Error handler
 * @param {object} rest - Other img props
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  eager = false, 
  fetchPriority = 'auto',
  onError,
  ...rest 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    if (onError) {
      onError(e);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
      )}
      
      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={fetchPriority}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...rest}
      />
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

