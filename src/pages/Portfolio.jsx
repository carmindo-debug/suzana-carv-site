import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaMaximize,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

import portfolio00 from "../assets/portfolio/portfolio-00.png";
import portfolio01 from "../assets/portfolio/portfolio-01.png";
import portfolio02 from "../assets/portfolio/portfolio-02.png";
import portfolio03 from "../assets/portfolio/portfolio-03.png";
import portfolio04 from "../assets/portfolio/portfolio-04.png";
import portfolio05 from "../assets/portfolio/portfolio-05.png";
import portfolio06 from "../assets/portfolio/portfolio-06.png";
import portfolio07 from "../assets/portfolio/portfolio-07.png";
import portfolio08 from "../assets/portfolio/portfolio-08.png";
import portfolio09 from "../assets/portfolio/portfolio-09.png";
import portfolio10 from "../assets/portfolio/portfolio-10.png";
import Stats from "@/components/Stats/Stats";
import "./Portfolio.css";
import profissional01 from "@/assets/images/portfolio/profissional-01.jpeg";
/* ========================================
   ANTES E DEPOIS — CAPAS
======================================== */

import beforeAfter01Cover from "@/assets/portfolio/before-after/antes-depois-01-capa.webp";
import beforeAfter02Cover from "@/assets/portfolio/before-after/antes-depois-02-capa.webp";
import beforeAfter03Cover from "@/assets/portfolio/before-after/antes-depois-03-capa.webp";
import beforeAfter04Cover from "@/assets/portfolio/before-after/antes-depois-04-capa.webp";
import beforeAfter05Cover from "@/assets/portfolio/before-after/antes-depois-05-capa.webp";
import beforeAfter06Cover from "@/assets/portfolio/before-after/antes-depois-06-capa.webp";

/* ========================================
   ANTES E DEPOIS — VÍDEOS
======================================== */

import beforeAfter01Video from "@/assets/portfolio/before-after/Antes-Depois-01.mp4";
import beforeAfter02Video from "@/assets/portfolio/before-after/Antes-Depois-02.mp4";
import beforeAfter03Video from "@/assets/portfolio/before-after/Antes-Depois-03.mp4";
import beforeAfter04Video from "@/assets/portfolio/before-after/Antes-Depois-04.mp4";
import beforeAfter05Video from "@/assets/portfolio/before-after/Antes-Depois-05.mp4";
import beforeAfter06Video from "@/assets/portfolio/before-after/Antes-Depois-06.mp4";
const portfolioItems = [
  {
    id: 0,
    title: "Brow Lamination",
    category: "lamination",
    categoryLabel: "Brow Lamination",
    image: portfolio00,
    alt: "Resultado de procedimento de Brow Lamination",
    description:
      "Brow Lamination respeitando as características e necessidades de cada cliente.",
  },
  {
    id: 1,
    title: "Carv Brows",
    category: "reconstrucao",
    categoryLabel: "Reconstrução",
    image: portfolio01,
    alt: "Resultado de reconstrução de sobrancelhas realizado por Suzana Carv",
    description:
      "Reconstrução personalizada para recuperar o formato, preencher áreas com falhas e preservar a naturalidade das sobrancelhas.",
  },
  {
    id: 2,
    title: "Design + Coloração",
    category: "design",
    categoryLabel: "Design",
    image: portfolio02,
    alt: "Resultado de design de sobrancelhas com coloração",
    description:
      "Design personalizado combinado à coloração para definir o formato e realçar os fios com equilíbrio e naturalidade.",
  },
  {
    id: 3,
    title: "Brow Lamination",
    category: "lamination",
    categoryLabel: "Brow Lamination",
    image: portfolio03,
    alt: "Resultado de procedimento de Brow Lamination",
    description:
      "Procedimento que alinha e modela os fios, proporcionando sobrancelhas mais organizadas, definidas e visualmente preenchidas.",
  },
  {
    id: 4,
    title: "Brow Lamination",
    category: "lamination",
    categoryLabel: "Brow Lamination",
    image: portfolio04,
    alt: "Resultado de Brow Lamination que remodela e realça as sobrancelhas",
    description:
      "Brow Lamination desenvolvido para remodelar os fios e valorizar o formato natural das sobrancelhas.",
  },
  {
    id: 5,
    title: "Design Personalizado + Coloração",
    category: "design",
    categoryLabel: "Design",
    image: portfolio05,
    alt: "Resultado de design personalizado com coloração",
    description:
      "Design personalizado com coloração para destacar o olhar sem perder a suavidade e a identidade natural da cliente.",
  },
  {
    id: 6,
    title: "Alinhamento dos Fios",
    category: "lamination",
    categoryLabel: "Brow Lamination",
    image: portfolio06,
    alt: "Resultado de alinhamento dos fios das sobrancelhas",
    description:
      "Alinhamento dos fios para criar um acabamento organizado, harmonioso e adequado ao formato do rosto.",
  },
  {
    id: 7,
    title: "Técnica Híbrida",
    category: "design",
    categoryLabel: "Design",
    image: portfolio07,
    alt: "Resultado de sobrancelhas definidas, preenchidas e harmonizadas",
    description:
      "Reconstrução estratégica das sobrancelhas para melhorar o formato, corrigir assimetrias e valorizar o olhar.",
  },
  {
    id: 8,
    title: "Carv Brows",
    category: "reconstrucao",
    categoryLabel: "Reconstrução",
    image: portfolio08,
    alt: "Resultado da técnica de reconstrução Carv Brows",
    description:
      "Reconstrução estratégica das sobrancelhas para melhorar o formato, corrigir assimetrias e valorizar o olhar.",
  },
  {
    id: 9,
    title: "Design + Coloração",
    category: "design",
    categoryLabel: "Design",
    image: portfolio09,
    alt: "Resultado de design de sobrancelhas com coloração",
    description:
      "Design com coloração para intensificar os fios, melhorar a definição e manter um resultado elegante.",
  },
  {
    id: 10,
    title: "Design Personalizado",
    category: "design",
    categoryLabel: "Design",
    image: portfolio10,
    alt: "Resultado de design personalizado de sobrancelhas",
    description:
      "Design personalizado, respeitando as características e necessidades de cada cliente.",
  },
];
const beforeAfterItems = [
  {
    id: 4,
    featured: true,
    cover: beforeAfter04Cover,
    video: beforeAfter04Video,
    eyebrow: "Transformação em destaque",
    title: "Naturalidade que transforma o olhar",
    description:
      "Um resultado construído para valorizar a expressão sem perder as características naturais da cliente.",
  },

  {
    id: 6,
    featured: false,
    cover: beforeAfter06Cover,
    video: beforeAfter06Video,
    eyebrow: "Resultado real",
    title: "Equilíbrio e definição",
    description:
      "Precisão no desenho para realçar o olhar com leveza e harmonia.",
  },

  {
    id: 3,
    featured: false,
    cover: beforeAfter03Cover,
    video: beforeAfter03Video,
    eyebrow: "Resultado real",
    title: "Design personalizado",
    description:
      "Uma transformação pensada a partir das proporções e características individuais.",
  },

  {
    id: 2,
    featured: false,
    cover: beforeAfter02Cover,
    video: beforeAfter02Video,
    eyebrow: "Resultado real",
    title: "Beleza natural valorizada",
    description:
      "Detalhes sutis que fazem diferença na expressão e no equilíbrio do olhar.",
  },

  {
    id: 1,
    featured: false,
    cover: beforeAfter01Cover,
    video: beforeAfter01Video,
    eyebrow: "Resultado real",
    title: "Precisão em cada detalhe",
    description:
      "Técnica aplicada para criar definição mantendo a identidade da cliente.",
  },

  {
    id: 5,
    featured: false,
    cover: beforeAfter05Cover,
    video: beforeAfter05Video,
    eyebrow: "Resultado real",
    title: "Transformação com naturalidade",
    description:
      "Um resultado que combina desenho, equilíbrio e acabamento cuidadosamente planejado.",
  },
];
const SWIPE_THRESHOLD = 55;

const filters = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "design",
    label: "Design",
  },
  // {
  //   id: "henna",
  //   label: "Henna",
  // },
  {
    id: "lamination",
    label: "Brow Lamination",
  },
  {
    id: "reconstrucao",
    label: "Reconstrução",
  },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isImageChanging, setIsImageChanging] = useState(false);
  const galleryRef = useRef(null);
  const touchStartXRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [selectedTransformation, setSelectedTransformation] = useState(null);
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openTransformationModal = (item) => {
    setSelectedTransformation(item);
    document.body.style.overflow = "hidden";
  };

  const closeTransformationModal = () => {
    setSelectedTransformation(null);
    document.body.style.overflow = "";
  };
  const showPreviousTransformation = () => {
    setSelectedTransformation((currentTransformation) => {
      const currentIndex = beforeAfterItems.findIndex(
        (item) => item.id === currentTransformation?.id,
      );

      if (currentIndex <= 0) {
        return beforeAfterItems[beforeAfterItems.length - 1];
      }

      return beforeAfterItems[currentIndex - 1];
    });
  };

  const showNextTransformation = () => {
    setSelectedTransformation((currentTransformation) => {
      const currentIndex = beforeAfterItems.findIndex(
        (item) => item.id === currentTransformation?.id,
      );

      if (currentIndex === -1 || currentIndex === beforeAfterItems.length - 1) {
        return beforeAfterItems[0];
      }

      return beforeAfterItems[currentIndex + 1];
    });
  };
  useEffect(() => {
    if (!selectedTransformation) return;

    const handleModalKeyboard = (event) => {
      if (event.key === "Escape") {
        closeTransformationModal();
      }

      if (event.key === "ArrowLeft") {
        showPreviousTransformation();
      }

      if (event.key === "ArrowRight") {
        showNextTransformation();
      }
    };

    window.addEventListener("keydown", handleModalKeyboard);

    return () => {
      window.removeEventListener("keydown", handleModalKeyboard);
    };
  }, [selectedTransformation]);

  const selectedItemIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const openModal = (item) => {
    setSelectedItem(item);
    setIsImageChanging(false);
  };

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    setIsImageChanging(false);
  }, []);

  const changeModalItem = useCallback(
    (direction) => {
      if (filteredItems.length === 0) {
        return;
      }

      setIsImageChanging(true);

      window.setTimeout(() => {
        setSelectedItem((currentItem) => {
          const currentIndex = filteredItems.findIndex(
            (item) => item.id === currentItem?.id,
          );

          if (direction === "previous") {
            return currentIndex <= 0
              ? filteredItems[filteredItems.length - 1]
              : filteredItems[currentIndex - 1];
          }

          return currentIndex === -1 ||
            currentIndex === filteredItems.length - 1
            ? filteredItems[0]
            : filteredItems[currentIndex + 1];
        });
      }, 130);
    },
    [filteredItems],
  );

  const showPreviousItem = useCallback(() => {
    changeModalItem("previous");
  }, [changeModalItem]);

  const showNextItem = useCallback(() => {
    changeModalItem("next");
  }, [changeModalItem]);

  const handleModalImageLoad = () => {
    setIsImageChanging(false);
  };
  useEffect(() => {
    if (!selectedItem) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    const previouslyFocusedElement = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPreviousItem();
      }

      if (event.key === "ArrowRight") {
        showNextItem();
      }

      if (event.key === "Tab") {
        const modal = document.querySelector(".portfolio-modal__content");
        const focusableElements = modal?.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );

        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus?.();
    };
  }, [selectedItem, closeModal, showPreviousItem, showNextItem]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setSelectedItem(null);
  };
  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX;

    if (typeof touchEndX !== "number") {
      touchStartXRef.current = null;
      return;
    }

    const distance = touchEndX - touchStartXRef.current;

    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      if (distance > 0) {
        showPreviousItem();
      } else {
        showNextItem();
      }
    }

    touchStartXRef.current = null;
  };

  return (
    <>
      <main className="portfolio-page">
        <section className="portfolio-hero">
          <div className="portfolio-hero__container">
            <div className="portfolio-hero__content">
              <span className="portfolio-hero__eyebrow">
                Portfólio • Suzana Carv
              </span>

              <h1 className="portfolio-hero__title">
                Resultados que preservam a <span>essência de cada olhar.</span>
              </h1>

              <p className="portfolio-hero__description">
                Cada sobrancelha é pensada de forma única, respeitando os
                traços, a expressão e a beleza natural de cada cliente.
              </p>

              <div className="portfolio-hero__actions">
                <a
                  href="#portfolio-gallery"
                  className="portfolio-hero__button portfolio-hero__button--primary"
                >
                  <span>Ver transformações</span>

                  <FaArrowRight
                    className="portfolio-hero__button-arrow"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="https://wa.me/5521993471144?text=Olá! Vim pelo site da Suzana Carv e gostaria de agendar uma avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-hero__button portfolio-hero__button--secondary"
                >
                  <span className="portfolio-hero__button-icon-wrapper">
                    <FaWhatsapp aria-hidden="true" />
                  </span>

                  <span>Agendar avaliação</span>
                </a>
              </div>

              <div
                className="portfolio-hero__pillars"
                aria-label="Pilares do trabalho"
              >
                <span>Naturalidade</span>
                <span>Precisão</span>
                <span>Personalização</span>
              </div>
            </div>

            <div className="portfolio-hero__visual">
              <div className="portfolio-hero__shape" aria-hidden="true" />

              <figure className="portfolio-hero__figure">
                <img
                  src={profissional01}
                  alt="Suzana Carv em seu espaço profissional"
                  className="portfolio-hero__image"
                />

                <figcaption className="portfolio-hero__caption">
                  <div>
                    <span className="portfolio-hero__caption-label">
                      Resultados reais
                    </span>
                  </div>

                  <strong>Técnica, cuidado e naturalidade</strong>
                </figcaption>
              </figure>

              <div className="portfolio-hero__seal" aria-hidden="true">
                <strong>+1.000</strong>
                <span>atendimentos realizados</span>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-signature">
          <div className="portfolio-signature__container">
            <div className="portfolio-signature__intro">
              <span className="portfolio-signature__eyebrow">
                A essência do trabalho
              </span>

              <h2 className="portfolio-signature__title">
                Cada resultado começa antes do procedimento.
              </h2>

              <p className="portfolio-signature__description">
                O desenho é construído a partir da análise de cada rosto,
                respeitando proporções, características naturais e a identidade
                de cada cliente.
              </p>
            </div>

            <div className="portfolio-signature__pillars">
              <article className="portfolio-signature__pillar">
                <span className="portfolio-signature__number">01</span>

                <div>
                  <h3>Leitura individual</h3>

                  <p>
                    Cada rosto possui proporções, expressão e necessidades
                    próprias.
                  </p>
                </div>
              </article>

              <article className="portfolio-signature__pillar">
                <span className="portfolio-signature__number">02</span>

                <div>
                  <h3>Precisão no desenho</h3>

                  <p>
                    Técnica e equilíbrio orientam cada decisão durante o
                    procedimento.
                  </p>
                </div>
              </article>

              <article className="portfolio-signature__pillar">
                <span className="portfolio-signature__number">03</span>

                <div>
                  <h3>Naturalidade no resultado</h3>

                  <p>
                    O objetivo é valorizar o olhar sem apagar as características
                    de quem o possui.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section
          className="portfolio-transformations"
          id="portfolio-gallery"
          aria-labelledby="portfolio-transformations-title"
        >
          <div className="portfolio-transformations__container">
            <header className="portfolio-transformations__header">
              <span className="portfolio-transformations__eyebrow">
                Antes e depois
              </span>

              <h2
                className="portfolio-transformations__title"
                id="portfolio-transformations-title"
              >
                Transformações reais, preservando o que{" "}
                <span>cada olhar tem de único.</span>
              </h2>

              <p className="portfolio-transformations__description">
                Resultados construídos com técnica, análise individual e
                respeito às características naturais de cada cliente.
              </p>
            </header>

            {/* =====================================
        TRANSFORMAÇÃO PRINCIPAL
    ===================================== */}

            <article className="portfolio-transformation portfolio-transformation--featured">
              <div className="portfolio-transformation__media">
                <button
                  type="button"
                  className="portfolio-transformation__play-button"
                  onClick={() => openTransformationModal(beforeAfterItems[0])}
                  aria-label={`Assistir transformação: ${beforeAfterItems[0].title}`}
                >
                  <img
                    src={beforeAfterItems[0].cover}
                    alt=""
                    className="portfolio-transformation__cover"
                    decoding="async"
                  />

                  <span
                    className="portfolio-transformation__play"
                    aria-hidden="true"
                  >
                    ▶
                  </span>
                </button>

                <span className="portfolio-transformation__badge">
                  Transformação em destaque
                </span>
              </div>

              <div className="portfolio-transformation__content">
                <span className="portfolio-transformation__eyebrow">
                  Resultado real
                </span>

                <h3 className="portfolio-transformation__title">
                  {beforeAfterItems[0].title}
                </h3>

                <p className="portfolio-transformation__description">
                  {beforeAfterItems[0].description}
                </p>

                <div
                  className="portfolio-transformation__signature"
                  aria-hidden="true"
                >
                  <span>Antes</span>
                  <span className="portfolio-transformation__line" />
                  <span>Depois</span>
                </div>
              </div>
            </article>

            {/* =====================================
        TRANSFORMAÇÕES SECUNDÁRIAS
    ===================================== */}
          </div>
          <div className="portfolio-transformations__grid">
            {beforeAfterItems.slice(1).map((item, index) => (
              <article
                className="portfolio-transformation portfolio-transformation--secondary"
                key={item.id}
              >
                <div className="portfolio-transformation__media">
                  <button
                    type="button"
                    className="portfolio-transformation__play-button"
                    onClick={() => openTransformationModal(item)}
                    aria-label={`Assistir transformação: ${item.title}`}
                  >
                    <img
                      src={item.cover}
                      alt=""
                      className="portfolio-transformation__cover"
                      loading="lazy"
                      decoding="async"
                    />

                    <span
                      className="portfolio-transformation__play"
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                  </button>

                  <span className="portfolio-transformation__index">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>

                <div className="portfolio-transformation__content">
                  <span className="portfolio-transformation__eyebrow">
                    {item.eyebrow}
                  </span>

                  <h3 className="portfolio-transformation__title">
                    {item.title}
                  </h3>

                  <p className="portfolio-transformation__description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Stats />
        <section className="portfolio-cta">
          <div className="portfolio-cta__container">
            <div className="portfolio-cta__content">
              <span className="portfolio-cta__badge">Seu momento</span>

              <h2 className="portfolio-cta__title">
                Pronta para valorizar ainda mais o seu olhar?
              </h2>

              <p className="portfolio-cta__description">
                Fale diretamente com a Suzana e encontre o procedimento ideal
                para suas sobrancelhas.
              </p>
            </div>

            <div className="portfolio-cta__actions">
              <a
                href="https://wa.me/5521993471144?text=Olá! Vi o portfólio no site da Suzana Carv e gostaria de agendar um horário."
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-cta__button portfolio-cta__button--whatsapp"
              >
                <span className="portfolio-cta__button-icon">
                  <FaWhatsapp aria-hidden="true" />
                </span>

                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/suzanacarvalho_beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-cta__button portfolio-cta__button--instagram"
              >
                <FaInstagram aria-hidden="true" />

                <span>Ver Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      {selectedTransformation && (
        <div
          className="portfolio-transformation-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Vídeo: ${selectedTransformation.title}`}
          onClick={closeTransformationModal}
        >
          <div
            className="portfolio-transformation-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="portfolio-transformation-modal__close"
              onClick={closeTransformationModal}
              aria-label="Fechar vídeo"
            >
              <FaXmark aria-hidden="true" />
            </button>
            <button
              type="button"
              className="portfolio-transformation-modal__navigation portfolio-transformation-modal__navigation--previous"
              onClick={showPreviousTransformation}
              aria-label="Visualizar transformação anterior"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              className="portfolio-transformation-modal__navigation portfolio-transformation-modal__navigation--next"
              onClick={showNextTransformation}
              aria-label="Visualizar próxima transformação"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
            <video
              key={selectedTransformation.id}
              className="portfolio-transformation-modal__video"
              controls
              autoPlay
              playsInline
              poster={selectedTransformation.cover}
            >
              <source src={selectedTransformation.video} type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>

            <div className="portfolio-transformation-modal__information">
              <span>Resultado real • Suzana Carv</span>

              <h3>{selectedTransformation.title}</h3>

              <p>{selectedTransformation.description}</p>
            </div>
          </div>
        </div>
      )}
      {selectedItem && (
        <div
          className="portfolio-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          aria-describedby="portfolio-modal-description"
          onClick={closeModal}
        >
          <div
            className="portfolio-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="portfolio-modal__close"
              onClick={closeModal}
              aria-label="Fechar imagem ampliada"
            >
              <FaXmark aria-hidden="true" />
            </button>

            <div
              className="portfolio-modal__image-wrapper"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                className="portfolio-modal__navigation portfolio-modal__navigation--previous"
                onClick={showPreviousItem}
                aria-label="Visualizar resultado anterior"
              >
                <FaArrowLeft aria-hidden="true" />
              </button>

              <div
                className={`portfolio-modal__image-stage ${
                  isImageChanging
                    ? "portfolio-modal__image-stage--changing"
                    : ""
                }`}
              >
                <span
                  className="portfolio-modal__loader"
                  aria-hidden={!isImageChanging}
                />

                <img
                  key={selectedItem.id}
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  className="portfolio-modal__image"
                  onLoad={handleModalImageLoad}
                  decoding="async"
                />
              </div>

              <button
                type="button"
                className="portfolio-modal__navigation portfolio-modal__navigation--next"
                onClick={showNextItem}
                aria-label="Visualizar próximo resultado"
              >
                <FaArrowRight aria-hidden="true" />
              </button>

              <span
                className="portfolio-modal__counter"
                aria-label={`Imagem ${
                  selectedItemIndex + 1
                } de ${filteredItems.length}`}
              >
                {selectedItemIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <div className="portfolio-modal__information">
              <div className="portfolio-modal__text">
                <span className="portfolio-modal__eyebrow">
                  Resultado realizado por Suzana Carv
                </span>

                <h2
                  className="portfolio-modal__title"
                  id="portfolio-modal-title"
                >
                  {selectedItem.title}
                </h2>

                <p
                  className="portfolio-modal__description"
                  id="portfolio-modal-description"
                >
                  {selectedItem.description}
                </p>
              </div>

              <div className="portfolio-modal__signature">
                <span className="portfolio-modal__signature-line" />

                <span className="portfolio-modal__signature-text">
                  Sobrancelhas naturais que valorizam sua beleza
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;
