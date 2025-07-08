import emailjs from '@emailjs/browser';

export interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: FormData): string | null => {
  if (!formData.name || !formData.email || !formData.message) {
    return "Por favor completa los campos obligatorios.";
  }

  if (!validateEmail(formData.email)) {
    return "Por favor ingresa un email válido.";
  }

  return null;
};

export const sendEmail = async (formData: FormData): Promise<void> => {
  // EmailJS configuration - Replace with your actual credentials
  const serviceId = 'service_a2tz65m';
  const templateId = 'template_s3xxu4j';
  const publicKey = 'eEci_wuWIg8UAUeiD';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company || 'No especificada',
    phone: formData.phone || 'No especificado',
    service: formData.service || 'No especificado',
    message: formData.message,
    to_name: 'ITopIA',
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
};