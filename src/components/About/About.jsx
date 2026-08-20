import "./About.css";

import aboutImage from "@/assets/images/about/suzana-carv.jpeg";

import {
  FaWhatsapp,
  FaCheckCircle,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

function About() {
  return (
    <section id="sobre"
    className="about">
      <div className="about__container">
        {/* Imagem */}

        <div className="about__image-wrapper">
          <div className="about__background-shape"></div>
          <img src={aboutImage} alt="Suzana Carv especialista em design de sobrancelhas" className="about__image" />
        </div>

        {/* Conteúdo */}

        <div className="about__content">
          <span className="about__badge">Conheça a profissional</span>

          <h2 className="about__title">
            Mais de <span>3 anos</span> valorizando a beleza natural.
          </h2>

          <p className="about__description">
            Meu propósito é realçar a beleza natural de cada cliente através de
            técnicas personalizadas, atendimento humanizado e um ambiente
            preparado para proporcionar conforto, confiança e autoestima.
          </p>

          <div className="about__highlights">
            <div className="about__item">
              <FaCheckCircle />
              <span>Atendimento personalizado</span>
            </div>

            <div className="about__item">
              <FaAward />
              <span>Técnicas exclusivas</span>
            </div>

            <div className="about__item">
              <FaGraduationCap />
              <span>Formação e aperfeiçoamento constante</span>
            </div>
          </div>

          <a
              href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
              target="_blank"
              rel="noopener noreferrer"
              className="about__button about__button--primary"
            >
              <span className="about__button-icon-wrapper">
                <span className="about__button-icon">
                  <FaWhatsapp />
                </span>
              </span>

              <span>Agende seu horário</span>
            </a>
        </div>
      </div>
    </section>
  );
}

export default About;
