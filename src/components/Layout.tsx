import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import SplineSection from './ui/interactive-robot-spline';

export const Layout = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Robot background - fixed behind all content */}
      <div className="fixed inset-0 z-0">
        <SplineSection />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};