import { useEffect, useState } from "react";
import "./Services.css";
import { FaWhatsapp, FaArrowRight, FaCircleCheck, FaChevronDown } from "react-icons/fa6";
import SEO from "@/components/SEO/SEO";

import designSobrancelhas from "@/assets/images/services/design-sobrancelhas.jpeg";
import browLamination from "@/assets/images/services/brow-lamination.jpeg";
import carvBrowsHydragloss from "@/assets/images/services/carv-brows-hydragloss-labial.jpeg";
import descoloracaoSobrancelhas from "@/assets/images/services/descoloracao-sobrancelhas.jpeg";
import designColoracao from "@/assets/images/services/design-coloracao.jpeg";
import ServicesCTA from "@/components/CTA/ServicesCTA";

function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

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
      duration: "45-60 minutos",
      price: "A consultar",
      details: [
        "Design personalizado conforme formato do rosto",
        "Análise de simetria e proporção",
        "Orientação sobre cuidados pós-procedimento",
        "Resultado imediato",
      ],
      ideal_for: "Quem deseja definir e modelar as sobrancelhas com naturalidade",
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
      duration: "60-90 minutos",
      price: "A consultar",
      details: [
        "Uso de produtos de qualidade premium",
        "Mantém o alinhamento por 6-8 semanas",
        "Compatível com todos os tipos de fio",
        "Pode ser combinado com coloração",
      ],
      ideal_for: "Quem deseja sobrancelhas mais volumosas e bem-definidas",
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
      duration: "90-120 minutos",
      price: "A consultar",
      details: [
        "Procedimento exclusivo e completo",
        "Combinação estratégica de técnicas",
        "Resultado harmonioso face-lábios",
        "Efeito glossy nos lábios",
      ],
      ideal_for: "Quem busca uma experiência de beleza completa e personalizada",
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
      duration: "30-45 minutos",
      price: "A consultar",
      details: [
        "Processo controlado e seguro",
        "Adequado para qualquer tom de fio",
        "Resultados personalizados",
        "Cuidado especial com a sensibilidade da pele",
      ],
      ideal_for: "Quem deseja sobrancelhas mais claras ou compatível com coloração de cabelo",
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
      duration: "60-90 minutos",
      price: "A consultar",
      details: [
        "Design personalizado + coloração",
        "Cores adaptadas ao tom de pele",
        "Efeito duradouro de 6-8 semanas",
        "Ótimo para cobertura de falhas",
      ],
      ideal_for: "Quem quer definição, cor e cobertura em um único procedimento",
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
      <SEO
        title="Serviços de Sobrancelhas - Suzana Carv | Design, Brow Lamination"
        description="Conheça nossos 5 serviços: Design de Sobrancelhas, Brow Lamination, Carv Brows + Hydragloss, Descoloração e Design com Coloração. Técnicas profissionais personalizadas."
        url="/servicos"
        keywords="design de sobrancelhas, brow lamination, descoloração, coloração, sobrancelhas"
      />
      <section className="services-hero">
        <div className="services-hero__container">
          {/* Conteúdo */}

          <div className="services-hero__content">
            <span className="services-hero__badge">
              Procedimentos exclusivos
            </span>

            <h1 className="services-hero__title">
              Técnicas pensadas para realçar sua beleza natural.
            </h1>

            <p className="services-hero__description">
              Cada atendimento é personalizado para respeitar o formato do seu
              rosto, sua expressão e o resultado que você deseja alcançar com
              naturalidade e sofisticação.
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
              Escolha a técnica ideal para você
            </h2>

            <p className="services-procedures__description">
              Cada procedimento é realizado com atenção aos detalhes, respeitando
              suas características e realçando sua beleza de forma natural e
              harmoniosa.
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

                  <div className="procedure__metadata">
                    <div className="procedure__meta-item">
                      <strong>⏱️ Duração:</strong>
                      <span>{procedure.duration}</span>
                    </div>
                    <div className="procedure__meta-item">
                      <strong>💳 Valor:</strong>
                      <span>{procedure.price}</span>
                    </div>
                  </div>

                  <div className="procedure__ideal">
                    <p className="procedure__ideal-label">👤 Ideal para:</p>
                    <p className="procedure__ideal-text">{procedure.ideal_for}</p>
                  </div>

                  <ul className="procedure__benefits">
                    {procedure.benefits.map((benefit) => (
                      <li className="procedure__benefit" key={benefit}>
                        <FaCircleCheck aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="procedure__details">
                    <h4 className="procedure__details-title">O que está incluído:</h4>
                    <ul className="procedure__details-list">
                      {procedure.details.map((detail) => (
                        <li key={detail}>✓ {detail}</li>
                      ))}
                    </ul>
                  </div>

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

      {/* FAQ SECTION */}
      <section className="services-faq">
        <div className="services-faq__container">
          <header className="services-faq__header">
            <span className="services-faq__badge">Dúvidas frequentes</span>
            <h2 className="services-faq__title">Perguntas que recebemos com frequência</h2>
            <p className="services-faq__description">
              Confira as respostas às dúvidas mais comuns sobre nossos procedimentos
            </p>
          </header>

          <div className="services-faq__list">
            {[
              {
                id: 1,
                question: "Qual é a duração dos procedimentos?",
                answer: "A duração varia conforme o serviço escolhido. O Design de Sobrancelhas leva em média 45 a 60 minutos, o Brow Lamination fica entre 60 e 90 minutos e procedimentos combinados podem durar até 120 minutos.",
              },
              {
                id: 2,
                question: "Quanto tempo duram os resultados?",
                answer: "Depende do procedimento. Design e coloração costumam durar entre 6 e 8 semanas, enquanto o Brow Lamination mantém o alinhamento do fio por cerca de 6 a 8 semanas. O resultado do design imediato também pode ser ajustado conforme a evolução do crescimento dos fios.",
              },
              {
                id: 3,
                question: "Quais são os cuidados após o procedimento?",
                answer: "Recomendamos evitar água nos primeiros 24 horas, não usar maquiagem ou produtos químicos por 48 horas, evitar luz solar direta nos primeiros dias e seguir as orientações específicas da sua avaliação. O cuidado ideal será explicado no atendimento.",
              },
              {
                id: 4,
                question: "Qual procedimento é ideal para mim?",
                answer: "Tudo depende do seu objetivo. Se você busca definição, o Design de Sobrancelhas é ideal; para mais volume e alinhamento dos fios, o Brow Lamination é excelente; e para cobertura de falhas com acabamento personalizado, o Design com Coloração funciona muito bem.",
              },
              {
                id: 5,
                question: "Há alguma restrição de idade ou tipo de pele?",
                answer: "Os procedimentos são adaptados para diferentes tipos de pele e estruturas de fio. Em geral, podem ser realizados por maiores de 18 anos, com atenção para gestantes e pessoas com condições específicas. O ideal é informar qualquer sensibilidade ou alergia no atendimento.",
              },
              {
                id: 6,
                question: "Como faço para agendar?",
                answer: "É simples: você pode clicar em qualquer botão de agendamento, enviar mensagem pelo WhatsApp ou preencher o formulário de contato para tirar dúvidas antes da sua visita.",
              },
            ].map((faq) => (
              <div
                key={faq.id}
                className="services-faq__item"
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id);
                  }
                }}
              >
                <div className="services-faq__question">
                  <h3>{faq.question}</h3>
                  <FaChevronDown
                    className={`services-faq__icon ${
                      expandedFaq === faq.id ? "services-faq__icon--open" : ""
                    }`}
                    aria-hidden="true"
                  />
                </div>
                {expandedFaq === faq.id && (
                  <div className="services-faq__answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="services-faq__cta">
            <p>Ainda tem dúvidas?</p>
            <a
              href="https://wa.me/5521993471144?text=Olá! Tenho dúvidas sobre os procedimentos da Suzana Carv."
              target="_blank"
              rel="noopener noreferrer"
              className="services-faq__button"
            >
              <FaWhatsapp />
              Conversar via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ServicesCTA />
    </>
  );
}

export default Services;
