import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/yY2XtMKV/logo-pian.png"
                alt="Pian Alimentos"
                className="h-20 w-auto border-4 border-pian-yellow rounded-lg p-2 bg-white shadow-lg"
                onError={(e) => {
                  e.currentTarget.outerHTML = '<span className="text-2xl font-bold font-montserrat">PIAN ALIMENTOS</span>';
                }}
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mais de 3 décadas de tradição em nutrição animal. Fórmulas fechadas desenvolvidas com amor e dedicação para o seu pet.
            </p>
            <p className="font-medium italic" style={{ fontFamily: 'Brush Script MT, cursive', color: '#FDD528' }}>
              <span className="text-4xl">A gente entende esse amor.</span>
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-barlow-condensed" style={{ color: '#FDD528' }}>Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" style={{ '--hover-color': '#FDD528' } as any} onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/distributors" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Distribuidores
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-barlow-condensed" style={{ color: '#FDD528' }}>Nossos Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Standard" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Linha Standard
                </Link>
              </li>
              <li>
                <Link to="/products?category=Premium" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Linha Premium
                </Link>
              </li>
              <li>
                <Link to="/products?category=Premium%20Especial" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Premium Especial
                </Link>
              </li>
              <li>
                <Link to="/products?category=Super%20Premium" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Super Premium
                </Link>
              </li>
              <li>
                <Link to="/products?category=Alimentos%20Úmidos" className="text-gray-300 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  Rações Úmidas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-barlow-condensed" style={{ color: '#FDD528' }}>Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" style={{ color: '#FDD528' }} />
                <span className="text-gray-300 font-bold font-barlow-condensed">(54) 3358-2222</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" style={{ color: '#FDD528' }} />
                <span className="text-gray-300 font-bold font-barlow-condensed">pian@pian.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1" style={{ color: '#FDD528' }} />
                <span className="text-gray-300 font-bold font-barlow-condensed">
                  RS-324, 1369<br />
                  Paraí - RS, 95360-000
                </span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3 font-barlow-condensed" style={{ color: '#FDD528' }}>Siga-nos</h4>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/pian.alimentos/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-200" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/pian.alimentos/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-200" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@Pian_alimentos" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-200" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t mt-8 pt-8" style={{ borderColor: '#2a2a2a' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-bold font-barlow-condensed">
              EP Mídia Brasil Ltda. 2025.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 transition-colors duration-200 font-bold font-barlow-condensed" onMouseEnter={(e) => e.currentTarget.style.color = '#FDD528'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;