import React, { useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Logo from '@/components/Logo';
import ContactForm from '@/components/ContactForm';
import ServiceCard from '@/components/ServiceCard';
import Testimonial from '@/components/Testimonial';

const Index = () => {
  // Add animation classes when elements become visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-alicerce-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-alicerce-dark hover:text-alicerce-deep font-medium transition-colors">Início</a>
              <a href="#sobre" className="text-alicerce-dark hover:text-alicerce-deep font-medium transition-colors">Sobre</a>
              <a href="#servicos" className="text-alicerce-dark hover:text-alicerce-deep font-medium transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-alicerce-dark hover:text-alicerce-deep font-medium transition-colors">Depoimentos</a>
              <a href="#contato" className="text-alicerce-dark hover:text-alicerce-deep font-medium transition-colors">Contato</a>
            </nav>
            <div className="md:hidden">
              <button className="text-alicerce-dark focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-alicerce-light to-gray-50">
        <div className="container-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-alicerce-dark mb-6 leading-tight">
                Construindo o <span className="text-alicerce-deep">futuro</span> com solidez
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Engenharia civil de excelência para projetos que transformam sonhos em estruturas duradouras.
              </p>
              <div className="hidden md:block">
                <a href="#contato" className="btn-primary inline-block">
                  Fale Conosco
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-alicerce-dark">Solicite um orçamento</h2>
                <p className="text-gray-600">Preencha o formulário e entraremos em contato</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container-section">
          <div className="animate-on-scroll">
            <h2 className="section-title">Sobre a Alicerce</h2>
            <p className="section-subtitle">
              Há mais de 15 anos construindo projetos de sucesso e transformando o cenário urbano com soluções inovadoras.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="animate-on-scroll">
              <div className="bg-alicerce-dark/5 rounded-lg p-1">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Alicerce Engenharia" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-alicerce-dark mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Na Alicerce, nossa missão é oferecer soluções de engenharia civil que combinam inovação técnica, sustentabilidade e eficiência econômica. Trabalhamos para construir estruturas que não apenas atendam às necessidades imediatas, mas também sirvam como base para o desenvolvimento futuro.
              </p>
              <h3 className="text-2xl font-bold text-alicerce-dark mb-4">Nossos Valores</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alicerce-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Excelência técnica e compromisso com a qualidade
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alicerce-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Responsabilidade ambiental e sustentabilidade
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alicerce-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Inovação e adaptabilidade
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-alicerce-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integridade e transparência
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container-section">
          <div className="animate-on-scroll">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-subtitle">
              Oferecemos soluções completas em engenharia civil para atender às suas necessidades com excelência e precisão.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
              <ServiceCard 
                title="Construção Civil"
                description="Realizamos construções residenciais e comerciais com excelência, desde o planejamento até a entrega final."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <ServiceCard 
                title="Projetos Estruturais"
                description="Desenvolvemos projetos estruturais utilizando tecnologia avançada, garantindo segurança e durabilidade."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                }
              />
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <ServiceCard 
                title="Obras Comerciais"
                description="Executamos obras comerciais com eficiência, respeitando prazos, orçamentos e as necessidades específicas do seu negócio."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <ServiceCard 
                title="Consultoria Especializada"
                description="Oferecemos consultoria técnica para análise, viabilidade e otimização de projetos de engenharia civil."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container-section">
          <div className="animate-on-scroll">
            <h2 className="section-title">Depoimentos</h2>
            <p className="section-subtitle">
              Veja o que nossos clientes dizem sobre nossos serviços e projetos realizados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="animate-on-scroll">
              <Testimonial 
                quote="A Alicerce superou todas as nossas expectativas. O projeto foi entregue no prazo e com excelente qualidade. Estamos extremamente satisfeitos com o resultado final e certamente trabalharemos com eles novamente em futuros projetos."
                author="Carlos Silva"
                title="Empresário"
              />
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <Testimonial 
                quote="A equipe da Alicerce demonstrou profissionalismo e competência em todas as etapas do nosso projeto. Desde o planejamento inicial até a finalização, cada detalhe foi cuidadosamente considerado."
                author="Marina Gomes"
                title="Arquiteta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 cta-section text-white bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x">
        <div className="container-section">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 cta-title">Vamos iniciar seu projeto?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto cta-text">
              Entre em contato conosco para discutir suas necessidades e como podemos ajudar a concretizar seus projetos.
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              className="px-8 py-4 bg-white text-alicerce-dark rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center animate-bounce"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-alicerce-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo />
            </div>
            <div className="flex space-x-6">
              <a href="#inicio" className="text-white/80 hover:text-white transition-colors">Início</a>
              <a href="#sobre" className="text-white/80 hover:text-white transition-colors">Sobre</a>
              <a href="#servicos" className="text-white/80 hover:text-white transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-white/80 hover:text-white transition-colors">Depoimentos</a>
              <a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left">
            <p className="text-white/60">
              &copy; {new Date().getFullYear()} Alicerce Engenharia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
