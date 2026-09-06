import { useEffect, useRef } from "react";

import {
  FaStar,
  FaHandHoldingHeart,
  FaAward,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa6";

import "./About.css";

import SEO from "@/components/SEO/SEO";

function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.add("about-reveal--visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("about-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const values = [
    {
      id: 1,
      icon: FaHandHoldingHeart,
      title: "Cuidado",
      description:
        "Cada atendimento é realizado com atenção, escuta e respeito à individualidade de cada mulher.",
    },
    {
      id: 2,
      icon: FaStar,
      title: "Naturalidade",
      description:
        "O propósito é valorizar a beleza natural, respeitando os traços e a identidade de cada rosto.",
    },
    {
      id: 3,
      icon: FaAward,
      title: "Profissionalismo",
      description:
        "A busca por conhecimento e aperfeiçoamento faz parte da trajetória e da forma de trabalhar da Suzana.",
    },
  ];

  const journey = [
    {
      step: "01",
      title: "O primeiro passo na beleza",
      description:
        "Ainda trabalhando em um salão de beleza, Suzana fez seu primeiro curso na área: extensão de cílios no Senac. Foi uma formação profissionalizante, com três técnicas, e algumas clientes foram atendidas como modelos para que ela pudesse descobrir se aquele caminho fazia sentido para ela.",
    },
    {
      step: "02",
      title: "A descoberta das sobrancelhas",
      description:
        "Depois de experimentar a extensão de cílios, Suzana percebeu que aquela não era a área em que gostaria de seguir. O procedimento exigia muito tempo e era bastante cansativo. Foi então que começou a buscar outra possibilidade dentro da beleza e encontrou na área de sobrancelhas aquilo que realmente despertou seu interesse.",
    },
    {
      step: "03",
      title: "Uma nova direção",
      description:
        "Em 2023, ainda trabalhando no salão, Suzana sentiu que não queria mais permanecer na recepção e desejava trabalhar por conta própria. Pediu novamente uma direção a Deus sobre o que fazer dentro da área da beleza. Foi então que decidiu se especializar e buscou formação com Natália Beauty, em São Paulo, onde realizou seu curso em novembro de 2023.",
    },
    {
      step: "04",
      title: "Um ano de prática e experiência",
      description:
        "Ao retornar de São Paulo, Suzana começou imediatamente a colocar em prática o que havia aprendido. Atendia colegas de trabalho como modelos e também passou a atender clientes do próprio salão. Aos poucos, começou a atender algumas pessoas em suas casas e também em sua própria casa. Durante aproximadamente um ano, foi construindo experiência, aperfeiçoando sua técnica e conquistando suas primeiras clientes.",
    },
    {
      step: "05",
      title: "Nasce a Sala do Embelezamento das Sobrancelhas",
      description:
        "No final de outubro de 2024, Suzana encerrou seu ciclo no salão onde trabalhava. A ideia era seguir seu próprio caminho. Em janeiro de 2025, depois de toda a experiência construída, nasceu seu espaço: a Sala do Embelezamento das Sobrancelhas Suzana Carv.",
    },
    {
      step: "06",
      title: "Um espaço escolhido em família",
      description:
        "A escolha do espaço atual foi feita junto com o marido e o filho. Suzana buscava um lugar que oferecesse segurança, proximidade e um ambiente agradável, mas que também estivesse dentro de uma realidade financeira possível. Assim chegou ao espaço localizado em uma galeria no Vilar dos Teles, onde encontrou um ambiente no qual se sente mais segura e confortável para receber suas clientes.",
    },
  ];

  return (
    <>
      <SEO
        title="Sobre Suzana Carv - Sala do Embelezamento das Sobrancelhas"
        description="Conheça a história de Suzana Carv, sua trajetória na área da beleza e como nasceu a Sala do Embelezamento das Sobrancelhas."
        url="/sobre"
        keywords="Suzana Carv, Sala do Embelezamento das Sobrancelhas, história Suzana Carv, design de sobrancelhas"
      />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content">
            <span className="about-hero__badge">
              Conheça a história da Suzana
            </span>

            <h1 className="about-hero__title">
              Uma história de{" "}
              <span>direção, coragem e amor pela beleza</span>
            </h1>

            <p className="about-hero__description">
              O que começou como uma busca por uma nova direção profissional
              se transformou em um propósito: criar um espaço próprio para
              valorizar a beleza natural de cada mulher através das
              sobrancelhas.
            </p>

            <a
              href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de conhecer melhor o trabalho."
              target="_blank"
              rel="noopener noreferrer"
              className="about-hero__button"
            >
              <span className="about-hero__button-icon">
                <FaWhatsapp />
              </span>

              Conhecer o trabalho da Suzana

              <span className="about-hero__button-arrow">
                <FaArrowRight />
              </span>
            </a>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__glow" />

            <div className="about-hero__quote-card">
              <FaStar className="about-hero__quote-icon" />

              <p>
                “Eu pedi uma direção a Deus e Ele me mostrou um caminho que
                uniu aquilo que eu precisava com aquilo que eu sempre gostei:
                o mundo da beleza.”
              </p>

              <span>— Suzana Carv</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section
        className="about-profile about-reveal"
        ref={addRevealRef}
      >
        <div className="about-profile__container">
          <h2 className="about-profile__title">
            Antes da Sala, existia um sonho
          </h2>

          <p className="about-profile__text">
            Em 2020, depois de cerca de cinco anos desempregada, Suzana
            buscava uma nova oportunidade profissional. Ela também queria
            algo diferente da realidade que havia vivido durante tantos anos:
            trabalhar longe de casa, enfrentar diariamente o trânsito do Rio
            de Janeiro e passar muitas horas no deslocamento.
          </p>

          <p className="about-profile__text">
            Suzana pediu a Deus uma direção. Queria encontrar um trabalho mais
            próximo de casa, com uma rotina que lhe permitisse ter mais
            qualidade de vida. Foi então que conheceu, através do Instagram, um
            salão de beleza. A experiência foi marcante desde o início.
          </p>

          <p className="about-profile__text">
            Em uma entrevista disputada por outras seis mulheres, Suzana foi
            a única escolhida. Ela contou à própria dona do salão que havia
            chegado até ali através de uma direção de Deus. E foi naquele
            ambiente, inicialmente trabalhando na recepção, que começou uma
            nova fase de sua história.
          </p>

          <div className="about-profile__highlights">
            <div className="about-profile__highlight">
              <strong>2020</strong>
              <span>Início da trajetória no salão</span>
            </div>

            <div className="about-profile__highlight">
              <strong>2023</strong>
              <span>Formação em São Paulo</span>
            </div>

            <div className="about-profile__highlight">
              <strong>2025</strong>
              <span>Nasce a Sala da Suzana</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section
        className="about-methodology about-reveal"
        ref={addRevealRef}
      >
        <div className="about-methodology__container">
          <header className="about-methodology__header">
            <span className="about-methodology__badge">
              Uma trajetória construída passo a passo
            </span>

            <h2 className="about-methodology__title">
              Da recepção à realização de um sonho
            </h2>

            <p className="about-methodology__description">
              Cada etapa teve seu propósito e ajudou a construir a profissional
              que Suzana é hoje.
            </p>
          </header>

          <div className="about-methodology__timeline">
            {journey.map((item) => (
              <article
                key={item.step}
                className="about-methodology__step"
              >
                <div className="about-methodology__step-number">
                  {item.step}
                </div>

                <div className="about-methodology__step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section
        className="about-values about-reveal"
        ref={addRevealRef}
      >
        <div className="about-values__container">
          <header className="about-values__header">
            <span className="about-values__badge">O propósito</span>

            <h2 className="about-values__title">
              Mais do que sobrancelhas
            </h2>

            <p className="about-values__description">
              Para Suzana, o trabalho não está apenas no resultado estético.
              Está também na experiência que cada mulher vive durante o
              atendimento.
            </p>
          </header>

          <div className="about-values__grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.id}
                  className="about-value-card"
                >
                  <div className="about-value-card__icon">
                    <Icon />
                  </div>

                  <h3 className="about-value-card__title">
                    {value.title}
                  </h3>

                  <p className="about-value-card__description">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOJE */}
      <section
        className="about-profile about-reveal"
        ref={addRevealRef}
      >
        <div className="about-profile__container">
          <h2 className="about-profile__title">
            Hoje, a Sala tem uma história para contar
          </h2>

          <p className="about-profile__text">
            A Sala do Embelezamento das Sobrancelhas Suzana Carv nasceu de uma
            decisão que foi sendo construída ao longo do tempo. Primeiro veio
            a oportunidade de entrar no universo da beleza. Depois, a
            descoberta de que as sobrancelhas eram o caminho que realmente
            fazia sentido. Em seguida, veio a capacitação, a prática, os
            atendimentos e, finalmente, a coragem de abrir um espaço próprio.
          </p>

          <p className="about-profile__text">
            Hoje, Suzana atende em seu próprio espaço no Vilar dos Teles,
            construído para oferecer um atendimento mais próximo, reservado e
            personalizado.
          </p>

          <p className="about-profile__text">
            Mais de 1.000 mulheres já confiaram em seu trabalho. E cada uma
            delas faz parte dessa história que continua sendo construída todos
            os dias.
          </p>

          <div className="about-profile__highlights">
            <div className="about-profile__highlight">
              <strong>+1.000</strong>
              <span>Mulheres atendidas</span>
            </div>

            <div className="about-profile__highlight">
              <strong>1</strong>
              <span>Propósito: valorizar a beleza natural</span>
            </div>

            <div className="about-profile__highlight">
              <strong>100%</strong>
              <span>Dedicação em cada atendimento</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="about-cta about-reveal"
        ref={addRevealRef}
      >
        <div className="about-cta__container">
          <div className="about-cta__content">
            <span className="about-cta__badge">
              Agora você conhece a história
            </span>

            <h2 className="about-cta__title">
              Que tal fazer parte dela?
            </h2>

            <p className="about-cta__description">
              Agende seu horário e venha viver a experiência da Sala do
              Embelezamento das Sobrancelhas Suzana Carv.
            </p>
          </div>

          <div className="about-cta__actions">

  

  <a
  href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
  target="_blank"
  rel="noopener noreferrer"
  className="about-cta__button about-cta__button--primary"
>
  <span className="about-cta__button-icon-wrapper">
    <span className="about-cta__button-icon">
      <FaWhatsapp aria-hidden="true" />
    </span>
  </span>

  <span>Agendar horário</span>
</a>

  <a
  href="/servicos"
  className="about-cta__button about-cta__button--secondary"
>
  <span>Conhecer serviços</span>

  <span className="about-cta__button-arrow">
    <FaArrowRight aria-hidden="true" />
  </span>
</a>

</div>
        </div>
      </section>
    </>
  );
}

export default About;