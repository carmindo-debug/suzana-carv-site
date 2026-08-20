import "./Hero.css";
import heroImage from "@/assets/images/hero/hero-principal.jpeg";
import { FaWhatsapp, FaArrowRight, FaCheckCircle } from "react-icons/fa";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        {/* Conteúdo */}
        <div className="hero__content">
          <h1 className="hero__title">
            Sobrancelhas naturais que <span>valorizam sua beleza.</span>
          </h1>

          <p className="hero__description">Realce sua expressão com um design personalizado, técnicas exclusivas e atendimento em um ambiente preparado para oferecer conforto, elegância e resultados naturais.</p>

          <div className="hero__buttons">
            <a
              href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
            >
              <span className="hero__button-icon-wrapper">
                <span className="hero__button-icon">
                  <FaWhatsapp />
                </span>
              </span>

              <span>Agende seu horário</span>
            </a>

            <a
              href="/servicos"
              className="hero__button hero__button--secondary"
            >
              Descubra a técnica Carv Brows
              <span className="hero__button-arrow">
                <FaArrowRight />
              </span>
            </a>
          </div>

          <div className="hero__features">
            <div className="hero__feature">
              <FaCheckCircle />
              <span>Atendimento com horário marcado</span>
            </div>

            <div className="hero__feature">
              <FaCheckCircle />
              <span>Técnica exclusiva</span>
            </div>

            <div className="hero__feature">
              <FaCheckCircle />
              <span>Ambiente confortável</span>
            </div>
          </div>
        </div>

        {/* Imagem */}

        <div className="hero__image-wrapper">
          <div className="hero__image-background"></div>

          <div className="hero__experience-badge">
            <span className="hero__experience-star">✦</span>

            <span className="hero__experience-years">+3 anos</span>

            <span className="hero__experience-text">de experiência</span>
          </div>

          <img src={heroImage} alt="Suzana Carv realizando design de sobrancelhas" className="hero__image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
