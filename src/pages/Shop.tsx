
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const categories = [
    "Tous les produits",
    "Chocolats",
    "Biscuits",
    "Confitures",
    "Boissons",
    "Nouveautés",
  ];

  const products = [
    {
      id: 1,
      name: "Tablette Chocolat Noir",
      description: "Intense et riche en cacao, sans sucres ajoutés",
      price: "6,90 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Chocolats",
    },
    {
      id: 2,
      name: "Cookies aux Amandes",
      description: "Moelleux et croquants, édulcorés naturellement",
      price: "5,50 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Biscuits",
    },
    {
      id: 3,
      name: "Confiture de Fraise",
      description: "Préparée avec des fruits frais et du jus de pomme",
      price: "7,20 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Confitures",
    },
    {
      id: 4,
      name: "Chocolat au Lait d'Amande",
      description: "Douceur lactée végétale, édulcoré au xylitol",
      price: "7,50 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Chocolats",
    },
    {
      id: 5,
      name: "Sablés à la Vanille",
      description: "Friables et parfumés, sans sucres raffinés",
      price: "4,90 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Biscuits",
    },
    {
      id: 6,
      name: "Gelée de Framboises",
      description: "Intense en goût, légèrement acidulée",
      price: "6,80 €",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=600&q=80",
      category: "Confitures",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Retour à l'accueil</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Notre Boutique</h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Découvrez notre gamme complète de produits sans sucre, élaborés avec des ingrédients de qualité.
            </p>
          </div>
          
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
            <div className="flex space-x-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors 
                    ${index === 0 
                      ? "bg-primary text-white" 
                      : "bg-secondary text-foreground/70 hover:bg-secondary/80"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card bg-white rounded-2xl overflow-hidden shadow-md hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{product.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-colors">
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
