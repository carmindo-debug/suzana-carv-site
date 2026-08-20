import "./Results.css";

import resultImage from "@/assets/images/results/reel-instagram.jpeg";

import { FaInstagram, FaWhatsapp, FaPlay } from "react-icons/fa";

function Results() {
  return (
    <section id="resultados"
    className="results">
      <div className="results__container">
        <div className="results__content">
          <span className="results__badge">Técnica exclusiva</span>

          <h2 className="results__title">A técnica Carv Brows em ação</h2>

          <p className="results__description">
            Veja uma experiência real e descubra como a técnica exclusiva Carv
            Brows valoriza a beleza natural, proporcionando sobrancelhas mais
            harmônicas e um resultado elegante.
          </p>

          <div className="results__buttons">
            <a
              href="https://www.instagram.com/reel/DJkFJm1SOJa/"
              target="_blank"
              rel="noopener noreferrer"
              className="results__button results__button--instagram"
            >
              <span className="results__button-icon-wrapper">
                <span className="results__button-icon">
                  <FaInstagram />
                </span>
              </span>

              <span>Assistir no Instagram</span>
            </a>

            <a
              href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
              target="_blank"
              rel="noopener noreferrer"
              className="results__button results__button--whatsapp"
            >
              <span className="results__button-icon-wrapper">
                <span className="results__button-icon">
                  <FaWhatsapp />
                </span>
              </span>

              <span>Agende seu horário</span>
            </a>
          </div>
        </div>
<div className="results__video-wrapper">

  <div className="results__background-shape"></div>
        <a
          href="https://www.instagram.com/reel/DJkFJm1SOJa/"
          target="_blank"
          rel="noopener noreferrer"
          className="results__video"
        >
          <img
            src={resultImage}
            alt="Resultado da técnica Carv Brows realizada por Suzana Carv"
            className="results__image"
          />

          <div className="results__play">
            <FaPlay />
          </div>
        </a>
      </div>
      </div>
    </section>
  );
}

export default Results;
