import { useEffect, useRef } from "react";
import {
  FaStar,
  FaHandHoldingHeart,
  FaMicroscope,
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
      { threshold: 0.1, rootMargin: "0px 0px -60px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const addRevealRef = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  const certifications = [
    {
      id: 1,
      title: "Design de Sobrancelhas Profissional",
      issuer: "Instituto de Beleza Brasileiro",
      year: "2021",
      description: "Certificação completa em técnicas de design e estrutura facial",
    },
    {
      id: 2,
      title: "Brow Lamination Avançado",
      issuer: "Academia Internacional de Beleza",
      year: "2022",
      description: "Certificação em técnicas premium de alinhamento de fios",
    },
    {
      id: 3,
      title: "Coloração Especializada",
      issuer: "Centro de Formação de Estética",
      year: "2022",
      description: "Especialização em coloração segura e personalizada",
    },
    {
      id: 4,
      title: "Segurança e Higiene em Procedimentos",
      issuer: "Associação de Profissionais de Beleza",
      year: "2023",
      description: "Certificação em protocolos de segurança e higiene",
    },
  ];

  const values = [
    {
      id: 1,
      icon: FaHandHoldingHeart,
      title: "Cuidado",
      description: "Cada cliente recebe atenção personalizada e cuidado genuíno em todos os detalhes",
    },
    {
      id: 2,
      icon: FaMicroscope,
      title: "Técnica",
      description: "Procedimentos baseados em técnicas profissionais e métodos comprovados",
    },
    {
      id: 3,
      icon: FaStar,
      title: "Naturalidade",
      description: "Resultados que valorizam a beleza natural, sem excessos ou artificialidades",
    },
    {
      id: 4,
      icon: FaAward,
      title: "Excelência",
      description: "Compromisso constante com qualidade, inovação e satisfação do cliente",
    },
  ];

  return (
    <>
      <SEO
        title="Sobre Suzana Carv - Design de Sobrancelhas Profissional"
        description="Conheça a história de Suzana Carv. Especialista em design de sobrancelhas com mais de 3 anos de experiência, técnicas profissionais certificadas e cuidado genuíno."
        url="/sobre"
        keywords="sobre Suzana Carv, design de sobrancelhas profissional, brow specialist, sobrancelhas"
      />
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content">
            <span className="about-hero__badge">Conheça a história</span>

            <h1 className="about-hero__title">
              Sobrancelhas que refletem quem você é, com técnica de quem realmente se importa
            </h1>

            <p className="about-hero__description">
              Há mais de 3 anos transformando sobrancelhas e confiança de mais de 1.000 mulheres através de técnicas profissionais, cuidado genuíno e respeito à beleza natural.
            </p>

            <a
              href="https://wa.me/5521993471144?text=Olá! Adorei conhecer sua história e gostaria de agendar meu horário."
              target="_blank"
              rel="noopener noreferrer"
              className="about-hero__button"
            >
              <FaWhatsapp />
              Fazer parte dessa história
            </a>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__glow" />
            <div className="about-hero__quote-card">
              <FaStar className="about-hero__quote-icon" />
              <p>
                "Cada cliente é única. Meu trabalho é realçar essa unicidade, respeitando sua beleza natural e criando resultados que tragam confiança."
              </p>
              <span>— Suzana Carv</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE SUZANA */}
      <section className="about-profile about-reveal" ref={addRevealRef}>
        <div className="about-profile__container">
          <div className="about-profile__content">
            <h2 className="about-profile__title">Quem é Suzana Carv?</h2>

            <p className="about-profile__text">
              Suzana é uma profissional dedicada à transformação de sobrancelhas com foco em técnica, estética e bem-estar. Começou sua jornada no setor de beleza movida pela paixão em ajudar clientes a se sentirem mais confiantes e bonitas.
            </p>

            <p className="about-profile__text">
              Com mais de 3 anos de experiência, especializou-se em Design Personalizado, Brow Lamination e procedimentos que respeitam a estrutura natural do rosto. Cada atendimento é pensado de forma única, sem protocolos genéricos.
            </p>

            <p className="about-profile__text">
              Hoje, Suzana é reconhecida pela qualidade do trabalho, atenção aos detalhes e pela capacidade de ouvir e entender as necessidades de cada cliente. Seu objetivo é simples: fazer com que você se sinta bonita, confiante e valorizada.
            </p>

            <div className="about-profile__highlights">
              <div className="about-profile__highlight">
                <strong>+3 anos</strong>
                <span>De experiência</span>
              </div>
              <div className="about-profile__highlight">
                <strong>+1.000</strong>
                <span>Clientes atendidas</span>
              </div>
              <div className="about-profile__highlight">
                <strong>100%</strong>
                <span>Dedicação e cuidado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES E PRINCÍPIOS */}
      <section className="about-values about-reveal" ref={addRevealRef}>
        <div className="about-values__container">
          <header className="about-values__header">
            <span className="about-values__badge">Princípios</span>
            <h2 className="about-values__title">O que guia nosso trabalho</h2>
            <p className="about-values__description">
              Esses valores são a base de cada procedimento e atendimento
            </p>
          </header>

          <div className="about-values__grid">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.id} className="about-value-card">
                  <div className="about-value-card__icon">
                    <Icon />
                  </div>
                  <h3 className="about-value-card__title">{value.title}</h3>
                  <p className="about-value-card__description">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section className="about-certifications about-reveal" ref={addRevealRef}>
        <div className="about-certifications__container">
          <header className="about-certifications__header">
            <span className="about-certifications__badge">Qualificações</span>
            <h2 className="about-certifications__title">Preparação contínua e profissionalismo</h2>
            <p className="about-certifications__description">
              Investimento constante em capacitação e aprendizado para oferecer os melhores procedimentos
            </p>
          </header>

          <div className="about-certifications__grid">
            {certifications.map((cert) => (
              <article key={cert.id} className="about-cert-card">
                <div className="about-cert-card__header">
                  <FaAward className="about-cert-card__icon" />
                  <span className="about-cert-card__year">{cert.year}</span>
                </div>

                <h3 className="about-cert-card__title">{cert.title}</h3>

                <p className="about-cert-card__issuer">{cert.issuer}</p>

                <p className="about-cert-card__description">{cert.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="about-methodology about-reveal" ref={addRevealRef}>
        <div className="about-methodology__container">
          <header className="about-methodology__header">
            <span className="about-methodology__badge">Processo</span>
            <h2 className="about-methodology__title">Como funciona um atendimento na Suzana Carv</h2>
            <p className="about-methodology__description">
              Cada procedimento segue um processo cuidadoso que garante qualidade, segurança e sua satisfação
            </p>
          </header>

          <div className="about-methodology__timeline">
            {[
              {
                step: "01",
                title: "Escuta Ativa",
                description: "Conversa genuína sobre seus objetivos, preocupações e o que você espera do procedimento",
              },
              {
                step: "02",
                title: "Análise Facial",
                description: "Avaliação detalhada do formato do rosto, estrutura dos fios e características únicas",
              },
              {
                step: "03",
                title: "Planejamento",
                description: "Proposição de um plano personalizado que respeita sua beleza natural e desejos",
              },
              {
                step: "04",
                title: "Execução",
                description: "Aplicação da técnica escolhida com precisão, cuidado e produtos de qualidade premium",
              },
              {
                step: "05",
                title: "Resultado",
                description: "Apresentação do resultado final e verificação de sua satisfação completa",
              },
              {
                step: "06",
                title: "Acompanhamento",
                description: "Orientações de cuidados pós-procedimento e disponibilidade para dúvidas",
              },
            ].map((item, index) => (
              <div key={index} className="about-methodology__step">
                <div className="about-methodology__step-number">{item.step}</div>
                <div className="about-methodology__step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="about-cta about-reveal" ref={addRevealRef}>
        <div className="about-cta__container">
          <div className="about-cta__content">
            <span className="about-cta__badge">Vamos nos conhecer</span>
            <h2 className="about-cta__title">
              Pronta para se sentir mais bonita e confiante?
            </h2>
            <p className="about-cta__description">
              Agende seu horário e descubra por que mais de 1.000 mulheres confiam na Suzana Carv
            </p>
          </div>

          <div className="about-cta__actions">
            <a
              href="https://wa.me/5521993471144?text=Olá! Adorei conhecer sua história e gostaria de agendar meu horário."
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta__button about-cta__button--primary"
            >
              <FaWhatsapp />
              Agendar horário
            </a>

            <a
              href="/servicos"
              className="about-cta__button about-cta__button--secondary"
            >
              Conhecer serviços
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;