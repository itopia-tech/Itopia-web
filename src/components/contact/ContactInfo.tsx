import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contactInfo } from './contactData';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card className="backdrop-blur-sm bg-background/10 border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Información de contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-2xl">{info.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{info.title}</h3>
                  <p className="text-foreground/70">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-sm bg-background/10 border-white/10">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Consulta gratuita</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 mb-4">
            Ofrecemos una consulta inicial gratuita de 30 minutos para entender 
            tus necesidades y cómo podemos ayudarte.
          </p>
          <div className="space-y-2 text-sm text-foreground/70">
            <p>✓ Análisis inicial sin costo</p>
            <p>✓ Recomendaciones personalizadas</p>
            <p>✓ Propuesta de soluciones</p>
            <p>✓ Timeline y presupuesto estimado</p>
          </div>
        </CardContent>
      </Card>

      <Card className="backdrop-blur-sm bg-background/10 border-white/10">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Soporte de emergencia</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/80 mb-4">
            Para clientes existentes que requieren soporte técnico urgente:
          </p>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary mb-2">+1 (555) 911-TECH</p>
            <p className="text-sm text-foreground/70">Disponible 24/7</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};