import React from 'react';
import { useState } from 'react';
import { Timeline as TimelineUI } from './ui/timeline';
import { Calendar, MapPin, Users, Award, Factory, Sparkles, Truck, Package, Globe, Zap, X, ZoomIn } from 'lucide-react';

const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const timelineData = [
    {
      title: '1984',
      content: (
        <div>
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mr-4">
              <Factory className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-montserrat">Inicia a História da PIAN em Paraí-RS</h3>
          </div>
          <p className="text-gray-700 text-sm md:text-base font-normal mb-6 font-montserrat leading-relaxed">
            Tudo começou com a nossa família em 1984, ano em que passamos a adquirir insumos para produzir alimentos para animais na cidade de Paraí, no Rio Grande do Sul. Inicialmente, os produtos eram comercializados apenas na localidade, mas logo, o negócio cresceu.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <div className="bg-white/90 rounded-full p-3">
                <ZoomIn className="h-6 w-6 text-gray-900" />
              </div>
            </div>
            <img
              src="https://i.postimg.cc/W1fXQnvy/1984.jpg"
              alt="Início da PIAN em 1984"
              className="w-full h-48 md:h-64 object-cover mb-6"
              onClick={() => openImageModal("https://i.postimg.cc/W1fXQnvy/1984.jpg", "Início da PIAN em 1984")}
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
            />
          </div>
          <p className="text-gray-700 text-sm md:text-base font-barlow-condensed leading-relaxed mt-4">
            Tudo começou com a nossa família em 1984, ano em que passamos a adquirir insumos para produzir alimentos para animais na cidade de Paraí, no Rio Grande do Sul. Inicialmente, os produtos eram comercializados apenas na localidade, mas logo, o negócio cresceu.
          </p>
        </div>
      )
    },
    {
      title: '1987',
      content: (
        <div>
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white mr-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-barlow-condensed">A PIAN Chega a Porto Alegre</h3>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <div className="bg-white/90 rounded-full p-3">
                <ZoomIn className="h-6 w-6 text-gray-900" />
              </div>
            </div>
            <img
              src="https://i.postimg.cc/pd06CH0g/Design-sem-nome-28.png"
              alt="PIAN chega a Porto Alegre"
              className="w-full h-48 md:h-64 object-cover mb-6"
              onClick={() => openImageModal("https://i.postimg.cc/pd06CH0g/Design-sem-nome-28.png", "PIAN chega a Porto Alegre")}
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
            />
          </div>
          <p className="text-gray-700 text-sm md:text-base font-barlow-condensed leading-relaxed mt-4">
            No ano de 1987, com uma visão empreendedora, chegamos na capital gaúcha, dando início a uma nova etapa para a Pian no mercado pet. Nos anos seguintes, desenvolvemos ainda mais nossa linha de nutrição animal, assim como a distribuição e comercialização de itens relacionados ao segmento.
          </p>
        </div>
      )
    },
    {
      title: '2022',
      content: (
        <div>
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white mr-4">
              <Factory className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 font-barlow-condensed">Quinta Ampliação do Parque Fabril</h3>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <div className="bg-white/90 rounded-full p-3">
                <ZoomIn className="h-6 w-6 text-gray-900" />
              </div>
            </div>
            <img
              src="https://i.postimg.cc/4yFc28C4/7.png"
              alt="Quinta ampliação do parque fabril"
              className="w-full h-48 md:h-64 object-cover mb-6"
              onClick={() => openImageModal("https://i.postimg.cc/4yFc28C4/7.png", "Quinta ampliação do parque fabril")}
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
            />
          </div>
          <p className="text-gray-700 text-sm md:text-base font-barlow-condensed leading-relaxed mt-4">
            O ano de 2022 marca a nossa mais recente ampliação do parque fabril, que passou por uma nova modernização.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white section-divider relative">
      <div>
        <TimelineUI data={timelineData} />
      </div>
      
      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center">
          <div className="bg-gradient-to-br from-pian-yellow to-pian-yellow-dark rounded-2xl p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-[45px] font-bold text-pian-black mb-4 font-barlow-condensed uppercase tracking-wider">
                Mais de 3 Décadas de Tradição, Infinitas Possibilidades
              </h2>
              <p className="text-pian-black/80 mb-6 max-w-2xl mx-auto font-barlow-condensed">
                De uma pequena produção familiar em 1984 até nos tornarmos referência nacional em nutrição animal. Nossa história continua sendo escrita todos os dias.
              </p>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-pian-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl font-bold font-barlow-condensed"
              >
                Conheça Nossa História Completa
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors duration-200 z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-xl">
              <p className="text-white text-lg font-bold text-center font-barlow-condensed">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;