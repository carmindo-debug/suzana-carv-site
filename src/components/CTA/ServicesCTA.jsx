import "./ServicesCTA.css";

import { FaArrowRight, FaCheck, FaWhatsapp } from "react-icons/fa6";

function ServicesCTA() {
  return (
    <section className="services-cta" aria-labelledby="services-cta-title">
      <div className="services-cta__container">
        <div className="services-cta__content">
          <span className="services-cta__eyebrow">
            Atendimento personalizado
          </span>

          <h2 id="services-cta-title" className="services-cta__title">
            Seu novo olhar começa aqui
          </h2>

          <p className="services-cta__description">
            Cada rosto possui características únicas. Por isso, cada
            atendimento é planejado para respeitar seus traços, harmonizar sua
            expressão e valorizar sua beleza natural.
          </p>

          <ul className="services-cta__benefits">
            <li>
              <span className="services-cta__check">
                <FaCheck aria-hidden="true" />
              </span>

              <span>Avaliação personalizada</span>
            </li>

            <li>
              <span className="services-cta__check">
                <FaCheck aria-hidden="true" />
              </span>

              <span>Atendimento somente com horário agendado</span>
            </li>

            <li>
              <span className="services-cta__check">
                <FaCheck aria-hidden="true" />
              </span>

              <span>Técnicas pensadas para resultados naturais</span>
            </li>
          </ul>

          <a
            href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta__button"
            aria-label="Agendar uma avaliação pelo WhatsApp"
          >
            <span className="services-cta__button-icon">
              <FaWhatsapp aria-hidden="true" />
            </span>

            <span>Agendar minha avaliação</span>

            <FaArrowRight
              className="services-cta__button-arrow"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="services-cta__signature" aria-hidden="true">
          <span className="services-cta__signature-line" />

          <span className="services-cta__signature-number">+3</span>

          <span className="services-cta__signature-text">
            anos valorizando
            <br />
            a beleza natural
          </span>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;