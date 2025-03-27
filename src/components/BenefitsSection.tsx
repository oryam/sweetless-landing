
import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Sans sucres ajoutés",
      description:
        "Nos produits ne contiennent pas de sucres raffinés ou ajoutés, préservant ainsi votre santé et votre ligne.",
    },
    {
      id: 2,
      title: "Ingrédients naturels",
      description:
        "Nous utilisons uniquement des ingrédients de haute qualité, sélectionnés avec soin pour leur pureté et leur goût.",
    },
    {
      id: 3,
      title: "Saveur préservée",
      description:
        "Nos méthodes de préparation préservent les saveurs authentiques des ingrédients pour une expérience gustative exceptionnelle.",
    },
    {
      id: 4,
      title: "Indice glycémique bas",
      description:
        "Idéal pour les personnes soucieuses de leur glycémie ou suivant un régime alimentaire spécifique.",
    },
  ];

  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-brand-300 px-4 py-1 rounded-full text-sm font-medium text-foreground/80 mb-4">
            Pourquoi choisir sans sucre
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les bienfaits de nos produits
          </h2>
          <p className="text-lg text-foreground/70">
            Découvrez comment nos gourmandises sans sucre peuvent transformer
            votre expérience du plaisir tout en préservant votre bien-être
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="glass-card p-8 rounded-2xl animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <blockquote className="text-xl md:text-2xl font-display italic text-foreground/90">
            "Le plaisir gustatif ne devrait jamais être compromis par la quête
            d'une alimentation plus saine. C'est pourquoi nous créons des
            produits délicieux qui vous font du bien."
          </blockquote>
          <div className="mt-4 text-foreground/70">
            — Fondatrice de SansSucre
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
