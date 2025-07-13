import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Quiénes Somos', path: '/about' },
    { name: 'Servicios', path: '/services' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <header className="relative z-20 w-full">
      <div className="backdrop-blur-md bg-background/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ITopIA
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                    "hover:text-primary",
                    currentPath === item.path
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {item.name}
                  {currentPath === item.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-primary to-accent" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button - simplified for now */}
            <div className="md:hidden">
              <button className="text-foreground/80">☰</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};