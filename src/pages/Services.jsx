import { useEffect, useState } from "react";
import "./Services.css";
import { FaWhatsapp, FaArrowRight, FaCheckCircle } from "react-icons/fa";

import designSobrancelhas from "@/assets/images/services/design-sobrancelhas.jpeg";
import browLamination from "@/assets/images/services/brow-lamination.jpeg";
import carvBrowsHydragloss from "@/assets/images/services/carv-brows-hydragloss-labial.jpeg";
import descoloracaoSobrancelhas from "@/assets/images/services/descoloracao-sobrancelhas.jpeg";
import designColoracao from "@/assets/images/services/design-coloracao.jpeg";
import ServicesCTA from "@/components/CTA/ServicesCTA";

function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const carouselImages = [
    {
      image: designSobrancelhas,
      alt: "Procedimento de design de sobrancelhas realizado por Suzana Carv",
    },
    {
      image: designColoracao,
      alt: "Procedimento de design de sobrancelhas com coloração",
    },
    {
      image: browLamination,
      alt: "Procedimento de Brow Lamination realizado por Suzana Carv",
    },
    {
      image: carvBrowsHydragloss,
      alt: "Procedimento Carv Brows com Hydragloss Labial",
    },
    {
      image: descoloracaoSobrancelhas,
      alt: "Procedimento de descoloração de sobrancelhas",
    },
  ];

  const procedures = [
    {
      id: "design-de-sobrancelhas",
      image: designSobrancelhas,
      title: "Design de Sobrancelhas",
      description:
        "Um atendimento personalizado que analisa o formato do rosto, a estrutura dos fios e a expressão facial para criar sobrancelhas equilibradas, naturais e harmoniosas.",
      benefits: [
        "Avaliação personalizada",
        "Harmonia facial",
        "Resultado natural",
      ],
    },
    {
      id: "brow-lamination",
      image: browLamination,
      title: "Brow Lamination",
      description:
        "Técnica que organiza e direciona os fios, proporcionando sobrancelhas visualmente mais preenchidas, alinhadas e com acabamento sofisticado.",
      benefits: [
        "Fios mais alinhados",
        "Efeito visual de preenchimento",
        "Acabamento moderno",
      ],
    },
    {
      id: "carv-brows-hydragloss-labial",
      image: carvBrowsHydragloss,
      title: "Carv Brows + Hydragloss Labial",
      description:
        "Uma experiência combinada de cuidado para sobrancelhas e lábios, desenvolvida para valorizar a expressão e proporcionar uma aparência mais bem cuidada.",
      benefits: [
        "Cuidado completo",
        "Realce da beleza natural",
        "Experiência personalizada",
      ],
    },
    {
      id: "descoloracao-de-sobrancelhas",
      image: descoloracaoSobrancelhas,
      title: "Descoloração de Sobrancelhas",
      description:
        "Procedimento realizado de maneira controlada para suavizar a tonalidade dos fios e criar um resultado mais leve, moderno e compatível com o visual desejado.",
      benefits: [
        "Tonalidade mais suave",
        "Resultado personalizado",
        "Visual moderno",
      ],
    },
    {
      id: "design-com-coloracao",
      image: designColoracao,
      title: "Design com Coloração",
      description:
        "Combinação entre o design personalizado e a aplicação de coloração para proporcionar maior definição, uniformidade e destaque ao olhar.",
      benefits: [
        "Maior definição",
        "Coloração personalizada",
        "Acabamento profissional",
      ],
    },
  ];

  useEffect(() => {
    if (isCarouselPaused) {
      return undefined;
    }

    const carouselInterval = window.setInterval(() => {
      setActiveSlide(
        (currentSlide) => (currentSlide + 1) % carouselImages.length,
      );
    }, 5000);

    return () => {
      window.clearInterval(carouselInterval);
    };
  }, [activeSlide, isCarouselPaused, carouselImages.length]);

  const selectSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <>
      <section className="services-hero">
        <div className="services-hero__container">
          {/* Conteúdo */}

          <div className="services-hero__content">
            <span className="services-hero__badge">
              Procedimentos Exclusivos
            </span>

            <h1 className="services-hero__title">
              Técnicas desenvolvidas para valorizar sua beleza com naturalidade.
            </h1>

            <p className="services-hero__description">
              Cada procedimento é realizado de forma personalizada, respeitando
              o formato do seu rosto, sua personalidade e o resultado que você
              deseja alcançar.
            </p>

            <div className="services-hero__buttons">
              <a
                href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar meu horário."
                target="_blank"
                rel="noopener noreferrer"
                className="services-hero__button services-hero__button--primary"
              >
                <span className="services-hero__button-icon-wrapper">
                  <span className="services-hero__button-icon">
                    <FaWhatsapp />
                  </span>
                </span>

                <span>Agende seu horário</span>
              </a>

              <a
                href="#procedimentos"
                className="services-hero__button services-hero__button--secondary"
              >
                Conheça os procedimentos
                <span className="services-hero__button-arrow">
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>

          {/* Carrossel de imagens */}

          <div
            className="services-hero__visual"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onFocusCapture={() => {
  if (window.matchMedia("(hover: hover)").matches) {
    setIsCarouselPaused(true);
  }
}}
            onBlurCapture={() => setIsCarouselPaused(false)}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Imagens dos procedimentos Suzana Carv"
          >
            <div className="services-hero__carousel">
              {carouselImages.map((slide, index) => (
                <img
                  src={slide.image}
                  alt={index === activeSlide ? slide.alt : ""}
                  className={`services-hero__slide ${
                    index === activeSlide ? "services-hero__slide--active" : ""
                  }`}
                  aria-hidden={index !== activeSlide}
                  key={slide.image}
                />
              ))}

              <div
                className="services-hero__dots"
                role="group"
                aria-label="Selecionar imagem do carrossel"
              >
                {carouselImages.map((slide, index) => (
                  <button
                    type="button"
                    className={`services-hero__dot ${
                      index === activeSlide ? "services-hero__dot--active" : ""
                    }`}
                    onClick={() => selectSlide(index)}
                    aria-label={`Mostrar imagem ${index + 1} de ${
                      carouselImages.length
                    }`}
                    aria-current={index === activeSlide ? "true" : undefined}
                    key={slide.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services-procedures"
        id="procedimentos"
        aria-labelledby="services-procedures-title"
      >
        <div className="services-procedures__container">
          <header className="services-procedures__header">
            <span className="services-procedures__badge">
              Nossos procedimentos
            </span>

            <h2
              className="services-procedures__title"
              id="services-procedures-title"
            >
              Escolha o procedimento ideal para você
            </h2>

            <p className="services-procedures__description">
              Cada técnica é realizada com atenção aos detalhes, respeitando
              suas características e valorizando sua beleza natural.
            </p>
          </header>

          <div className="services-procedures__list">
            {procedures.map((procedure, index) => (
              <article
              id={procedure.id}
                className={`procedure ${
                  index % 2 !== 0 ? "procedure--reverse" : ""
                }`}
                key={procedure.title}
              >
                <div className="procedure__image-wrapper">
                  <div className="procedure__image-background" />

                  <img
                    src={procedure.image}
                    alt={`Resultado do procedimento ${procedure.title}`}
                    className="procedure__image"
                    loading="lazy"
                  />
                </div>

                <div className="procedure__content">
                  <span className="procedure__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="procedure__title">{procedure.title}</h3>

                  <p className="procedure__description">
                    {procedure.description}
                  </p>

                  <ul className="procedure__benefits">
                    {procedure.benefits.map((benefit) => (
                      <li className="procedure__benefit" key={benefit}>
                        <FaCheckCircle aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar meu horário."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="procedure__button"
                    aria-label={`Agendar ${procedure.title} pelo WhatsApp`}
                  >
                    <span className="procedure__button-icon">
                      <FaWhatsapp aria-hidden="true" />
                    </span>

                    <span>Agendar este procedimento</span>

                    <FaArrowRight
                      className="procedure__button-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ServicesCTA />
    </>
  );
}

export default Services;
