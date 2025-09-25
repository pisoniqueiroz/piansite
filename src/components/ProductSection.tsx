import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Dog, Cat, Fish, Package, Archive, Star, Award, Crown, Gem } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedLine, setSelectedLine] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const categoryParam = new URLSearchParams(location.search).get('category');
    if (categoryParam) {
      // Mapear parâmetros da URL para categorias internas
      const categoryMap: { [key: string]: string } = {
        'Standard': 'Standard',
        'Premium': 'Premium', 
        'Premium Especial': 'Premium Especial',
        'Super Premium': 'Super Premium',
        'Gatos': 'Gatos',
        'Cachorros': 'Cachorros',
        'Cães': 'Cachorros'
      };
      
      const mappedCategory = categoryMap[categoryParam] || categoryParam;
      setSelectedCategory(mappedCategory);
    }
  }, [location.search]);

  const products = [
    // Linha Standard - Cães
    { id: 1, name: 'Lupydog', image: '/lupy-dog-7kg-1.png', description: 'Ração completa para cães adultos', category: 'Standard', type: 'Cães' },
    { id: 2, name: 'Lilidog', image: '/lili-dog.jpg', description: 'Nutrição balanceada para cães', category: 'Standard', type: 'Cães' },
    { id: 3, name: 'Zecão', image: '/zeca-o-original-2.jpg', description: 'Ração econômica para cães', category: 'Standard', type: 'Cães' },
    { id: 4, name: 'Gerrys', image: '/gerrys-20kg.jpg', description: 'Nutrição completa e balanceada', category: 'Standard', type: 'Cães' },
    
    // Linha Standard - Gatos
    { id: 5, name: 'Zecat', image: 'https://i.postimg.cc/6qmFnddV/ZECA-O-ORIGINAL-2.jpg', description: 'Ração completa para gatos', category: 'Standard', type: 'Gatos' },
    
    // Linha Premium - Cães
    { id: 6, name: 'Dog & Dogs Adultos', image: 'https://i.postimg.cc/4NyWTRs0/Dog-Dogs-Adultos.jpg', description: 'Ração premium para cães adultos', category: 'Premium', type: 'Cães' },
    { id: 7, name: 'Dog & Dogs Filhotes', image: 'https://i.postimg.cc/kg8FnnZT/Dog-Dogs-Filhotes.jpg', description: 'Ração premium para filhotes', category: 'Premium', type: 'Cães' },
    { id: 8, name: 'Dog & Dogs Pequeno Porte', image: 'https://i.postimg.cc/XqHxyQcx/Dog-Dogs-Peq-Racas.jpg', description: 'Ração premium para cães pequenos', category: 'Premium', type: 'Cães' },
    { id: 9, name: 'MikDog Premium Adulto', image: 'https://i.postimg.cc/BbH2B3Fh/Mikdog-Premium-Adulto.jpg', description: 'Linha premium para cães adultos', category: 'Premium', type: 'Cães' },
    { id: 10, name: 'MikDog Senior', image: 'https://i.postimg.cc/jjDwhK0z/MIKDOG-SENIOR.jpg', description: 'Ração premium para cães idosos', category: 'Premium', type: 'Cães' },
    { id: 11, name: 'MikDog Natural', image: 'https://i.postimg.cc/fbq7wBZv/MIKDOG-NATURAL.jpg', description: 'Ração natural premium', category: 'Premium', type: 'Cães' },
    { id: 12, name: 'MikDog Nuggets', image: 'https://i.postimg.cc/nhHqB6hk/MIKDOG-NUGGETS.jpg', description: 'Ração em formato nuggets', category: 'Premium', type: 'Cães' },
    { id: 13, name: 'MikDog Filhotes', image: 'https://i.postimg.cc/13Hcdyj2/MIKDOG-FILHOTES.jpg', description: 'Ração premium para filhotes', category: 'Premium', type: 'Cães' },
    { id: 14, name: 'MikDog Refeição', image: 'https://i.postimg.cc/brctJ551/MIKDOG-REFEICAO.jpg', description: 'Ração completa para refeições', category: 'Premium', type: 'Cães' },
    { id: 15, name: 'MikDog Vegetais', image: 'https://i.postimg.cc/LsGqC72G/MIKDOG-VEGETAIS.jpg', description: 'Ração com vegetais', category: 'Premium', type: 'Cães' },
    { id: 16, name: 'MikDog Pequenas Raças', image: 'https://i.postimg.cc/VL9jSYmv/MIKDOG-PEQ-RACAS.jpg', description: 'Ração para cães pequenos', category: 'Premium', type: 'Cães' },
    { id: 17, name: 'MikDog Carne com Ossinhos', image: 'https://i.postimg.cc/0NydRLgQ/MIKDOG-CARNE-COM-OSSINHOS.jpg', description: 'Ração com carne e ossinhos', category: 'Premium', type: 'Cães' },
    
    // Linha Premium - Gatos
    { id: 18, name: 'Cat & Cats Adultos', image: 'https://i.postimg.cc/BntkN1jX/Cat-Cats-Adultos.jpg', description: 'Ração premium para gatos adultos', category: 'Premium', type: 'Gatos' },
    { id: 19, name: 'Cat & Cats Nuggets', image: 'https://i.postimg.cc/mZwnsSMP/Cat-Cats-Nuggets.jpg', description: 'Ração em formato nuggets para gatos', category: 'Premium', type: 'Gatos' },
    { id: 20, name: 'MikCat Premium', image: 'https://i.postimg.cc/W4NDQTPF/MIKCAT-ADULTO-FRANGO.jpg', description: 'Ração premium sabor frango', category: 'Premium', type: 'Gatos' },
    { id: 21, name: 'MikCat Adultos', image: 'https://i.postimg.cc/mrmc4Jbd/Mikcat-Adutos.jpg', description: 'Ração premium para gatos adultos', category: 'Premium', type: 'Gatos' },
    
    // Rações Úmidas - Cães (Sachês)
    { id: 22, name: 'MikDog Sachê Carne', image: 'https://i.postimg.cc/26BWCY0z/MIKDOG-SACHES-ADULTO-CARNE-MOCKUP.jpg', description: 'Sachê sabor carne', category: 'Premium', type: 'Cães', line: 'Sachê' },
    { id: 23, name: 'MikDog Sachê RPM Carne', image: 'https://i.postimg.cc/mkYFFwxJ/MIKDOG-SACHES-ADULTO-RPM-CARNE-MOCKUP.jpg', description: 'Sachê RPM sabor carne', category: 'Premium', type: 'Cães', line: 'Sachê' },
    { id: 24, name: 'MikDog Sachê RPM Frango', image: 'https://i.postimg.cc/x1TbcM6p/MIKDOG-SACHES-ADULTO-RPM-FRANGO-MOCKUP.jpg', description: 'Sachê RPM sabor frango', category: 'Premium', type: 'Cães', line: 'Sachê' },
    { id: 25, name: 'Dog & Dogs Sachê Carne Adultos', image: 'https://i.postimg.cc/hv6TBw0F/Dog-Dogs-Sache-Carne-Adultos.jpg', description: 'Sachê carne para adultos', category: 'Premium', type: 'Cães', line: 'Sachê' },
    { id: 26, name: 'Dog & Dogs Sachê Carne Filhotes', image: 'https://i.postimg.cc/9fCTCyyf/Dog-Dogs-Sache-Carne-Filhotes.jpg', description: 'Sachê carne para filhotes', category: 'Premium', type: 'Cães', line: 'Sachê' },
    
    // Rações Úmidas - Cães (Enlatados)
    { id: 27, name: 'Dog & Dogs Enlatado Carne', image: 'https://i.postimg.cc/V6zFG3KD/Dog-Dogs-Enlatado-Carne.jpg', description: 'Ração enlatada sabor carne', category: 'Premium', type: 'Cães', line: 'Enlatado' },
    { id: 28, name: 'Dog & Dogs Enlatado Frango', image: 'https://i.postimg.cc/pr6YdyR6/Dog-Dogs-Enlatado-Frango.jpg', description: 'Ração enlatada sabor frango', category: 'Premium', type: 'Cães', line: 'Enlatado' },
    { id: 29, name: 'Dog & Dogs Enlatado Fígado', image: 'https://i.postimg.cc/ZRjx1VgZ/Dog-Dogs-Enlatado-Figado.jpg', description: 'Ração enlatada sabor fígado', category: 'Premium', type: 'Cães', line: 'Enlatado' },
    { id: 30, name: 'Dog & Dogs Enlatado Carne Filhotes', image: 'https://i.postimg.cc/tJTNyFQ6/Dog-Dogs-Enlatado-Carne-Filhotes.jpg', description: 'Ração enlatada para filhotes', category: 'Premium', type: 'Cães', line: 'Enlatado' },
    { id: 31, name: 'MikDog Snacks Carne', image: 'https://i.postimg.cc/jdTfYGPb/Mikdog-Snacks-Carne-60g.jpg', description: 'Snacks sabor carne 60g', category: 'Premium', type: 'Cães', line: 'Snacks' },
    
    // Rações Úmidas - Gatos (Enlatados)
    { id: 32, name: 'Cat & Cats Enlatado Peixe', image: 'https://i.postimg.cc/wM6bNtKx/Cat-Cats-Enlatado-Peixe.jpg', description: 'Ração enlatada sabor peixe', category: 'Premium', type: 'Gatos', line: 'Enlatado' },
    { id: 33, name: 'Cat & Cats Enlatado Frango', image: 'https://i.postimg.cc/QMTPZGkD/Cat-Cats-Enlatado-Frango.jpg', description: 'Ração enlatada sabor frango', category: 'Premium', type: 'Gatos', line: 'Enlatado' },
    { id: 34, name: 'Cat & Cats Enlatado Carne', image: 'https://i.postimg.cc/ydCGVQvZ/Cat-Cats-Enlatado-Carne.jpg', description: 'Ração enlatada sabor carne', category: 'Premium', type: 'Gatos', line: 'Enlatado' },
    { id: 35, name: 'Cat & Cats Enlatado Fígado', image: 'https://i.postimg.cc/4xMM0Ncw/Cat-Cats-Enlatado-Figado.jpg', description: 'Ração enlatada sabor fígado', category: 'Premium', type: 'Gatos', line: 'Enlatado' },
    
    // Rações Úmidas - Gatos (Sachês)
    { id: 36, name: 'Cat & Cats Sachê Carne', image: 'https://i.postimg.cc/0yLWfXgB/Cat-Cats-Saches-Carne.jpg', description: 'Sachê sabor carne', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 37, name: 'Cat & Cats Sachê Frango', image: 'https://i.postimg.cc/xCQsrk1G/Cat-Cats-Saches-Frango.jpg', description: 'Sachê sabor frango', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 38, name: 'MikCat Sachê Adulto Atum', image: 'https://i.postimg.cc/dQLHTZx1/MIKCAT-SACHES-ADULTO-ATUM-MOCKUP.jpg', description: 'Sachê sabor atum', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 39, name: 'MikCat Sachê Adulto Carne', image: 'https://i.postimg.cc/g2qNPVnM/MIKCAT-SACHES-ADULTO-CARNE-MOCKUP.jpg', description: 'Sachê sabor carne', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 40, name: 'MikCat Sachê Adulto Salmão', image: 'https://i.postimg.cc/NG9D0qK2/MIKCAT-SACHES-ADULTO-SALMAO-MOCKUP.jpg', description: 'Sachê sabor salmão', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 41, name: 'MikCat Sachê Adulto Cordeiro', image: 'https://i.postimg.cc/NML4TZbV/MIKCAT-SACHES-ADULTO-CORDEIRO-MOCKUP.jpg', description: 'Sachê sabor cordeiro', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 42, name: 'MikCat Sachê Filhote Carne', image: 'https://i.postimg.cc/65ChdrL9/MIKCAT-SACHES-FILHOTE-CARNE-MOCKUP.jpg', description: 'Sachê para filhotes', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    { id: 43, name: 'MikCat Sachê Castrados Frango', image: 'https://i.postimg.cc/qvb6nqYJ/Mockup-MIKCAT-SACHES-Gatos-Castrados-Frango-ao-Molho.jpg', description: 'Sachê para gatos castrados', category: 'Premium', type: 'Gatos', line: 'Sachê' },
    
    // Linha Premium Especial
    { id: 44, name: 'MikDog Premium Especial Filhotes', image: 'https://i.postimg.cc/4NR6NKCj/Mikdog-Premium-Especial-Filhotes.jpg', description: 'Fórmula especial para filhotes', category: 'Premium Especial', type: 'Cães' },
    { id: 45, name: 'MikDog Premium Especial Pequeno Porte', image: 'https://i.postimg.cc/pLqzZq9t/Mikdog-Premium-Especial-Pequeno-Porte.jpg', description: 'Fórmula especial pequeno porte', category: 'Premium Especial', type: 'Cães' },
    { id: 46, name: 'MikDog Premium Especial Refeições', image: 'https://i.postimg.cc/59C5VBrw/MIKDOG-PREMIUM-ESPECIAL-ADULTO-REFEICOES-TODO-DIA.jpg', description: 'Fórmula especial refeições', category: 'Premium Especial', type: 'Cães' },
    { id: 47, name: 'MikCat Premium Especial Filhotes', image: 'https://i.postimg.cc/SRMjWKc5/MIKCAT-PREMIUM-ESPECIAL-FILHOTES.jpg', description: 'Fórmula especial para filhotes', category: 'Premium Especial', type: 'Gatos' },
    { id: 48, name: 'MikCat Premium Especial Castrados', image: 'https://i.postimg.cc/KzVRkT3B/MIKCAT-PREMIUM-ESPECIAL-CASTRADOS.jpg', description: 'Fórmula especial para castrados', category: 'Premium Especial', type: 'Gatos' },
    
    // Linha Super Premium
    { id: 49, name: 'Prioritá Adulto', image: 'https://i.postimg.cc/VN0Y8ygK/PRIORITA-ADULTO-LADO.png', description: 'Super premium para cães adultos', category: 'Super Premium', type: 'Cães' },
    { id: 50, name: 'Prioritá Filhote', image: 'https://i.postimg.cc/4xSJq46K/PRIORITA-FILHOTE.png', description: 'Super premium para filhotes', category: 'Super Premium', type: 'Cães' },
    { id: 51, name: 'Prioritá Cat Adulto', image: 'https://i.postimg.cc/TYQ2jJhJ/PRIORITA-CAT-ADULTO-2.png', description: 'Super premium para gatos', category: 'Super Premium', type: 'Gatos' },
    
    // Linha para Peixes
    { id: 52, name: 'ProPeixe Junior', image: 'https://i.postimg.cc/NMfvrqh9/PROPEIXE-JUNIOR-2.png', description: 'Ração especial para peixes jovens', category: 'Premium', type: 'Peixes' },
  ];

  // Categorias principais
  const mainCategories = [
    { name: 'Todos', icon: null, color: 'bg-gray-100 text-pian-black' },
    { name: 'Cachorros', icon: <Dog className="h-4 w-4" />, color: 'bg-blue-100 text-blue-800' },
    { name: 'Gatos', icon: <Cat className="h-4 w-4" />, color: 'bg-green-100 text-green-800' },
    { name: 'Peixes', icon: <Fish className="h-4 w-4" />, color: 'bg-teal-100 text-teal-800' },
    { name: 'Alimentos Úmidos', icon: <Package className="h-4 w-4" />, color: 'bg-pink-100 text-pink-800' },
  ];

  // Linhas de ração baseadas na categoria selecionada
  const getAvailableLines = (category: string) => {
    if (category === 'Todos') {
      return [];
    }
    if (category === 'Cachorros' || category === 'Gatos') {
      return [
        { name: 'Super Premium', color: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' },
        { name: 'Premium Especial', color: 'bg-purple-100 text-purple-800' },
        { name: 'Premium', color: 'bg-orange-100 text-orange-800' },
        { name: 'Standard', color: 'bg-blue-100 text-blue-800' },
      ];
    }
    if (category === 'Alimentos Úmidos') {
      return [
        { name: 'Premium', color: 'bg-orange-100 text-orange-800' },
      ];
    }
    if (category === 'Peixes') {
      return [
        { name: 'Premium', color: 'bg-orange-100 text-orange-800' },
      ];
    }
    return [];
  };

  // Filtrar produtos
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesCategory = false;
    
    if (selectedCategory === 'Todos') {
      matchesCategory = true;
    } else if (selectedCategory === 'Standard' || selectedCategory === 'Premium' || selectedCategory === 'Premium Especial' || selectedCategory === 'Super Premium') {
      matchesCategory = product.category === selectedCategory;
    } else if (selectedCategory === 'Cachorros') {
      matchesCategory = product.type === 'Cães';
    } else if (selectedCategory === 'Gatos') {
      matchesCategory = product.type === 'Gatos';
    } else if (selectedCategory === 'Alimentos Úmidos') {
      matchesCategory = product.line === 'Sachê' || product.line === 'Enlatado';
    } else if (selectedCategory === 'Peixes') {
      matchesCategory = product.type === 'Peixes';
    }
    
    const matchesLine = !selectedLine || product.category === selectedLine;
    
    return matchesSearch && matchesCategory && matchesLine;
  });

  // Ordenar produtos por categoria (Super Premium primeiro)
  const categoryOrder = { 'Super Premium': 1, 'Premium Especial': 2, 'Premium': 3, 'Standard': 4 };
  const sortedProducts = filteredProducts.sort((a, b) => {
    const orderA = categoryOrder[a.category as keyof typeof categoryOrder] || 5;
    const orderB = categoryOrder[b.category as keyof typeof categoryOrder] || 5;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    // Se mesma categoria, manter ordem original por ID
    return a.id - b.id;
  });

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedLine(''); // Reset line selection when category changes
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar rações..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-white border-2 border-pian-black/20 text-pian-black focus:outline-none focus:ring-2 focus:ring-pian-red focus:border-pian-red shadow-lg font-bold font-barlow-condensed text-lg"
            />
          </div>
        </div>

        {/* Main Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mainCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategorySelect(category.name)}
              className={`flex items-center space-x-3 px-8 py-4 transition-all duration-300 font-bold font-barlow-condensed border-2 text-lg ${
                selectedCategory === category.name
                  ? 'bg-pian-red text-white shadow-xl scale-105 border-pian-red'
                  : 'bg-white text-pian-black border-pian-black/20 hover:bg-pian-black/5 hover:scale-105 hover:border-pian-red shadow-md'
              }`}
            >
              {category.icon && category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Line Filter */}
        {selectedCategory !== 'Todos' && getAvailableLines(selectedCategory).length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setSelectedLine('')}
              className={`px-6 py-3 transition-all duration-300 font-bold font-barlow-condensed border-2 ${
                !selectedLine
                  ? 'bg-pian-red text-white shadow-lg scale-105 border-pian-red'
                  : 'bg-white text-pian-black border-pian-black/20 hover:bg-pian-black/5 hover:scale-105 hover:border-pian-red'
              }`}
            >
              Todas as Linhas
            </button>
            {getAvailableLines(selectedCategory).map((line) => (
              <button
                key={line.name}
                onClick={() => setSelectedLine(line.name)}
                className={`px-6 py-3 transition-all duration-300 font-bold font-barlow-condensed border-2 ${
                  selectedLine === line.name
                    ? 'bg-pian-red text-white shadow-lg scale-105 border-pian-red'
                    : 'bg-white text-pian-black border-pian-black/20 hover:bg-pian-black/5 hover:scale-105 hover:border-pian-red'
                }`}
              >
                {line.name}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div>
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  onViewDetails={() => handleViewDetails(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-pian-black/50 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pian-black mb-2 font-bold font-barlow-condensed">Nenhum produto encontrado</h3>
              <p className="text-pian-black/70 mb-4 font-bold font-barlow-condensed">
                {selectedCategory
                  ? `Não encontramos produtos para "${selectedCategory}"${selectedLine ? ` na linha "${selectedLine}"` : ''}`
                  : 'Tente ajustar os filtros ou termo de busca'
                }
              </p>
              <button
                onClick={() => { 
                  setSearchTerm(''); 
                  setSelectedCategory('Todos'); 
                  setSelectedLine(''); 
                }}
                className="px-8 py-4 bg-pian-red text-white hover:bg-red-700 font-bold font-barlow-condensed shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ProductSection;