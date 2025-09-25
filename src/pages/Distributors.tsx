import React from 'react';
import DistributorsSection from '../components/DistributorsSection';
import { Lock, ExternalLink, Shield, Users, MapPin } from 'lucide-react';

const Distributors = () => {
  const [showPasswordModal, setShowPasswordModal] = React.useState(false);

  return (
    <div className="pt-16">
      {/* Hero Section - Clean and Elegant */}
      <section className="py-16 bg-pian-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10 dark-pattern-overlay">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FDD528 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #FDD528 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Main title */}
            <h1 className="text-[95px] font-black text-white mb-4 font-barlow-condensed uppercase tracking-wider">
              DISTRIBUIDORES
            </h1>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-pian-red mx-auto mb-6"></div>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-bold font-barlow-condensed leading-relaxed">
              Área exclusiva para nossos parceiros distribuidores
            </p>
          </div>
        </div>
      </section>

      {/* Área Restrita com design aprimorado */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Card principal da área restrita */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pian-yellow/20 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl animate-fade-in-up">
              {/* Header do card */}
              <div className="bg-gradient-to-r from-pian-yellow to-pian-yellow-dark px-8 py-6 relative overflow-hidden">
                {/* Animação de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-pian-black/20 rounded-full flex items-center justify-center mr-4 animate-pulse-orange">
                    <Lock className="h-8 w-8 text-pian-black" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-pian-black mb-1 font-bold font-barlow-condensed">
                      Área Restrita
                    </h2>
                    <p className="text-pian-black/80 text-sm font-montserrat">
                      Acesso exclusivo para distribuidores autorizados
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Conteúdo do card */}
              <div className="px-8 py-12 text-center animate-fade-in-delay">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3 font-bold font-barlow-condensed">
                    Portal do Distribuidor
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed font-bold font-barlow-condensed">
                    Acesse materiais exclusivos, catálogos atualizados, conteúdo técnico, 
                    treinamentos e muito mais material desenvolvido especialmente 
                    para nossos parceiros distribuidores.
                  </p>
                </div>
                
                {/* Recursos disponíveis */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-delay-2">
                  <div className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-pian-yellow/10">
                    <div className="w-10 h-10 bg-pian-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-pian-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white text-sm font-bold font-barlow-condensed">Catálogos</h4>
                    <p className="text-gray-300 text-xs mt-1 font-bold font-barlow-condensed">Produtos atualizados</p>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-pian-yellow/10">
                    <div className="w-10 h-10 bg-pian-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-pian-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white text-sm font-bold font-barlow-condensed">Materiais</h4>
                    <p className="text-gray-300 text-xs mt-1 font-bold font-barlow-condensed">Conteúdo exclusivo</p>
                  </div>
                  
                  <div className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-pian-yellow/10">
                    <div className="w-10 h-10 bg-pian-yellow/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-5 h-5 text-pian-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-white text-sm font-bold font-barlow-condensed">Treinamentos</h4>
                    <p className="text-gray-300 text-xs mt-1 font-bold font-barlow-condensed">Capacitação técnica</p>
                  </div>
                </div>
                
                {/* Botão principal */}
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="group inline-flex items-center px-10 py-4 bg-pian-yellow text-pian-black rounded-2xl hover:bg-pian-yellow-dark transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl font-bold text-lg animate-bounce-subtle relative overflow-hidden font-bold font-barlow-condensed"
                >
                  {/* Efeito de brilho no botão */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Lock className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  <span className="relative z-10">Área do Distribuidor</span>
                  <ExternalLink className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-gray-400 text-sm mt-4 animate-fade-in-delay-2 font-bold font-barlow-condensed">
                  Acesso restrito mediante senha fornecida pela equipe comercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distributors;