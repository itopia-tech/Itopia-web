'use client';

import { Suspense, lazy } from 'react';
import React from 'react';

// Lazy load the Spline component for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
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
      <Spline
        scene={scene}
        className={className} 
      />
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