
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      
      // Reset form
      setFormValues({
        name: '',
        email: '',
        phone: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome Completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formValues.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Seu nome completo"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formValues.email}
          onChange={handleChange}
          className="form-input"
          placeholder="seu.email@exemplo.com"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formValues.phone}
          onChange={handleChange}
          className="form-input"
          placeholder="(00) 00000-0000"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex justify-center items-center"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          "Solicitar Contato"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
