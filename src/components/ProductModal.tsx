import React, { useState } from 'react';
import { X, ChevronRight, Package, Award, Beef, Activity } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'description' | 'composition' | 'nutritional'>('description');

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-6">
            {sections.descricao && (
              <div>
                <div className="text-gray-800 leading-relaxed text-base space-y-3">
                  {formatText(sections.descricao)}
                </div>
              </div>
            )}
            {sections.diferenciais && (
              <div className="mt-8 bg-red-50 border border-pian-red/20 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-pian-red" />
                  <h3 className="text-xl font-black text-pian-black uppercase font-barlow-condensed">
                    Diferenciais do Produto
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {formatText(sections.diferenciais)}
                </ul>
              </div>
            )}
          </div>
        );
      case 'composition':
        return (
          <div>
            {sections.composicao && (
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Beef className="h-6 w-6 text-pian-red" />
                  <h3 className="text-xl font-black text-pian-black uppercase font-barlow-condensed">
                    Ingredientes
                  </h3>
                </div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {formatText(sections.composicao)}
                </div>
              </div>
            )}
          </div>
        );
      case 'nutritional':
        return (
          <div className="space-y-6">
            {sections.enriquecimento && (
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="h-6 w-6 text-pian-red" />
                  <h3 className="text-xl font-black text-pian-black uppercase font-barlow-condensed">
                    Enriquecimento Mínimo por KG
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700 leading-relaxed">
                  {formatText(sections.enriquecimento)}
                </ul>
              </div>
            )}
            {sections.niveis && (
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-6 w-6 text-pian-red" />
                  <h3 className="text-xl font-black text-pian-black uppercase font-barlow-condensed">
                    Níveis de Garantia
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700 leading-relaxed">
                  {formatText(sections.niveis)}
                </ul>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Close Button - Fixed Top Right */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-pian-black/90 hover:bg-pian-red text-white transition-all duration-200 group rounded-full shadow-lg"
          aria-label="Fechar"
        >
          <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        {/* Top Section - Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white border-b-4 border-pian-red">
          {/* Left: Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-pian-red/20 to-orange-500/20 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-contain transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/fallback-product.svg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-pian-red text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                {product.type && (
                  <span className="inline-block bg-pian-black text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                    {product.type}
                  </span>
                )}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-pian-black font-barlow-condensed uppercase tracking-tight leading-tight mb-4">
                {product.name}
              </h1>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('description')}
                className={`flex items-center gap-2 px-6 py-3 font-bold font-barlow-condensed uppercase text-sm transition-all duration-300 ${
                  activeTab === 'description'
                    ? 'bg-pian-red text-white shadow-lg'
                    : 'bg-white text-pian-black border-2 border-gray-200 hover:border-pian-red'
                }`}
              >
                <Award className="h-4 w-4" />
                Descrição
                {activeTab === 'description' && <ChevronRight className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setActiveTab('composition')}
                className={`flex items-center gap-2 px-6 py-3 font-bold font-barlow-condensed uppercase text-sm transition-all duration-300 ${
                  activeTab === 'composition'
                    ? 'bg-pian-red text-white shadow-lg'
                    : 'bg-white text-pian-black border-2 border-gray-200 hover:border-pian-red'
                }`}
              >
                <Beef className="h-4 w-4" />
                Composição
                {activeTab === 'composition' && <ChevronRight className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setActiveTab('nutritional')}
                className={`flex items-center gap-2 px-6 py-3 font-bold font-barlow-condensed uppercase text-sm transition-all duration-300 ${
                  activeTab === 'nutritional'
                    ? 'bg-pian-red text-white shadow-lg'
                    : 'bg-white text-pian-black border-2 border-gray-200 hover:border-pian-red'
                }`}
              >
                <Activity className="h-4 w-4" />
                Nutricional
                {activeTab === 'nutritional' && <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tab Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-8 lg:p-12 max-w-5xl mx-auto">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
