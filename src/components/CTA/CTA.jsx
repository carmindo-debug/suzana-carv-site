import "./CTA.css";

import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <span className="cta__badge">Seu momento começa aqui</span>

        <h2 className="cta__title">
          Pronta para <span>realçar seu olhar?</span>
        </h2>

        <p className="cta__description">
          Agende seu atendimento e viva uma experiência exclusiva, com técnicas
          personalizadas, conforto e resultados naturais que valorizam sua
          beleza de forma delicada e harmoniosa.
        </p>

        <a
          href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
          target="_blank"
          rel="noopener noreferrer"
          className="cta__button"
        >
          <span className="cta__button-icon-wrapper">
            <span className="cta__button-icon">
              <FaWhatsapp />
            </span>
          </span>

          <span>Agende seu horário</span>

          <span className="cta__button-arrow">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
}

export default CTA;