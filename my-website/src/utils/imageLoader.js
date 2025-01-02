import React, { useState, useEffect } from 'react';

// Cloudflare R2 配置
const R2_BUCKET_URL = 'https://1e29a267dfdfcb81cb84c28b7d71d39c.r2.cloudflarestorage.com';

export function getR2ImageUrl(imagePath) {
  // 移除开头的斜杠（如果有）
  const cleanPath = imagePath.replace(/^\/+/, '');
  // 检查路径格式
  if (!cleanPath) {
    throw new Error('Image path is empty');
  }
  
  const url = `${R2_BUCKET_URL}/johnny/${cleanPath}`;
  console.log('Generated R2 URL:', {
    originalPath: imagePath,
    cleanPath,
    fullUrl: url
  });
  return url;
}

// 图片预加载函数
export function preloadImage(imageUrl) {
  console.log('Preloading image:', imageUrl);
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      console.log('Image loaded successfully:', imageUrl, {
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight
      });
      resolve(img);
    };
    
    img.onerror = (error) => {
      console.error('Image load failed:', {
        url: imageUrl,
        error: error,
        status: img.status,
        statusText: img.statusText
      });
      reject(new Error(`Failed to load image: ${imageUrl} (${error.type})`));
    };

    // 添加超时处理
    const timeout = setTimeout(() => {
      img.src = '';
      reject(new Error(`Image load timeout after 10s: ${imageUrl}`));
    }, 10000);

    // 设置 crossOrigin 属性
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    // 清理超时
    img.onload = () => {
      clearTimeout(timeout);
      console.log('Image loaded successfully:', imageUrl, {
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight
      });
      resolve(img);
    };
  });
}

// 图片加载状态检查
export function useImageLoader(imagePath) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadImage = async () => {
      try {
        console.log('Starting to load image:', imagePath);
        const url = getR2ImageUrl(imagePath);
        
        // 验证URL格式
        if (!url || !url.startsWith('http')) {
          throw new Error(`Invalid image URL: ${url}`);
        }

        // 尝试发送 HEAD 请求检查图片是否存在
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (!response.ok) {
            throw new Error(`Image not found: ${response.status} ${response.statusText}`);
          }
          console.log('Image exists:', url, {
            contentType: response.headers.get('content-type'),
            contentLength: response.headers.get('content-length')
          });
        } catch (headError) {
          console.warn('HEAD request failed:', headError);
          // 继续尝试加载图片，因为某些服务器可能不支持 HEAD 请求
        }

        await preloadImage(url);
        
        if (isMounted) {
          console.log('Setting image URL:', url);
          setImageUrl(url);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Image load error:', {
          path: imagePath,
          error: err,
          stack: err.stack
        });
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [imagePath]);

  return { isLoading, error, imageUrl };
} 