import React from 'react';
import { useImageLoader } from '../utils/imageLoader';
import { R2_CONFIG } from '../config/r2Config';

function LoadingPlaceholder({ width, height }) {
  return (
    <div
      style={{
        width,
        height,
        background: 'rgba(168, 85, 247, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      }}
    >
      <div className="loading-spinner"></div>
    </div>
  );
}

function ErrorPlaceholder({ width, height, error, path }) {
  return (
    <div
      style={{
        width,
        height,
        background: 'rgba(239, 68, 68, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        color: '#ef4444',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '0.875rem',
      }}
    >
      <div>Failed to load image</div>
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.8 }}>
        Path: {path}
      </div>
      {error && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.8 }}>
          Error: {error.message}
        </div>
      )}
    </div>
  );
}

export default function R2Image({
  path,
  alt,
  width,
  height,
  className,
  style = {},
  onLoad,
  onError,
}) {
  const fullPath = `${R2_CONFIG.imagePrefix}${path}`;
  const { isLoading, error, imageUrl } = useImageLoader(fullPath);

  console.log('Loading image:', {
    path,
    fullPath,
    imageUrl,
    error: error?.message,
    isLoading
  });

  if (isLoading) {
    return <LoadingPlaceholder width={width} height={height} />;
  }

  if (error) {
    return <ErrorPlaceholder width={width} height={height} error={error} path={fullPath} />;
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ ...style, objectFit: 'cover' }}
      onLoad={(e) => {
        console.log('Image loaded successfully:', path);
        onLoad?.(e);
      }}
      onError={(e) => {
        console.error('Image load failed:', path, e.target.error);
        onError?.(e);
      }}
    />
  );
} 