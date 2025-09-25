import React from 'react';
import { X, Award, Shield, Leaf, Heart, Info, Package, Zap, Target } from 'lucide-react';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    category: string;
    type?: string;
    line?: string;
    detailedInfo?: {
      ingredients: string[];
      benefits: string[];
      nutritionalInfo: {
        protein: string;
        fat: string;
        fiber: string;
        moisture: string;
      };
      feedingGuide: {
        weight: string;
        dailyAmount: string;
      }[];
      features: string[];
    };
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Standard':
        return 'from-blue-500 to-blue-600';
      case 'Premium':
        return 'from-yellow-500 to-yellow-600';
      case 'Premium Especial':
        return 'from-purple-500 to-purple-600';
      case 'Super Premium':
        return 'from-yellow-400 to-yellow-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const defaultInfo = {
    ingredients: [
      'Carne de frango desidratada',
      'Arroz integral',
      'Milho',
      'Farelo de soja',
      'Gordura de frango',
      'Polpa de beterraba',
      'Óleo de peixe',
      'Vitaminas e minerais'
    ],
    benefits: [
      'Alta digestibilidade',
      'Fortalece o sistema imunológico',
      'Melhora a saúde da pele e pelo',
      'Suporte para articulações',
      'Energia balanceada',
      'Sabor irresistível'
    ],
    nutritionalInfo: {
      protein: '24%',
      fat: '12%',
      fiber: '4%',
      moisture: '10%'
    },
    feedingGuide: [
      { weight: '1-5kg', dailyAmount: '30-80g' },
      { weight: '5-10kg', dailyAmount: '80-140g' },
      { weight: '10-20kg', dailyAmount: '140-240g' },
      { weight: '20-30kg', dailyAmount: '240-320g' },
      { weight: '30kg+', dailyAmount: '320g+' }
    ],
    features: [
      'Fórmula Fechada',
      'Fórmula fechada sem eventuais substitutivos',
      'Rico em ômega 3 e 6',
      'Com antioxidantes naturais',
      'Embalagem biodegradável'
    ]
  };

  const info = product.detailedInfo || defaultInfo;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="bg-gray-900 text-white p-6 rounded-t-xl relative border-b-2 border-pian-yellow">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-pian-yellow text-pian-black hover:bg-pian-yellow-dark rounded-full transition-colors duration-200 font-bold"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat text-white">
              {product.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="bg-pian-yellow text-pian-black px-4 py-2 rounded-full text-sm font-bold font-montserrat">
                {product.category}
              </span>
              {product.type && (
                <span className="bg-white text-pian-black px-4 py-2 rounded-full text-sm font-bold font-montserrat">
                  {product.type}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Large Image */}
          <div className="lg:w-1/2 p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-r-2 border-pian-yellow">
            <div className="w-full h-96 lg:h-[500px] bg-white rounded-xl p-6 flex items-center justify-center shadow-lg border border-gray-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = document.createElement('div');
                  fallback.className = 'flex items-center justify-center h-full w-full bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-2 border-dashed border-pian-yellow';
                  fallback.innerHTML = `
                    <div class="text-center p-4">
                      <div class="w-16 h-16 mx-auto mb-4 bg-pian-yellow rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-pian-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="text-gray-700 text-lg font-bold">${product.name}</div>
                    </div>
                  `;
                  target.parentElement?.replaceChild(fallback, target);
                }}
              />
            </div>
            
            {/* Product Description */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">
                Descrição do Produto
              </h3>
              <p className="text-gray-700 font-montserrat leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="lg:w-1/2 p-6 bg-white space-y-6">
          {/* Features */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center font-montserrat">
              <Zap className="h-6 w-6 mr-3 text-pian-yellow" />
              Características Principais
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {info.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-pian-yellow rounded-lg border border-gray-300 shadow-sm">
                  <Shield className="h-5 w-5 flex-shrink-0 text-pian-black" />
                  <span className="text-pian-black font-bold font-montserrat">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center font-montserrat">
              <Heart className="h-6 w-6 mr-3 text-pian-yellow" />
              Benefícios
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {info.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-300 shadow-sm">
                  <Award className="h-5 w-5 text-pian-yellow flex-shrink-0" />
                  <span className="text-gray-900 font-bold font-montserrat">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center font-montserrat">
              <Leaf className="h-6 w-6 mr-3 text-pian-yellow" />
              Ingredientes Principais
            </h2>
            <div className="bg-gray-900 rounded-lg p-4 border border-pian-yellow shadow-md">
              <div className="flex flex-wrap gap-3">
                {info.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-pian-yellow text-pian-black px-3 py-1 rounded-full font-bold font-montserrat text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Nutritional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center font-montserrat">
                <Info className="h-6 w-6 mr-3 text-pian-yellow" />
                Informações Nutricionais
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 space-y-3 border border-pian-yellow shadow-md">
                <div className="flex justify-between items-center border-b border-pian-yellow pb-2">
                  <span className="text-white font-bold font-montserrat">Proteína Bruta (mín.)</span>
                  <span className="font-bold text-pian-yellow font-montserrat">{info.nutritionalInfo.protein}</span>
                </div>
                <div className="flex justify-between items-center border-b border-pian-yellow pb-2">
                  <span className="text-white font-bold font-montserrat">Extrato Etéreo (mín.)</span>
                  <span className="font-bold text-pian-yellow font-montserrat">{info.nutritionalInfo.fat}</span>
                </div>
                <div className="flex justify-between items-center border-b border-pian-yellow pb-2">
                  <span className="text-white font-bold font-montserrat">Fibra Bruta (máx.)</span>
                  <span className="font-bold text-pian-yellow font-montserrat">{info.nutritionalInfo.fiber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold font-montserrat">Umidade (máx.)</span>
                  <span className="font-bold text-pian-yellow font-montserrat">{info.nutritionalInfo.moisture}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center font-montserrat">
                <Target className="h-6 w-6 mr-3 text-pian-yellow" />
                Guia Alimentar
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 border border-pian-yellow shadow-md">
                <div className="space-y-2">
                  <div className="flex justify-between items-center font-bold text-pian-yellow border-b border-pian-yellow pb-2 font-montserrat">
                    <span>Peso do Animal</span>
                    <span>Quantidade Diária</span>
                  </div>
                  {info.feedingGuide.map((guide, index) => (
                    <div key={index} className="flex justify-between items-center text-white font-bold font-montserrat border-b border-pian-yellow/30 pb-2">
                      <span>{guide.weight}</span>
                      <span className="text-pian-yellow">{guide.dailyAmount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-pian-yellow mt-3 font-bold font-montserrat">
                  * Dividir em 2-3 refeições diárias. Sempre deixe água fresca disponível.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;