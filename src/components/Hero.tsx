
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-brand-50 opacity-60"></div>
      <div
        className="absolute top-0 left-0 right-0 h-full -z-10 opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)",
        }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/60 to-white"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 z-10 animate-fade-up">
            <div className="inline-block bg-brand-300 bg-opacity-80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-foreground/80 mb-6">
              Naturellement délicieux, sans sucre ajouté
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              L'indulgence <span className="text-primary">sans</span> le sucre,
              <br /> le plaisir <span className="text-primary">sans</span> compromis
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              Découvrez notre gamme de gourmandises élaborées avec des
              ingrédients naturels, sans sucres ajoutés, pour un plaisir
              authentique et une satisfaction durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-primary">
                <span>Découvrir nos produits</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-primary/20 bg-transparent px-8 py-6 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Notre histoire
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 z-10 animate-fade-in">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800&q=90"
                  alt="Pâtisseries sans sucre"
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-100 rounded-full animate-float opacity-80"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-400 rounded-full animate-float opacity-30 backdrop-blur-sm"></div>
              <div className="absolute bottom-10 right-10 glass-card rounded-xl p-4 shadow-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <p className="text-sm font-medium">
                  "Saveur riche, zéro culpabilité" 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
