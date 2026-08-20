import { useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaInstagram,
  FaPlay,
  FaQuoteLeft,
  FaStar,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

import "./Testimonials.css";

const videoTestimonials = [
  {
    id: 1,
    featured: true,

    name: "Experiência contada por quem viveu",
    service: "Depoimento real • Suzana Carv",

    videoSrc: "/assets/videos/depoimento-cliente-01.mp4",
    poster: "/assets/videos/depoimento-cliente-01.webp",
  },

  {
    id: 2,
    featured: false,

    name: "Cuidado em cada detalhe",
    service: "Atendimento personalizado",

    videoSrc: "/assets/videos/depoimento-cliente-02.mp4",
    poster: "/assets/videos/depoimento-cliente-02.webp",
  },

  {
    id: 3,
    featured: false,

    name: "Naturalidade que valoriza",
    service: "Resultado • Suzana Carv",

    videoSrc: "/assets/videos/depoimento-cliente-03.mp4",
    poster: "/assets/videos/depoimento-cliente-03.webp",
  },
];

const trustHighlights = [
  {
    id: 1,
    value: "+3",
    label: "anos de experiência",
  },
  {
    id: 2,
    value: "100%",
    label: "atendimento personalizado",
  },
  {
    id: 3,
    value: "Natural",
    label: "como princípio de cada resultado",
  },
];

function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sectionsRef = useRef([]);
  const featuredVideo =
  videoTestimonials.find((testimonial) => testimonial.featured) ??
  videoTestimonials[0];

const secondaryVideos = videoTestimonials.filter(
  (testimonial) => testimonial.id !== featuredVideo?.id,
);

  useEffect(() => {
    const elements = sectionsRef.current.filter(Boolean);

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("testimonials-reveal--visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("testimonials-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -50px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedVideo) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  const addRevealRef = (element) => {
    if (element && !sectionsRef.current.includes(element)) {
      sectionsRef.current.push(element);
    }
  };

  return (
    <>
      <main className="testimonials-page">
        <section className="testimonials-hero">
          <div className="testimonials-hero__container">
            <div className="testimonials-hero__content">
              <span className="testimonials-hero__badge">
                Experiências reais
              </span>

              <h1 className="testimonials-hero__title">
                A confiança das clientes é o nosso
                <span> maior resultado</span>
              </h1>

              <p className="testimonials-hero__description">
                Cada atendimento é construído com escuta, técnica e cuidado.
                Conheça a experiência de quem confiou seu olhar à Suzana Carv.
              </p>

              <div className="testimonials-hero__actions">
                <a
                  href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar um horário."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonials-hero__button testimonials-hero__button--primary"
                >
                  <span className="testimonials-hero__button-icon">
                    <FaWhatsapp aria-hidden="true" />
                  </span>

                  <span>Agende seu horário</span>
                </a>

                <a
                  href="#depoimento-em-video"
                  className="testimonials-hero__button testimonials-hero__button--secondary"
                >
                  <span>Assistir depoimento</span>

                  <FaArrowRight
                    className="testimonials-hero__button-arrow"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="testimonials-hero__visual" aria-hidden="true">
              <div className="testimonials-hero__glow" />

              <article className="testimonials-hero__quote-card testimonials-hero__quote-card--main">
                <FaQuoteLeft
                  className="testimonials-hero__quote-icon"
                  aria-hidden="true"
                />

                <p>
                  Técnica, delicadeza e respeito à beleza natural de cada
                  cliente.
                </p>

                <span>Suzana Carv</span>
              </article>

              <article className="testimonials-hero__quote-card testimonials-hero__quote-card--small">
                <div className="testimonials-hero__stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} aria-hidden="true" />
                  ))}
                </div>

                <strong>Experiência acolhedora</strong>
                <span>do início ao resultado</span>
              </article>

              <div className="testimonials-hero__seal">
                <strong>+3</strong>
                <span>anos valorizando olhares</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="testimonials-trust testimonials-reveal"
          ref={addRevealRef}
        >
          <div className="testimonials-trust__container">
            {trustHighlights.map((highlight) => (
              <article
                className="testimonials-trust__item"
                key={highlight.id}
              >
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </article>
            ))}
          </div>
        </section>

       <section
  className="testimonials-videos testimonials-reveal"
  id="depoimento-em-video"
  ref={addRevealRef}
  aria-labelledby="testimonials-videos-title"
>
          <div className="testimonials-section__container">
            <header className="testimonials-section__header">
  <span className="testimonials-section__badge">
    Experiências reais
  </span>

  <h2
    className="testimonials-section__title"
    id="testimonials-videos-title"
  >
    Cada depoimento representa uma história de confiança,
    cuidado e transformação
  </h2>

  <p className="testimonials-section__description">
    Conheça relatos de clientes que confiaram no trabalho da
    Suzana Carv e descobriram como um atendimento personalizado
    pode valorizar ainda mais sua beleza natural.
  </p>
</header>

            <div className="testimonials-videos__showcase">
  {featuredVideo && (
    <article className="testimonials-video-card testimonials-video-card--featured">
      <button
        type="button"
        className="testimonials-video-card__button"
        onClick={() => setSelectedVideo(featuredVideo)}
        aria-label={`Assistir ao depoimento de ${featuredVideo.name}`}
      >
        <span className="testimonials-video-card__placeholder" />

        {featuredVideo.poster && (
          <img
            src={featuredVideo.poster}
            alt=""
            className="testimonials-video-card__poster"
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        <span className="testimonials-video-card__overlay" />

        <span className="testimonials-video-card__play">
          <FaPlay aria-hidden="true" />
        </span>

        <span className="testimonials-video-card__information">
  <span className="testimonials-video-card__badge">
    ★★★★★ Depoimento real
  </span>

  <strong className="testimonials-video-card__headline">
    {featuredVideo.name}
  </strong>

  <span className="testimonials-video-card__client">
    {featuredVideo.service}
  </span>
</span>
      </button>
    </article>
  )}

  {secondaryVideos.length > 0 && (
    <div className="testimonials-videos__secondary">
      {secondaryVideos.map((testimonial) => (
        <article
          className="testimonials-video-card testimonials-video-card--secondary"
          key={testimonial.id}
        >
          <button
            type="button"
            className="testimonials-video-card__button"
            onClick={() => setSelectedVideo(testimonial)}
            aria-label={`Assistir ao depoimento de ${testimonial.name}`}
          >
            <span className="testimonials-video-card__placeholder" />

            {testimonial.poster && (
              <img
                src={testimonial.poster}
                alt=""
                className="testimonials-video-card__poster"
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}

            <span className="testimonials-video-card__overlay" />

            <span className="testimonials-video-card__play">
              <FaPlay aria-hidden="true" />
            </span>

            <span className="testimonials-video-card__information">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.service}</span>
            </span>
          </button>
        </article>
      ))}
    </div>
  )}
</div>
          </div>
        </section>
<section
  className="testimonials-impact testimonials-reveal"
  ref={addRevealRef}
  aria-labelledby="testimonials-impact-title"
>
  <div className="testimonials-impact__container">
    <span className="testimonials-impact__eyebrow">
      Confiança construída atendimento após atendimento
    </span>

    <h2
  className="testimonials-impact__title"
  id="testimonials-impact-title"
>
  <span className="testimonials-impact__title-intro">
    Mais de
  </span>

  <strong className="testimonials-impact__number">
    1.000
  </strong>

  <span className="testimonials-impact__title-main">
    mulheres já confiaram na Suzana Carv.
  </span>
</h2>

    <p className="testimonials-impact__description">
      Cada história representa uma experiência única, conduzida com escuta,
      técnica e respeito à beleza natural.
    </p>

    <span className="testimonials-impact__signature" aria-hidden="true">
      Naturalidade • Elegância • Precisão
    </span>
  </div>
</section>
        <section
          className="testimonials-cta testimonials-reveal"
          ref={addRevealRef}
        >
          <div className="testimonials-cta__container">
            <div className="testimonials-cta__content">
              <span className="testimonials-cta__badge">Agora é sua vez</span>

              <h2 className="testimonials-cta__title">
                Viva uma experiência pensada para valorizar o seu olhar
              </h2>

              <p className="testimonials-cta__description">
                Converse diretamente com a Suzana e descubra o procedimento
                ideal para suas sobrancelhas.
              </p>
            </div>

            <div className="testimonials-cta__actions">
              <a
                href="https://wa.me/5521993471144?text=Olá! Vi o depoimento no site da Suzana Carv e gostaria de agendar um horário."
                target="_blank"
                rel="noopener noreferrer"
                className="testimonials-cta__button testimonials-cta__button--whatsapp"
              >
                <span className="testimonials-cta__button-icon">
                  <FaWhatsapp aria-hidden="true" />
                </span>

                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/suzanacarvalho_beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="testimonials-cta__button testimonials-cta__button--instagram"
              >
                <FaInstagram aria-hidden="true" />

                <span>Ver Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {selectedVideo && (
        <div
          className="testimonials-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Depoimento em vídeo"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="testimonials-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="testimonials-modal__close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Fechar vídeo"
            >
              <FaXmark aria-hidden="true" />
            </button>

            <video
              className="testimonials-modal__video"
              src={selectedVideo.videoSrc}
              poster={selectedVideo.poster}
              controls
              autoPlay
              playsInline
            />

            <div className="testimonials-modal__information">
              <strong>{selectedVideo.name}</strong>
              <span>{selectedVideo.service}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Testimonials;
