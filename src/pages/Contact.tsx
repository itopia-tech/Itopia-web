import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'contacto.itopia@gmail.com',
      icon: '📧'
    },
    {
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      icon: '📞'
    },
    {
      title: 'Ubicación',
      value: 'Montevideo, Uruguay',
      icon: '📍'
    },
    {
      title: 'Horario',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      icon: '🕒'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="backdrop-blur-sm bg-background/10 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contacto
            </h1>
            <p className="text-xl text-foreground/80">
              ¿Listo para transformar tu empresa? Contáctanos para una consulta gratuita
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-background/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nombre *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="bg-background/20 border-white/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="bg-background/20 border-white/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                      className="bg-background/20 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-background/20 border-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Servicio de interés</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md bg-background/20 border border-white/20 text-foreground"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="soporte">Soporte IT</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="asesoria">Asesoría Personalizada</option>
                    <option value="modernizacion">Modernización IT</option>
                    <option value="ia">Herramientas de IA</option>
                    <option value="procesos">Mejora de Procesos</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    rows={5}
                    className="bg-background/20 border-white/20"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;