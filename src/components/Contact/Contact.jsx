import "./Contact.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__container">

        {/* CARD DE CONTATO */}

        <div className="contact__card">

          <span className="contact__badge">
            Seu atendimento começa aqui
          </span>

          <h2 className="contact__title">
            Seu novo olhar começa aqui
          </h2>

          <p className="contact__description">
            Será um prazer receber você na Sala de Sobrancelhas.
            Entre em contato, tire suas dúvidas e agende seu horário.
          </p>

          <div className="contact__info">

            <div className="contact__item">
              <FaWhatsapp className="contact__icon"/>

              <div>
                <small>Agendamentos e dúvidas</small>
                <strong>(21) 99347-1144</strong>
              </div>
            </div>

            <a
  href="https://www.instagram.com/suzanacarvalho_beauty/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact__item"
  aria-label="Acessar o Instagram da Suzana Carv"
>
  <span className="contact__icon">
    <FaInstagram aria-hidden="true" />
  </span>

  <div>
    <small>Acompanhe nossos resultados</small>
    <strong>@suzanacarvalho_beauty</strong>
  </div>
</a>

            <div className="contact__item">
              <FaMapMarkerAlt className="contact__icon"/>

              <div>
                <small>Nosso endereço</small>
                <strong>Rua Venâncio de Oliveira dos Santos, 57 sala 112<br /> Vilar dos Teles<br /> São João de Meriti - RJ</strong>
              </div>
            </div>

            <div className="contact__item">
              <FaClock className="contact__icon"/>

              <div>
                <small>Exclusivamente com horário marcado</small>
                <strong>Com horário marcado</strong>
              </div>
            </div>

          </div>

          <a
            href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
            target="_blank"
            rel="noopener noreferrer"
            className="contact__button"
          >

            <span className="contact__button-icon">
              <FaWhatsapp />
            </span>

            <span>
              Agende seu horário
            </span>

            <span className="contact__button-arrow">
              <FaArrowRight />
            </span>

          </a>

        </div>

        {/* MAPA */}

       <div className="contact__map">
  <iframe
    title="Localização"
    src="https://www.google.com/maps?q=Suzana+Carv+Embelezamento+das+Sobrancelhas,+São+João+de+Meriti,+RJ&output=embed"
    loading="lazy"
    allowFullScreen
  />
</div>

      </div>
    </section>
  );
}

export default Contact;
