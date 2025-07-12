import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { seoData, serviceStructuredData } from '@/utils/seoData';

const Services = () => {
  const mainServices = [
    {
      title: 'Soporte IT Especializado',
      description: 'Mantenimiento preventivo y correctivo de infraestructura tecnológica. Soporte técnico 24/7 para garantizar la continuidad operativa de tu empresa.',
      features: ['Monitoreo 24/7', 'Mantenimiento preventivo', 'Soporte remoto y presencial', 'Gestión de infraestructura'],
      icon: '🛠️'
    },
    {
      title: 'Consultoría Estratégica',
      description: 'Análisis y diseño de estrategias tecnológicas alineadas con los objetivos de tu negocio. Roadmaps de transformación digital personalizados.',
      features: ['Análisis de procesos', 'Estrategia digital', 'Roadmaps personalizados', 'Evaluación tecnológica'],
      icon: '📊'
    },
    {
      title: 'Asesoría Personalizada',
      description: 'Acompañamiento especializado en la toma de decisiones tecnológicas. Evaluación de soluciones y proveedores según tus necesidades específicas.',
      features: ['Consultoría uno a uno', 'Evaluación de tecnologías', 'Selección de proveedores', 'Planes de implementación'],
      icon: '👥'
    },
    {
      title: 'Modernización IT',
      description: 'Actualización y optimización de sistemas legacy. Migración a la nube, integración de nuevas tecnologías y mejora de procesos existentes.',
      features: ['Migración a la nube', 'Actualización de sistemas', 'Integración de APIs', 'Optimización de procesos'],
      icon: '⚡'
    },
    {
      title: 'Herramientas de IA',
      description: 'Implementación de soluciones de inteligencia artificial adaptadas a tu industria. Automatización inteligente y análisis predictivo.',
      features: ['Chatbots inteligentes', 'Análisis predictivo', 'Automatización de procesos', 'Machine Learning personalizado'],
      icon: '🤖'
    },
    {
      title: 'Mejora de Procesos IT',
      description: 'Optimización de workflows tecnológicos, implementación de metodologías ágiles y mejora continua de procesos operativos.',
      features: ['Análisis de workflows', 'Metodologías ágiles', 'Automatización de tareas', 'Mejora continua'],
      icon: '📈'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <SEOHead
        title={seoData.services.title}
        description={seoData.services.description}
        keywords={seoData.services.keywords}
        ogTitle={seoData.services.ogTitle}
        ogDescription={seoData.services.ogDescription}
        structuredData={serviceStructuredData}
      />
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="backdrop-blur-sm bg-background/10 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-foreground/80">
              Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="backdrop-blur-sm bg-background/10 border-white/10 hover:bg-background/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground/70">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="backdrop-blur-sm bg-background/10 border-white/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">¿Listo para transformar tu empresa?</h2>
              <p className="text-foreground/80 mb-6">
                Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Solicitar Consulta Gratuita</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Conoce más sobre nosotros</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;