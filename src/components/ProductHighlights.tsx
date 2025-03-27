
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductHighlights = () => {
  const products = [
    {
      id: 1,
      name: "Tablette Chocolat Noir",
      description: "Intense et riche en cacao, sans sucres ajoutés",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Chocolats",
    },
    {
      id: 2,
      name: "Cookies aux Amandes",
      description: "Moelleux et croquants, édulcorés naturellement",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Biscuits",
    },
    {
      id: 3,
      name: "Confiture de Fraise",
      description: "Préparée avec des fruits frais et du jus de pomme",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Confitures",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-brand-100 px-4 py-1 rounded-full text-sm font-medium text-foreground/80 mb-4">
            Nos produits phares
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gourmandises sans sucre, plaisir sans limite
          </h2>
          <p className="text-lg text-foreground/70">
            Découvrez nos créations les plus populaires, élaborées avec soin et
            sans sucres ajoutés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden shadow-md hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="inline-block bg-brand-50 px-3 py-1 rounded-full text-xs font-medium text-foreground/70 mb-3">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-foreground/70 mb-4">{product.description}</p>
                <Link
                  to={`/shop`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  <span>Découvrir</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="btn-primary"
          >
            <span>Voir tous nos produits</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
