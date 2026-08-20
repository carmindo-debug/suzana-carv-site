import "./Stats.css";

import {
  FaHeart,
  FaStar,
  FaUserCheck,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const stats = [
  {
    id: 1,
    value: "+1.000",
    label: "Atendimentos realizados",
    description: "Experiências conduzidas com cuidado e atenção aos detalhes.",
    icon: FaUserCheck,
  },
  {
    id: 2,
    value: "+3",
    label: "Anos de experiência",
    description: "Aperfeiçoamento contínuo em técnicas de beleza e expressão.",
    icon: FaWandMagicSparkles,
  },
  {
    id: 3,
    value: "5★",
    label: "Cuidado em cada etapa",
    description: "Atendimento pensado para proporcionar segurança e confiança.",
    icon: FaStar,
  },
  {
    id: 4,
    value: "100%",
    label: "Atendimento personalizado",
    description: "Cada procedimento é planejado de acordo com cada cliente.",
    icon: FaHeart,
  },
];

function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="stats__container">
        <header className="stats__header">
          <span className="stats__eyebrow">
            Confiança construída na prática
          </span>

          <h2 id="stats-title" className="stats__title">
            Resultados que refletem experiência, cuidado e dedicação
          </h2>

          <p className="stats__description">
            Cada número representa histórias reais, atendimentos personalizados
            e o compromisso de valorizar a beleza natural de cada cliente.
          </p>
        </header>

        <div className="stats__grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="stats__card" key={stat.id}>
                <span className="stats__icon" aria-hidden="true">
                  <Icon />
                </span>

                <strong className="stats__value">{stat.value}</strong>

                <h3 className="stats__label">{stat.label}</h3>

                <p className="stats__card-description">{stat.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
