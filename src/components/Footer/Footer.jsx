import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaArrowUp,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../../assets/images/logo/suzana-carv-logo.png";

const navigationLinks = [
  {
    id: 1,
    label: "Início",
    path: "/",
  },
  {
    id: 2,
    label: "Sobre",
    path: "/sobre",
  },
  {
    id: 3,
    label: "Serviços",
    path: "/servicos",
  },
  {
    id: 4,
    label: "Portfólio",
    path: "/portfolio",
  },
  {
    id: 5,
    label: "Depoimentos",
    path: "/depoimentos",
  },
  {
    id: 6,
    label: "Contato",
    path: "/contato",
  },
];

const socialLinks = [
  {
    id: 1,
    name: "Instagram",
    username: "@suzanacarvalho_beauty",
    href: "https://www.instagram.com/suzanacarvalho_beauty/",
    icon: FaInstagram,
  },
  {
    id: 2,
    name: "WhatsApp",
    username: "(21) 99347-1144",
    href: "https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar um horário.",
    icon: FaWhatsapp,
  },
  {
    id: 3,
    name: "TikTok",
    username: "@suzana.carv180125",
    href: "https://www.tiktok.com/@suzana.carv180125",
    icon: FaTiktok,
  },
  {
    id: 4,
    name: "YouTube",
    username: "@SuzanaCarvsobrancelhas",
    href: "https://www.youtube.com/@SuzanaCarvsobrancelhas",
    icon: FaYoutube,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleInternalNavigation = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
};

  return (
    <footer className="footer">
      <div className="footer__decoration footer__decoration--one" />
      <div className="footer__decoration footer__decoration--two" />

      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link
              to="/"
              className="footer__brand-link"
              onClick={handleInternalNavigation}
              aria-label="Ir para a página inicial da Suzana Carv"
            >
              <img
                src={logo}
                alt="Suzana Carv"
                className="footer__logo-image"
              />

              <span className="footer__logo-fallback">Suzana Carv</span>
            </Link>

            <p className="footer__brand-text">
              Sobrancelhas naturais que valorizam sua beleza.
            </p>

            <p className="footer__brand-description">
              Atendimento personalizado para realçar sua beleza natural com
              cuidado, técnica e atenção aos detalhes.
            </p>

            <a
              href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar um horário."
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp-button"
            >
              <FaWhatsapp aria-hidden="true" />

              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>

          <nav className="footer__column" aria-label="Navegação do rodapé">
            <h2 className="footer__column-title">Navegação</h2>

            <ul className="footer__navigation-list">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={handleInternalNavigation}
                    className="footer__navigation-link"
                  >
                    <span className="footer__navigation-line" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__column">
            <h2 className="footer__column-title">Redes sociais</h2>

            <ul className="footer__social-list">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label={`Acessar ${social.name} da Suzana Carv`}
                    >
                      <span className="footer__social-icon">
                        <Icon aria-hidden="true" />
                      </span>

                      <span className="footer__social-content">
                        <strong>{social.name}</strong>
                        <small>{social.username}</small>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer__column footer__column--contact">
            <h2 className="footer__column-title">Informações</h2>

            <address className="footer__information-list">
              <a
                href="https://maps.app.goo.gl/jYkLEuMhdaSFFCHP7?g_st=iwb"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__information-item"
              >
                <span className="footer__information-icon">
                  <FaLocationDot aria-hidden="true" />
                </span>

                <span>
                  <strong>Galeria Amazonas</strong>

                  <small>
                    Rua Venâncio de Oliveira dos Santos, 57
                    <br />
                    Sala 112 — Vilar dos Teles
                    <br />
                    São João de Meriti — RJ
                  </small>
                </span>
              </a>

              <div className="footer__information-item">
                <span className="footer__information-icon">
                  <FaClock aria-hidden="true" />
                </span>

                <span>
                  <strong>Horário de atendimento</strong>

                  <small>
                    Terça a sábado, das 9h às 19h
                    <br />
                    Somente com horário agendado
                  </small>
                </span>
              </div>

              <a
                href="mailto:suzanacarvalhocontato@gmail.com"
                className="footer__information-item"
              >
                <span className="footer__information-icon">
                  <FaEnvelope aria-hidden="true" />
                </span>

                <span>
                  <strong>E-mail</strong>

                  <small className="footer__email">
                    suzanacarvalhocontato@gmail.com
                  </small>
                </span>
              </a>
            </address>
          </div>
        </div>
<div
          id="suzy-footer-slot"
          className="footer__suzy-slot"
        />
        <div className="footer__divider" />

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>© {currentYear} Suzana Carv. Todos os direitos reservados.</p>

            <p className="footer__developer">
              Desenvolvido por Carmindo Vasconcelos
            </p>
          </div>

          <button
            type="button"
            className="footer__top-button"
            onClick={scrollTop}
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <FaArrowUp aria-hidden="true" />

            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
