import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaCircleCheck, FaTriangleExclamation } from "react-icons/fa6";
import "./FormContato.css";

function FormContato() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Por favor, preencha os campos obrigatórios (Nome, Email e Mensagem)");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Inicializar EmailJS (precisa da public key)
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Enviar email
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("error");
      setErrorMessage(
        "Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato via WhatsApp."
      );
    }
  };

  return (
    <div className="form-contato">
      <div className="form-contato__container">
        <div className="form-contato__header">
          <h3 className="form-contato__title">Envie sua mensagem</h3>
          <p className="form-contato__subtitle">
            Responderemos assim que possível. Para agendamentos rápidos, use o WhatsApp.
          </p>
        </div>

        {status === "success" && (
          <div className="form-contato__alert form-contato__alert--success">
            <FaCircleCheck />
            <div>
              <strong>Mensagem enviada com sucesso!</strong>
              <p>Obrigada por entrar em contato. Responderemos em breve.</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="form-contato__alert form-contato__alert--error">
            <FaTriangleExclamation />
            <div>
              <strong>Erro ao enviar</strong>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        <form ref={form} onSubmit={handleSubmit} className="form-contato__form">
          <div className="form-contato__row">
            <div className="form-contato__group">
              <label htmlFor="name" className="form-contato__label">
                Nome <span className="form-contato__required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="form-contato__input"
                disabled={status === "loading"}
              />
            </div>

            <div className="form-contato__group">
              <label htmlFor="email" className="form-contato__label">
                Email <span className="form-contato__required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                required
                className="form-contato__input"
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className="form-contato__row">
            <div className="form-contato__group">
              <label htmlFor="phone" className="form-contato__label">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(21) 99999-9999"
                className="form-contato__input"
                disabled={status === "loading"}
              />
            </div>

            <div className="form-contato__group">
              <label htmlFor="subject" className="form-contato__label">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Ex: Dúvida sobre Brow Lamination"
                className="form-contato__input"
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className="form-contato__group">
            <label htmlFor="message" className="form-contato__label">
              Mensagem <span className="form-contato__required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos sobre sua dúvida ou o que você está buscando..."
              required
              rows="5"
              className="form-contato__textarea"
              disabled={status === "loading"}
            />
          </div>

          <button
            type="submit"
            className="form-contato__button"
            disabled={status === "loading"}
          >
            <span className="form-contato__button-icon">
              <FaPaperPlane />
            </span>
            <span>
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </span>
          </button>

          <p className="form-contato__note">
            💬 Prefere ser mais ágil? <a href="https://wa.me/5521993471144?text=Olá!%20Vim%20pelo%20site%20da%20Suzana%20Carv%20e%20gostaria%20de%20agendar%20um%20horário." target="_blank" rel="noopener noreferrer"><strong>Clique aqui para enviar via WhatsApp</strong></a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default FormContato;
