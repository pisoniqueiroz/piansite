import React from 'react';
import { X, Package, Award, Beef, Activity } from 'lucide-react';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
    type?: string;
    line?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const parseDescription = (description: string) => {
    const sections = {
      descricao: '',
      composicao: '',
      enriquecimento: '',
      niveis: '',
      diferenciais: ''
    };

    const descMatch = description.match(/##\s*DESCRIÇÃO\s*([\s\S]*?)(?=##|$)/i);
    if (descMatch) {
      sections.descricao = descMatch[1].trim();
    }

    const composicaoMatch = description.match(/##\s*COMPOSIÇÃO BÁSICA\s*([\s\S]*?)(?=##|$)/i);
    if (composicaoMatch) {
      sections.composicao = composicaoMatch[1].trim();
    }

    const enriquecimentoMatch = description.match(/##\s*ENRIQUECIMENTO MÍNIMO POR KG\s*([\s\S]*?)(?=##|$)/i);
    if (enriquecimentoMatch) {
      sections.enriquecimento = enriquecimentoMatch[1].trim();
    }

    const niveisMatch = description.match(/##\s*NÍVEIS DE GARANTIA\s*([\s\S]*?)(?=##|$)/i);
    if (niveisMatch) {
      sections.niveis = niveisMatch[1].trim();
    }

    const diferenciaisMatch = description.match(/##\s*DIFERENCIAIS\s*([\s\S]*?)$/i);
    if (diferenciaisMatch) {
      sections.diferenciais = diferenciaisMatch[1].trim();
    }

    return sections;
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => {
      line = line.trim();
      if (!line) return null;

      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="font-bold text-pian-black mt-4 mb-2 text-base">
            {line.replace(/\*\*/g, '')}
          </h4>
        );
      }

      if (line.startsWith('- ') || line.startsWith('✓ ')) {
        return (
          <li key={index} className="ml-4 text-gray-800 text-sm leading-relaxed">
            {line.replace(/^- |^✓ /, '')}
          </li>
        );
      }

      if (line.startsWith('*')) {
        return (
          <p key={index} className="text-gray-600 italic text-xs mt-2">
            {line}
          </p>
        );
      }

      if (line.includes('|')) {
        const items = line.split('|').map(item => item.trim()).filter(item => item);
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg">
                <span className="text-pian-red font-bold text-xs">•</span>
                <span className="text-gray-800 text-xs leading-relaxed flex-1">{item}</span>
              </div>
            ))}
          </div>
        );
      }

      return (
        <p key={index} className="text-gray-800 text-sm leading-relaxed mb-2">
          {line}
        </p>
      );
    });
  };

  const sections = parseDescription(product.description);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl rounded-3xl border border-pian-yellow/20 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-pian-black/90 hover:bg-pian-red text-white transition-all duration-300 group rounded-full shadow-lg hover:scale-110"
          aria-label="Fechar"
        >
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Hero Header - Inspired by Distributors */}
        <div className="bg-pian-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #FDD528 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #FDD528 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 px-8 py-8 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="inline-block bg-pian-yellow text-pian-black px-4 py-2 text-xs font-bold uppercase tracking-wider font-barlow-condensed">
                {product.category}
              </span>
              {product.type && (
                <span className="inline-block bg-pian-red text-white px-4 py-2 text-xs font-bold uppercase tracking-wider font-barlow-condensed">
                  {product.type}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 font-barlow-condensed uppercase tracking-wider">
              {product.name}
            </h1>

            <div className="w-24 h-1 bg-pian-red mx-auto"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] bg-white">
          <div className="p-8 lg:p-12">
            {/* Product Image Card */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 bg-white">
                <div className="p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain mx-auto transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/fallback-product.svg';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Information Sections */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* DIFERENCIAIS - DESTAQUE MÁXIMO ABSOLUTO */}
              {sections.diferenciais && (
                <div className="relative mb-16 mt-8">
                  {/* Múltiplos efeitos de brilho INTENSOS */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-red-600 via-pian-red to-red-600 rounded-[2.5rem] blur-3xl opacity-60 animate-pulse"></div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-pian-yellow via-yellow-400 to-pian-yellow rounded-[2.5rem] blur-2xl opacity-50 animate-pulse" style={{animationDelay: '0.3s', animationDuration: '1.5s'}}></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-[2.5rem] blur-xl opacity-40 animate-pulse" style={{animationDelay: '0.6s', animationDuration: '2s'}}></div>

                  <div className="relative rounded-[2rem] shadow-[0_0_80px_rgba(220,38,38,0.8)] overflow-hidden transform hover:scale-[1.05] transition-all duration-700 border-[6px] border-pian-yellow" style={{boxShadow: '0 0 100px rgba(220,38,38,0.9), 0 0 150px rgba(234,179,8,0.6), inset 0 0 30px rgba(255,255,255,0.1)'}}>

                    {/* Badge SUPER DESTAQUE com animação */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                      <div className="relative">
                        <div className="absolute inset-0 bg-pian-yellow blur-md animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-pian-yellow via-yellow-300 to-pian-yellow text-pian-black px-12 py-3 rounded-full text-lg font-black uppercase tracking-[0.3em] shadow-2xl border-[5px] border-pian-red animate-bounce" style={{animationDuration: '1.5s'}}>
                          🌟🌟🌟 DIFERENCIAIS 🌟🌟🌟
                        </div>
                      </div>
                    </div>

                    {/* Cabeçalho GIGANTE com múltiplos efeitos */}
                    <div className="bg-gradient-to-br from-pian-red via-red-600 to-pian-red px-12 py-16 relative overflow-hidden">
                      {/* Efeitos de fundo animados */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 animate-shimmer"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_60%)] animate-pulse"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.2),transparent_60%)] animate-pulse" style={{animationDelay: '1s'}}></div>

                      <div className="flex flex-col items-center justify-center text-center gap-6 relative z-10">
                        {/* Ícone gigante com múltiplos aros */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-pian-yellow/30 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
                          <div className="absolute inset-0 bg-pian-yellow/20 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
                          <div className="relative bg-gradient-to-br from-pian-yellow via-yellow-300 to-yellow-400 p-6 rounded-full shadow-2xl animate-pulse">
                            <Award className="h-20 w-20 text-pian-red drop-shadow-2xl" />
                          </div>
                        </div>

                        {/* Título ENORME */}
                        <h2 className="text-5xl md:text-7xl font-black text-white font-barlow-condensed uppercase tracking-[0.2em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] leading-tight">
                          DIFERENCIAIS
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-pian-yellow font-barlow-condensed uppercase tracking-widest drop-shadow-2xl">
                          DO PRODUTO
                        </h3>

                        {/* Decoração animada */}
                        <div className="flex gap-3 items-center mt-2">
                          <div className="w-20 h-2 bg-pian-yellow rounded-full animate-pulse shadow-lg"></div>
                          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
                          <div className="w-32 h-2 bg-gradient-to-r from-pian-yellow to-yellow-300 rounded-full shadow-lg"></div>
                          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-20 h-2 bg-pian-yellow rounded-full animate-pulse shadow-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Conteúdo com fundo especial */}
                    <div className="px-12 py-14 bg-gradient-to-br from-yellow-50 via-white to-red-50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(234,179,8,0.1),transparent_50%)]"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.1),transparent_50%)]"></div>

                      <ul className="space-y-6 text-gray-900 text-2xl font-black relative z-10">
                        {formatText(sections.diferenciais)}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Descrição */}
              {sections.descricao && (
                <div className="backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-r from-pian-yellow to-pian-yellow-dark px-6 py-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
                    <div className="flex items-center justify-center">
                      <Award className="h-6 w-6 text-pian-black mr-3" />
                      <h2 className="text-xl font-bold text-pian-black font-barlow-condensed uppercase">
                        Descrição
                      </h2>
                    </div>
                  </div>

                  <div className="px-8 py-6 bg-white">
                    <div className="text-gray-800 leading-relaxed">
                      {formatText(sections.descricao)}
                    </div>
                  </div>
                </div>
              )}

              {/* Composição */}
              {sections.composicao && (
                <div className="backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
                    <div className="flex items-center justify-center">
                      <Beef className="h-6 w-6 text-white mr-3" />
                      <h2 className="text-xl font-bold text-white font-barlow-condensed uppercase">
                        Composição Básica
                      </h2>
                    </div>
                  </div>

                  <div className="px-8 py-6 bg-white">
                    <div className="text-gray-800 text-sm leading-relaxed">
                      {formatText(sections.composicao)}
                    </div>
                  </div>
                </div>
              )}

              {/* Enriquecimento */}
              {sections.enriquecimento && (
                <div className="backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
                    <div className="flex items-center justify-center">
                      <Activity className="h-6 w-6 text-white mr-3" />
                      <h2 className="text-xl font-bold text-white font-barlow-condensed uppercase">
                        Enriquecimento Mínimo por KG
                      </h2>
                    </div>
                  </div>

                  <div className="px-8 py-6 bg-white">
                    <ul className="space-y-1.5 text-sm text-gray-800 leading-relaxed">
                      {formatText(sections.enriquecimento)}
                    </ul>
                  </div>
                </div>
              )}

              {/* Níveis de Garantia */}
              {sections.niveis && (
                <div className="backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-6 py-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-shimmer"></div>
                    <div className="flex items-center justify-center">
                      <Package className="h-6 w-6 text-white mr-3" />
                      <h2 className="text-xl font-bold text-white font-barlow-condensed uppercase">
                        Níveis de Garantia
                      </h2>
                    </div>
                  </div>

                  <div className="px-8 py-6 bg-white">
                    <ul className="space-y-1.5 text-sm text-gray-800 leading-relaxed">
                      {formatText(sections.niveis)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
