export const seoData = {
  home: {
    title: "ITopIA - Soporte IT, Consultoría IA y Modernización Tecnológica",
    description: "Expertos en soporte IT, inteligencia artificial y modernización tecnológica. Consultoría especializada, mejora de procesos y soluciones IA para empresas. ¡Consulta gratuita!",
    keywords: "soporte IT, inteligencia artificial, IA, consultoría tecnológica, modernización IT, mejora procesos, automatización, transformación digital, soporte técnico, asistencia tecnológica",
    ogTitle: "ITopIA - Transformamos tu negocio con tecnología e inteligencia artificial",
    ogDescription: "Soporte especializado, consultoría personalizada y modernización IT para llevar tu empresa al futuro digital."
  },
  services: {
    title: "Servicios IT y Consultoría IA - Soporte Técnico Especializado | ITopIA",
    description: "Servicios profesionales de soporte IT, consultoría en inteligencia artificial, modernización tecnológica y mejora de procesos. Soluciones IA personalizadas para empresas.",
    keywords: "servicios IT, consultoría IA, soporte técnico 24/7, modernización tecnológica, automatización procesos, machine learning, análisis predictivo, migración nube, optimización sistemas",
    ogTitle: "Servicios Profesionales de IT e Inteligencia Artificial",
    ogDescription: "Descubre nuestros servicios especializados: soporte IT 24/7, consultoría IA, modernización tecnológica y automatización de procesos."
  },
  about: {
    title: "Sobre ITopIA - Expertos en Tecnología e Inteligencia Artificial",
    description: "Conoce a ITopIA, empresa especializada en soporte IT, consultoría en inteligencia artificial y modernización tecnológica. Experiencia y innovación para tu empresa.",
    keywords: "empresa IT, expertos IA, consultoría tecnológica, especialistas soporte técnico, innovación tecnológica, transformación digital empresarial",
    ogTitle: "ITopIA - Tu socio tecnológico para la transformación digital",
    ogDescription: "Empresa líder en consultoría tecnológica e inteligencia artificial con experiencia comprobada en transformación digital."
  },
  contact: {
    title: "Contacto - Consulta Gratuita IT e IA | ITopIA",
    description: "Contáctanos para una consulta gratuita sobre soporte IT, consultoría en IA y modernización tecnológica. Estamos listos para transformar tu empresa.",
    keywords: "contacto IT, consulta gratuita IA, asesoría tecnológica, soporte técnico empresarial, consultoría inteligencia artificial",
    ogTitle: "Contáctanos - Consulta Gratuita en Tecnología e IA",
    ogDescription: "¿Listo para transformar tu empresa? Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte."
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ITopIA",
  "description": "Empresa especializada en soporte IT, consultoría en inteligencia artificial y modernización tecnológica",
  "url": window.location.origin,
  "logo": `${window.location.origin}/favicon.ico`,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "sameAs": [],
  "serviceType": [
    "Soporte IT",
    "Consultoría en Inteligencia Artificial",
    "Modernización Tecnológica",
    "Automatización de Procesos",
    "Transformación Digital"
  ]
};

export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicios de Soporte IT y Consultoría IA",
  "description": "Servicios profesionales de soporte IT, consultoría en inteligencia artificial, modernización tecnológica y mejora de procesos",
  "provider": {
    "@type": "Organization",
    "name": "ITopIA"
  },
  "serviceType": "Technology Consulting",
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios IT e IA",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Soporte IT Especializado",
          "description": "Mantenimiento preventivo y correctivo de infraestructura tecnológica. Soporte técnico 24/7"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consultoría Estratégica",
          "description": "Análisis y diseño de estrategias tecnológicas alineadas con los objetivos de tu negocio"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Herramientas de IA",
          "description": "Implementación de soluciones de inteligencia artificial adaptadas a tu industria"
        }
      }
    ]
  }
};