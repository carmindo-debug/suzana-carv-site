import { useEffect, useRef } from "react";

import {
  FaArrowRight,
  FaCalendarCheck,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

import "./Contact.css";

const contactChannels = [
  {
    id: 1,
    name: "WhatsApp",
    description: "Agende seu atendimento de forma rápida e direta.",
    href: "https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar um horário.",
    icon: FaWhatsapp,
    featured: true,
  },
  {
    id: 2,
    name: "Instagram",
    description: "Acompanhe resultados, novidades e o dia a dia do trabalho.",
    href: "https://www.instagram.com/suzanacarvalho_beauty/",
    icon: FaInstagram,
  },
  {
    id: 3,
    name: "TikTok",
    description:
      "Veja bastidores, dicas e conteúdos rápidos sobre sobrancelhas.",
    href: "https://www.tiktok.com/@suzana.carv180125",
    icon: FaTiktok,
  },
  {
    id: 4,
    name: "YouTube",
    description:
      "Assista a conteúdos completos sobre cuidados e procedimentos.",
    href: "https://www.youtube.com/@SuzanaCarvsobrancelhas",
    icon: FaYoutube,
  },
];

const serviceHighlights = [
  "Resposta rápida pelo WhatsApp",
  "Atendimento somente com horário marcado",
  "Ambiente confortável e reservado",
  "Atendimento personalizado",
];

const googleMapsUrl =
  "https://maps.app.goo.gl/jYkLEuMhdaSFFCHP7?g_st=iwb";

const mapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=-43.3664547791897%2C-22.77992645688787%2C-43.3564547791897%2C-22.76992645688787&layer=mapnik&marker=-22.77492645688787%2C-43.3614547791897";
function Contact() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.add("contact-reveal--visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("contact-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -60px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__container">
          <div className="contact-hero__content">
            <span className="contact-hero__badge">Entre em contato</span>

            <h1 className="contact-hero__title">
              Vamos conversar sobre o cuidado que o seu
              <span> olhar merece?</span>
            </h1>

            <p className="contact-hero__description">
              Tire suas dúvidas, conheça os procedimentos e agende seu horário
              diretamente com a Suzana.
            </p>

            <div className="contact-hero__actions">
              <a
                href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar um horário."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button contact-button--primary"
              >
                <span className="contact-button__icon">
                  <FaWhatsapp aria-hidden="true" />
                </span>
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#localizacao"
                className="contact-button contact-button--secondary"
              >
                <span>Ver localização</span>
                <FaArrowRight
                  className="contact-button__arrow"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div
            className="contact-hero__visual"
            aria-label="Informações de atendimento"
          >
            <div className="contact-hero__glow" />

            <article className="contact-service-card">
              <div className="contact-service-card__header">
                <span className="contact-service-card__icon">
                  <FaCalendarCheck aria-hidden="true" />
                </span>

                <div>
                  <span className="contact-service-card__eyebrow">
                    Atendimento
                  </span>
                  <h2>Experiência personalizada</h2>
                </div>
              </div>

              <ul className="contact-service-card__list">
                {serviceHighlights.map((highlight) => (
                  <li key={highlight}>
                    <span aria-hidden="true">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="contact-service-card__footer">
                <FaClock aria-hidden="true" />
                <div>
                  <strong>Terça a sábado</strong>
                  <span>Das 9h às 19h</span>
                </div>
              </div>
            </article>

            <div className="contact-hero__floating-note">
              <FaLocationDot aria-hidden="true" />
              <div>
                <strong>Vilar dos Teles</strong>
                <span>São João de Meriti — RJ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-channels contact-reveal" ref={addRevealRef}>
        <div className="contact-section__container">
          <header className="contact-section__header">
            <span className="contact-section__badge">
              Canais de atendimento
            </span>
            <h2 className="contact-section__title">
              Escolha a melhor forma de falar conosco
            </h2>
            <p className="contact-section__description">
              O WhatsApp é o canal principal para agendamentos. Nas redes
              sociais, você acompanha resultados, bastidores e conteúdos da
              Suzana Carv.
            </p>
          </header>

          <div className="contact-channels__grid">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-channel-card ${
                    channel.featured ? "contact-channel-card--featured" : ""
                  }`}
                >
                  <span className="contact-channel-card__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <div className="contact-channel-card__content">
                    <h3>{channel.name}</h3>
                    <p>{channel.description}</p>
                  </div>

                  <FaArrowRight
                    className="contact-channel-card__arrow"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="contact-information contact-reveal"
        ref={addRevealRef}
      >
        <div className="contact-section__container">
          <div className="contact-information__grid">
            <article className="contact-info-card">
              <span className="contact-info-card__icon">
                <FaLocationDot aria-hidden="true" />
              </span>

              <div className="contact-info-card__content">
                <span className="contact-info-card__eyebrow">Onde estamos</span>
                <h2>Galeria Amazonas</h2>

                <address>
                  Rua Venâncio de Oliveira Santos, 57
                  <br />
                  Sala 112 — Vilar dos Teles
                  <br />
                  São João de Meriti — RJ
                  <br />
                  CEP 25560-670
                </address>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-card__link"
                >
                  <span>Abrir no Google Maps</span>
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="contact-info-card">
              <span className="contact-info-card__icon">
                <FaClock aria-hidden="true" />
              </span>

              <div className="contact-info-card__content">
                <span className="contact-info-card__eyebrow">
                  Horário de atendimento
                </span>
                <h2>Terça a sábado</h2>
                <p className="contact-info-card__schedule">Das 9h às 19h</p>
                <p className="contact-info-card__note">
                  Para garantir uma experiência tranquila e personalizada, os
                  atendimentos são realizados somente com horário agendado.
                </p>
              </div>
            </article>

            <article className="contact-info-card">
              <span className="contact-info-card__icon">
                <FaEnvelope aria-hidden="true" />
              </span>

              <div className="contact-info-card__content">
                <span className="contact-info-card__eyebrow">
                  Outros contatos
                </span>
                <h2>Fale com a Suzana</h2>

                <p className="contact-info-card__contact">
  (21) 99347-1144
</p>

                <p className="contact-info-card__contact">
  suzanacarvalhocontato@gmail.com
</p>
                <a
  href="mailto:suzanacarvalhocontato@gmail.com"
  className="contact-info-card__link"
>
  <span>Enviar e-mail</span>
  <FaArrowRight aria-hidden="true" />
</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="contact-location contact-reveal"
        id="localizacao"
        ref={addRevealRef}
      >
        <div className="contact-section__container">
          <div className="contact-location__heading">
            <div>
              <span className="contact-section__badge">Localização</span>
              <h2 className="contact-section__title">
                Um espaço preparado para receber você
              </h2>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-location__button"
            >
              <FaLocationDot aria-hidden="true" />
              <span>Como chegar</span>
            </a>
          </div>

          <div className="contact-location__map-wrapper">
  <iframe
    src={mapEmbedUrl}
    title="Localização da Suzana Carv na Galeria Amazonas"
    className="contact-location__map"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </section>

      <section className="contact-cta contact-reveal" ref={addRevealRef}>
        <div className="contact-cta__container">
          <div className="contact-cta__content">
            <span className="contact-cta__badge">Seu momento começa aqui</span>
            <h2 className="contact-cta__title">
              Agende seu horário e valorize a beleza natural do seu olhar
            </h2>
            <p className="contact-cta__description">
              Entre em contato pelo WhatsApp para consultar horários disponíveis
              e escolher o procedimento ideal para você.
            </p>
          </div>

          <a
            href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de consultar os horários disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta__button"
          >
            <span className="contact-cta__button-icon">
              <FaWhatsapp aria-hidden="true" />
            </span>
            <span>Consultar horários</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
