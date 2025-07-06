'use client';

import { Suspense, lazy, useState, useEffect } from 'react';
import React from 'react';

// Lazy load the Spline component for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('🚀 Spline component mounting with scene:', scene);
    setIsLoading(true);
    setError(null);
  }, [scene]);

  const handleLoad = () => {
    console.log('✅ Spline scene loaded successfully');
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    console.error('❌ Spline scene failed to load:', error);
    setError('Failed to load 3D scene');
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-background text-foreground ${className}`}>
        <div className="text-destructive mb-4">⚠️ {error}</div>
        <button 
          onClick={() => {
            setError(null);
            setIsLoading(true);
            console.log('🔄 Retrying Spline scene load');
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-background text-foreground ${className}`}>
          <svg className="animate-spin h-5 w-5 text-foreground mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
          </svg>
          Loading 3D Model...
        </div>
      }
    >
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
            <div className="text-foreground">Loading robot...</div>
          </div>
        )}
        <Spline
          scene={scene}
          className={className}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </Suspense>
  );
}

interface SplineSectionProps {
  sceneUrl?: string;
  className?: string;
}

export default function SplineSection({ 
  sceneUrl = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode",
  className
}: SplineSectionProps) {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <InteractiveRobotSpline
        scene={sceneUrl}
        className="absolute inset-0 z-0" 
      />
    </div> 
  );
}