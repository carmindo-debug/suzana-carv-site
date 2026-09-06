import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

import logo from "@/assets/images/logo/suzana-carv-logo.svg";

import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Fecha o menu ao apertar ESC */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getLinkClass = ({ isActive }) =>
    `navbar__link ${isActive ? "navbar__link--active" : ""}`;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        {/* LOGO */}
        <NavLink
          to="/"
          className="navbar__brand"
          aria-label="Suzana Carv - Página inicial"
        >
          <img src={logo} alt="Suzana Carv" className="navbar__logo" />
        </NavLink>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="navbar-navigation"
          aria-label={
            menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
          }
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>

        {/* NAVEGAÇÃO */}
        <nav
          id="navbar-navigation"
          className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Navegação principal"
        >
          <NavLink
            to="/"
            className={getLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/sobre"
            className={getLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/servicos"
            className={getLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </NavLink>

          <NavLink
            to="/portfolio"
            className={getLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Portfólio
          </NavLink>

          <NavLink
            to="/depoimentos"
            className={getLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Depoimentos
          </NavLink>

          <NavLink
            to="/contato"
            className={getLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </NavLink>

          {/* CTA DENTRO DO MENU MOBILE */}
          <a
            href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
            className="navbar__mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />

            <span>Agende seu horário</span>
          </a>
        </nav>

        {/* CTA DESKTOP */}
        <div className="navbar__actions">
          <a
            href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
            className="navbar__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="navbar__button-icon-wrapper">
              <span className="navbar__button-icon">
                <FaWhatsapp aria-hidden="true" />
              </span>
            </span>

            <span>Agende seu horário</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
