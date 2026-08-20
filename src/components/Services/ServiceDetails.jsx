import "./ServiceDetails.css";

import designSobrancelhas from "@/assets/images/services/design-sobrancelhas.jpeg";
import browLamination from "@/assets/images/services/brow-lamination.jpeg";
import carvBrowsHydragloss from "@/assets/images/services/carv-brows-hydragloss-labial.jpeg";
import descoloracaoSobrancelhas from "@/assets/images/services/descoloracao-sobrancelhas.jpeg";
import designColoracao from "@/assets/images/services/design-coloracao.jpeg";

import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

function ServiceDetails() {
  const services = [
    {
      image: designSobrancelhas,
      title: "Design de Sobrancelhas",
      description:
        "Um design personalizado criado a partir da análise da sua expressão facial, respeitando seus traços e valorizando a beleza natural.",
      benefits: [
        "Avaliação personalizada",
        "Harmonia facial",
        "Resultado natural",
      ],
    },

    {
      image: browLamination,
      title: "Brow Lamination",
      reverse: true,
      description:
        "Técnica que proporciona fios alinhados, aparência sofisticada e sobrancelhas com mais presença, mantendo um resultado elegante.",
      benefits: [
        "Fios mais alinhados",
        "Efeito sofisticado",
        "Visual moderno",
      ],
    },

    {
      image: carvBrowsHydragloss,
      title: "Carv Brows + Hydragloss Labial",
      description:
        "Uma combinação exclusiva para realçar sobrancelhas e lábios, proporcionando um cuidado completo para sua expressão.",
      benefits: [
        "Realce da beleza natural",
        "Combinação personalizada",
        "Experiência exclusiva",
      ],
    },

    {
      image: descoloracaoSobrancelhas,
      title: "Descoloração de Sobrancelhas",
      reverse: true,
      description:
        "Técnica indicada para criar harmonia visual, suavizar os fios e proporcionar um resultado moderno e sofisticado.",
      benefits: [
        "Mudança de tonalidade",
        "Harmonia estética",
        "Resultado personalizado",
      ],
    },

    {
      image: designColoracao,
      title: "Design com Coloração",
      description:
        "Procedimento que une definição e coloração personalizada para destacar o olhar com naturalidade.",
      benefits: [
        "Mais definição",
        "Coloração personalizada",
        "Acabamento profissional",
      ],
    },
  ];

  return (
    <section className="service-details">

      <div className="service-details__header">
        <span className="service-details__badge">
          Procedimentos
        </span>

        <h2>
          Escolha o procedimento ideal para você
        </h2>

        <p>
          Cada técnica foi desenvolvida para proporcionar um resultado elegante,
          respeitando sua identidade e valorizando sua beleza natural.
        </p>
      </div>


      <div className="service-details__list">

        {services.map((service, index) => (

          <article
            key={index}
            className={`service-detail ${
              service.reverse ? "service-detail--reverse" : ""
            }`}
          >

            <div className="service-detail__image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>


            <div className="service-detail__content">

              <h3>
                {service.title}
              </h3>


              <p>
                {service.description}
              </p>


              <ul>
                {service.benefits.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle />
                    {item}
                  </li>
                ))}
              </ul>


              <a
                href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20meu%20horário."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                Agendar este procedimento
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default ServiceDetails;