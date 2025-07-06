import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="backdrop-blur-sm bg-background/10 rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Quiénes Somos
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Expertos en tecnología e inteligencia artificial, comprometidos con la transformación digital de tu empresa.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-1 gap-8 mb-16">
          <Card className="backdrop-blur-sm bg-background/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-foreground/80">
                Democratizar el acceso a la inteligencia artificial y la tecnología avanzada, 
                proporcionando soluciones personalizadas que impulsen el crecimiento y la 
                eficiencia de las empresas, sin importar su tamaño.
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-background/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-foreground/80">
                Ser la empresa líder en consultoría e implementación de IA en América Latina, 
                reconocida por nuestra innovación, excelencia técnica y compromiso con el 
                éxito de nuestros clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Innovación',
                description: 'Siempre a la vanguardia de las últimas tecnologías y tendencias en IA.',
                icon: '💡'
              },
              {
                title: 'Personalización',
                description: 'Cada solución está diseñada específicamente para las necesidades únicas de tu empresa.',
                icon: '🎯'
              },
              {
                title: 'Transparencia',
                description: 'Comunicación clara y honesta en cada etapa del proyecto.',
                icon: '🔍'
              },
              {
                title: 'Excelencia',
                description: 'Comprometidos con la calidad y la mejora continua en todo lo que hacemos.',
                icon: '⭐'
              }
            ].map((value, index) => (
              <Card key={index} className="backdrop-blur-sm bg-background/10 border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <Card className="backdrop-blur-sm bg-background/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">¿Por qué elegir ITopIA?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 mb-6">
                En ITopIA combinamos experiencia técnica con visión estratégica para ofrecer 
                soluciones que realmente transforman tu negocio.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">5+</div>
                  <p className="text-foreground/70">Años de experiencia</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100+</div>
                  <p className="text-foreground/70">Proyectos exitosos</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-foreground/70">Soporte técnico</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;