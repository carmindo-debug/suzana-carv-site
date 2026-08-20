import "./Services.css";

import designSobrancelhas from "@/assets/images/services/design-sobrancelhas.jpeg";
import browLamination from "@/assets/images/services/brow-lamination.jpeg";
import carvBrowsHydragloss from "@/assets/images/services/carv-brows-hydragloss-labial.jpeg";
import descoloracaoSobrancelhas from "@/assets/images/services/descoloracao-sobrancelhas.jpeg";
import designColoracao from "@/assets/images/services/design-coloracao.jpeg";


import { FaArrowRight } from "react-icons/fa";

function Services() {
  const services = [
    {
      number: "01",
      image: designSobrancelhas,
      title: "Design de Sobrancelhas",
      description:
        "Design personalizado para valorizar sua expressão e manter a naturalidade.",
    },
    {
      number: "02",
      image: browLamination,
      title: "Brow Lamination",
      className: "service-image--brow",
      description:
        "Técnica que proporciona sobrancelhas alinhadas, sofisticadas e naturais.",
    },
    {
      number: "03",
      image: carvBrowsHydragloss,
      title: "Carv Brows + Hydragloss Labial",
      description:
        "Combinação de técnicas para realçar sobrancelhas e lábios com elegância.",
    },
    {
      number: "04",
      image: descoloracaoSobrancelhas,
      title: "Descoloração de Sobrancelhas",
      description:
        "Técnica que cria harmonia visual e um resultado moderno e sofisticado.",
    },
    {
      number: "05",
      image: designColoracao,
      title: "Design com Coloração",
      className: "service-image--coloracao",
      description:
        "Definição e coloração personalizada para destacar sua beleza natural.",
    },
  ];

  return (
    <section id="servicos" className="services">
      <div className="services__container">
        <div className="services__header">
          <span className="services__badge">Nossos Serviços</span>

          <h2 className="services__title">
            Técnicas que valorizam sua beleza natural
          </h2>

          <p className="services__description">
            Procedimentos personalizados para destacar sua expressão com
            elegância, cuidado e naturalidade.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-card__image">
                <img
                  src={service.image}
                  alt={service.title}
                  className={service.className}
                />
              </div>

              <div className="service-card__content">
                <span className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="/contato">
                  Saiba mais
                  <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
