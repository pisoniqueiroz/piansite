import React from 'react';
import { X } from 'lucide-react';

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

    const descMatch = description.match(/^(.*?)(?=##|$)/s);
    if (descMatch) {
      sections.descricao = descMatch[1].trim();
    }

    const composicaoMatch = description.match(/## Composição Básica\s*([\s\S]*?)(?=##|$)/);
    if (composicaoMatch) {
      sections.composicao = composicaoMatch[1].trim();
    }

    const enriquecimentoMatch = description.match(/## Enriquecimento Mínimo por KG\s*([\s\S]*?)(?=##|$)/);
    if (enriquecimentoMatch) {
      sections.enriquecimento = enriquecimentoMatch[1].trim();
    }

    const niveisMatch = description.match(/## Níveis de Garantia\s*([\s\S]*?)(?=##|$)/);
    if (niveisMatch) {
      sections.niveis = niveisMatch[1].trim();
    }

    const diferenciaisMatch = description.match(/## Diferenciais\s*([\s\S]*?)$/);
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

      return (
        <p key={index} className="text-gray-800 text-sm leading-relaxed mb-2">
          {line}
        </p>
      );
    });
  };

  const sections = parseDescription(product.description);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-pian-red to-red-700 text-white p-8 relative sticky top-0 z-10 shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-200 group"
            aria-label="Fechar"
          >
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-200" />
          </button>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black mb-4 font-barlow-condensed uppercase tracking-wide drop-shadow-lg">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 text-sm font-bold uppercase tracking-wide border border-white/30">
                {product.category}
              </span>
              {product.type && (
                <span className="bg-pian-black text-white px-5 py-2 text-sm font-bold uppercase tracking-wide">
                  {product.type}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            {/* Product Image */}
            <div className="mb-10 flex justify-center">
              <div className="w-full max-w-md h-80 bg-white rounded-lg p-8 flex items-center justify-center shadow-xl border-l-4 border-pian-red">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/fallback-product.svg';
                  }}
                />
              </div>
            </div>

            {/* DESCRIÇÃO */}
            {sections.descricao && (
              <div className="mb-8 bg-white border-l-4 border-pian-red p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-pian-red mr-3"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-pian-black uppercase tracking-wide font-barlow-condensed">
                    Descrição
                  </h2>
                </div>
                <div className="text-gray-700 leading-relaxed text-base">
                  {formatText(sections.descricao)}
                </div>
              </div>
            )}

            {/* DIFERENCIAIS */}
            {sections.diferenciais && (
              <div className="mb-8 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-pian-red p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-pian-red mr-3"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-pian-black uppercase tracking-wide font-barlow-condensed">
                    Diferenciais
                  </h2>
                </div>
                <div className="text-gray-700">
                  <ul className="space-y-2.5 text-base">
                    {formatText(sections.diferenciais)}
                  </ul>
                </div>
              </div>
            )}

            {/* COMPOSIÇÃO BÁSICA */}
            {sections.composicao && (
              <div className="mb-8 bg-white border-l-4 border-gray-600 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gray-600 mr-3"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-pian-black uppercase tracking-wide font-barlow-condensed">
                    Composição Básica
                  </h2>
                </div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {formatText(sections.composicao)}
                </div>
              </div>
            )}

            {/* ENRIQUECIMENTO MÍNIMO POR KG */}
            {sections.enriquecimento && (
              <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-600 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gray-600 mr-3"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-pian-black uppercase tracking-wide font-barlow-condensed">
                    Enriquecimento Mínimo por KG
                  </h2>
                </div>
                <div className="text-gray-700">
                  <ul className="space-y-1.5 text-sm leading-relaxed">
                    {formatText(sections.enriquecimento)}
                  </ul>
                </div>
              </div>
            )}

            {/* NÍVEIS DE GARANTIA */}
            {sections.niveis && (
              <div className="mb-8 bg-white border-l-4 border-gray-600 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-gray-600 mr-3"></div>
                  <h2 className="text-2xl md:text-3xl font-black text-pian-black uppercase tracking-wide font-barlow-condensed">
                    Níveis de Garantia
                  </h2>
                </div>
                <div className="text-gray-700">
                  <ul className="space-y-1.5 text-sm leading-relaxed">
                    {formatText(sections.niveis)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
