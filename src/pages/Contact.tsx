import React from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

const Contact = () => {
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
          <ContactForm />

          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;