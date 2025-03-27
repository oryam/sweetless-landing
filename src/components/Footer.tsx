
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="inline-block text-2xl font-display font-bold text-foreground mb-4"
            >
              <span className="text-primary">Sans</span>Sucre
            </Link>
            <p className="text-foreground/70 mb-4">
              Profitez du plaisir des gourmandises, sans le sucre ajouté.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">Produits</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Chocolats
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Biscuits
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Confitures
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Nouveautés
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                123 Rue de la Pâtisserie
                <br />
                75000 Paris, France
              </li>
              <li>
                <a
                  href="mailto:contact@sanssucre.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  contact@sanssucre.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {currentYear} SansSucre. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/terms"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Conditions d'utilisation
            </Link>
            <Link
              to="/legal"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
