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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-pian-black text-white p-6 rounded-t-2xl relative sticky top-0 z-10 border-b-4 border-pian-red">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-pian-red text-white hover:bg-pian-red/80 rounded-full transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-3 font-barlow-condensed uppercase tracking-wider">
              {product.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="bg-pian-red text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                {product.category}
              </span>
              {product.type && (
                <span className="bg-white text-pian-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  {product.type}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Product Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-md h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center shadow-lg border-2 border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = '/fallback-product.svg';
                }}
              />
            </div>
          </div>

          {/* DESCRIÇÃO */}
          {sections.descricao && (
            <div className="mb-6 bg-white border-2 border-pian-black rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-black text-pian-black mb-4 uppercase tracking-wide font-barlow-condensed border-b-2 border-pian-red pb-2">
                Descrição
              </h2>
              <div className="text-gray-800 leading-relaxed">
                {formatText(sections.descricao)}
              </div>
            </div>
          )}

          {/* DIFERENCIAIS */}
          {sections.diferenciais && (
            <div className="mb-6 bg-pian-red/5 border-2 border-pian-red rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-black text-pian-black mb-4 uppercase tracking-wide font-barlow-condensed border-b-2 border-pian-red pb-2">
                Diferenciais
              </h2>
              <div className="text-gray-800">
                <ul className="space-y-2">
                  {formatText(sections.diferenciais)}
                </ul>
              </div>
            </div>
          )}

          {/* COMPOSIÇÃO BÁSICA */}
          {sections.composicao && (
            <div className="mb-6 bg-white border-2 border-pian-black rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-black text-pian-black mb-4 uppercase tracking-wide font-barlow-condensed border-b-2 border-pian-red pb-2">
                Composição Básica
              </h2>
              <div className="text-gray-800">
                {formatText(sections.composicao)}
              </div>
            </div>
          )}

          {/* ENRIQUECIMENTO MÍNIMO POR KG */}
          {sections.enriquecimento && (
            <div className="mb-6 bg-gray-50 border-2 border-pian-black rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-black text-pian-black mb-4 uppercase tracking-wide font-barlow-condensed border-b-2 border-pian-red pb-2">
                Enriquecimento Mínimo por KG
              </h2>
              <div className="text-gray-800">
                <ul className="space-y-1">
                  {formatText(sections.enriquecimento)}
                </ul>
              </div>
            </div>
          )}

          {/* NÍVEIS DE GARANTIA */}
          {sections.niveis && (
            <div className="mb-6 bg-white border-2 border-pian-black rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-black text-pian-black mb-4 uppercase tracking-wide font-barlow-condensed border-b-2 border-pian-red pb-2">
                Níveis de Garantia
              </h2>
              <div className="text-gray-800">
                <ul className="space-y-1">
                  {formatText(sections.niveis)}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
