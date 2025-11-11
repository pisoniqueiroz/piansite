import React from 'react';
import { Lock, ExternalLink, Shield, Users, MapPin, Package, Award, TrendingUp } from 'lucide-react';

const Distributors = () => {
  return (
    <div className="pt-16">
      {/* Hero Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-pian-black via-gray-900 to-pian-black relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #FDD528 3px, transparent 3px),
                             radial-gradient(circle at 80% 70%, #E63946 2px, transparent 2px),
                             radial-gradient(circle at 50% 50%, #FDD528 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pian-black/50 to-pian-black"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pian-yellow/10 backdrop-blur-sm border border-pian-yellow/30 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
              <Shield className="h-5 w-5 text-pian-yellow" />
              <span className="text-pian-yellow font-bold font-barlow-condensed text-sm uppercase tracking-wider">Parceria Exclusiva</span>
            </div>

            {/* Main title */}
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white mb-6 font-barlow-condensed uppercase tracking-wider leading-none animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              DISTRIBUIDORES
            </h1>

            {/* Decorative lines */}
            <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-pian-red"></div>
              <div className="w-3 h-3 bg-pian-yellow rotate-45"></div>
              <div className="w-32 h-1 bg-pian-red"></div>
              <div className="w-3 h-3 bg-pian-yellow rotate-45"></div>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-pian-red"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-bold font-barlow-condensed leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Área Exclusiva para Nossos Parceiros
            </p>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto font-barlow-condensed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Acesse materiais, catálogos e recursos desenvolvidos especialmente para você
            </p>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Benefits Section - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-pian-yellow">
              <div className="w-16 h-16 bg-gradient-to-br from-pian-yellow to-pian-yellow-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-8 w-8 text-pian-black" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-barlow-condensed uppercase">Catálogos Completos</h3>
              <p className="text-gray-600 leading-relaxed font-barlow-condensed">Acesse todos os nossos catálogos de produtos atualizados com especificações técnicas detalhadas</p>
            </div>

            {/* Benefit 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-pian-red">
              <div className="w-16 h-16 bg-gradient-to-br from-pian-red to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-barlow-condensed uppercase">Material de Marketing</h3>
              <p className="text-gray-600 leading-relaxed font-barlow-condensed">Imagens em alta qualidade, banners e materiais promocionais para suas campanhas</p>
            </div>

            {/* Benefit 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-barlow-condensed uppercase">Suporte Exclusivo</h3>
              <p className="text-gray-600 leading-relaxed font-barlow-condensed">Atendimento prioritário e suporte técnico dedicado para nossos parceiros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Área Restrita - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Main access card */}
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute inset-0 bg-gradient-to-r from-pian-yellow/20 via-pian-red/20 to-pian-yellow/20 blur-3xl transform scale-105"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-pian-black via-gray-900 to-pian-black px-8 md:px-12 py-10 relative overflow-hidden">
                  {/* Animated pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, #FDD528 0px, #FDD528 10px, transparent 10px, transparent 20px)`,
                      animation: 'slide 20s linear infinite'
                    }}></div>
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pian-yellow to-pian-yellow-dark rounded-full mb-6 animate-pulse-orange shadow-2xl">
                      <Lock className="h-10 w-10 text-pian-black" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-3 font-barlow-condensed uppercase tracking-wider">
                      Área Restrita
                    </h2>
                    <p className="text-white/80 text-lg font-barlow-condensed max-w-2xl mx-auto">
                      Portal exclusivo com acesso a todos os recursos para distribuidores autorizados
                    </p>
                  </div>
                </div>

                {/* Content area */}
                <div className="px-8 md:px-12 py-16">
                  <div className="text-center max-w-2xl mx-auto">
                    {/* Info text */}
                    <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
                      <div className="flex items-start gap-4 text-left">
                        <div className="w-10 h-10 bg-pian-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-pian-yellow" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2 font-barlow-condensed">Acesso Protegido por Senha</h3>
                          <p className="text-gray-600 text-sm leading-relaxed font-barlow-condensed">
                            O link de acesso está protegido por senha. Entre em contato com nossa equipe comercial para obter suas credenciais de acesso.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Access button */}
                    <a
                      href="https://drive.google.com/drive/folders/1zyncMGhLEvO1nc2Z7_VakWunZwy2wTD-?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-pian-yellow via-pian-yellow-dark to-pian-yellow text-pian-black rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-bold text-xl overflow-hidden font-barlow-condensed uppercase tracking-wide"
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      {/* Button content */}
                      <Lock className="mr-4 h-7 w-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10">Acessar Portal</span>
                      <ExternalLink className="ml-4 h-7 w-7 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>

                    {/* Contact info */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <p className="text-gray-500 text-sm mb-4 font-barlow-condensed">
                        Precisa de ajuda com o acesso?
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a href="/contact" className="flex items-center gap-2 text-pian-red hover:text-pian-red/80 transition-colors font-bold font-barlow-condensed">
                          <MapPin className="h-4 w-4" />
                          <span>Entre em Contato</span>
                        </a>
                        <span className="text-gray-300">|</span>
                        <span className="flex items-center gap-2 text-gray-600 font-barlow-condensed">
                          <Shield className="h-4 w-4" />
                          <span>Acesso Seguro</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Distributors;