import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      title: 'Soporte IT',
      description: 'Soporte técnico especializado 24/7 para mantener tu empresa operativa.',
      icon: '🛠️'
    },
    {
      title: 'Consultoría IA',
      description: 'Implementación estratégica de inteligencia artificial en tu negocio.',
      icon: '🤖'
    },
    {
      title: 'Modernización',
      description: 'Actualización y optimización de tus sistemas tecnológicos.',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-background/10 rounded-2xl p-8 border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ITopIA
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light">
              Transformamos tu negocio con tecnología e inteligencia artificial
            </p>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Soporte especializado, consultoría personalizada y modernización IT 
              para llevar tu empresa al futuro digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/services">Nuestros Servicios</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">Contactanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Lo que hacemos</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Soluciones tecnológicas integrales para el crecimiento de tu empresa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="backdrop-blur-sm bg-background/10 border-white/10 hover:bg-background/20 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;