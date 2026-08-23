import { useEffect, useRef, useState } from "react";
import {
  FaCommentDots,
  FaPaperPlane,
  FaStar,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

import "./Suzy.css";

const WHATSAPP_URL = "https://wa.me/5521993471144";

const PROCEDURES = [
  "Design de Sobrancelhas",
  "Brow Lamination",
  "Carv Brows + Hydragloss Labial",
  "Descoloração de Sobrancelhas",
  "Design com Coloração",
];

const INITIAL_MESSAGE = {
  id: 1,
  sender: "assistant",
  text:
    "Olá! Eu sou a Suzy, assistente virtual da Suzana Carv. ✨\n\n" +
    "Posso ajudar você a conhecer nossos procedimentos, tirar dúvidas e preparar seu atendimento. Como posso ajudar?",
};

function Suzy() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState(null);
  const [bookingData, setBookingData] = useState({
    firstName: "",
    procedure: "",
  });

  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);
  const messageIdRef = useRef(1);

  const createMessage = (sender, text, extra = {}) => {
    messageIdRef.current += 1;

    return {
      id: messageIdRef.current,
      sender,
      text,
      ...extra,
    };
  };

  const addAssistantMessage = (text, extra = {}) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      createMessage("assistant", text, extra),
    ]);
  };

 useEffect(() => {
  const supportsHover = window.matchMedia("(hover: hover)").matches;

  if (isOpen && supportsHover) {
    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }
}, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleQuickAction = (action) => {
    if (isLoading) {
      return;
    }

    if (action === "procedures") {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("user", "Conhecer os procedimentos"),
        createMessage(
          "assistant",
          "A Suzana oferece cinco procedimentos:\n\n" +
            "1. Design de Sobrancelhas\n" +
            "2. Brow Lamination\n" +
            "3. Carv Brows + Hydragloss Labial\n" +
            "4. Descoloração de Sobrancelhas\n" +
            "5. Design com Coloração\n\n" +
            "Se quiser, você pode escrever o nome de um procedimento para saber mais.",
        ),
      ]);

      return;
    }

    if (action === "question") {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("user", "Tirar uma dúvida"),
        createMessage(
          "assistant",
          "Claro! Escreva sua dúvida sobre os procedimentos ou o atendimento da Suzana.",
        ),
      ]);

      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return;
    }

    if (action === "location") {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("user", "Localização e horários"),
        createMessage(
          "assistant",
          "A sala fica na Rua Venâncio de Oliveira dos Santos, 57, Sala 112, Vilar dos Teles, São João de Meriti - RJ.\n\n" +
            "O atendimento acontece de terça-feira a sábado, das 9h às 19h, exclusivamente com horário marcado.",
        ),
      ]);

      return;
    }

    if (action === "booking") {
      setBookingData({
        firstName: "",
        procedure: "",
      });
      setBookingStep("name");

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("user", "Agendar atendimento"),
        createMessage(
          "assistant",
          "Vamos preparar sua mensagem para o WhatsApp. Qual é o seu primeiro nome?",
        ),
      ]);

      window.setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return;
    }

    if (action === "whatsapp") {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    }
  };

  const handleProcedureSelection = (procedure) => {
    setBookingData((currentData) => ({
      ...currentData,
      procedure,
    }));
    setBookingStep("period");

    setMessages((currentMessages) => [
      ...currentMessages,
      createMessage("user", procedure),
      createMessage(
        "assistant",
        "Qual dia ou período você prefere? Por exemplo: terça-feira à tarde.",
      ),
    ]);

    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = input.trim();

    if (!message || isLoading) {
      return;
    }

    setInput("");

    setMessages((currentMessages) => [
      ...currentMessages,
      createMessage("user", message),
    ]);

    if (bookingStep === "name") {
      const firstName = message.split(/\s+/)[0].slice(0, 40);

      setBookingData((currentData) => ({
        ...currentData,
        firstName,
      }));
      setBookingStep("procedure");

      addAssistantMessage(
        `Prazer, ${firstName}! Qual procedimento você deseja realizar?`,
      );

      return;
    }

    if (bookingStep === "period") {
      const whatsappMessage =
        `Olá! Meu nome é ${bookingData.firstName}. ` +
        `Vim pelo site da Suzana Carv e tenho interesse em ` +
        `${bookingData.procedure}. Minha preferência é ${message}. ` +
        "Gostaria de consultar a disponibilidade.";

      const bookingWhatsappUrl =
        `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`;

      setBookingStep(null);

      addAssistantMessage(
        "Sua mensagem está pronta. Toque no botão abaixo para abrir o WhatsApp e confirmar o envio. A Suzy não envia mensagens automaticamente.",
        {
          whatsappUrl: bookingWhatsappUrl,
        },
      );

      return;
    }

    setIsLoading(true);

    try {
      const apiResponse = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(data.error);
      }

      addAssistantMessage(data.reply);
    } catch {
      addAssistantMessage(
        "Não consegui responder agora. Você pode tentar novamente ou falar diretamente com a Suzana pelo WhatsApp.",
        {
          whatsappUrl: WHATSAPP_URL,
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="suzy">
      {isOpen && (
        <section
          className="suzy__panel"
          role="dialog"
          aria-label="Conversa com a assistente virtual Suzy"
        >
          <header className="suzy__header">
            <div className="suzy__identity">
              <span className="suzy__avatar" aria-hidden="true">
                <FaCommentDots />
                <FaStar className="suzy__avatar-sparkle" />
              </span>

              <div>
                <strong>Suzy</strong>
                <span>Assistente virtual</span>
              </div>
            </div>

            <button
              type="button"
              className="suzy__close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar assistente virtual"
            >
              <FaXmark aria-hidden="true" />
            </button>
          </header>

          <div className="suzy__messages" aria-live="polite">
            {messages.map((message) => (
              <div
                className={`suzy__message suzy__message--${message.sender}`}
                key={message.id}
              >
                <p>{message.text}</p>

                {message.whatsappUrl && (
                  <a
                    href={message.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="suzy__whatsapp-link"
                  >
                    <FaWhatsapp aria-hidden="true" />
                    Abrir WhatsApp
                  </a>
                )}
              </div>
            ))}

            {bookingStep === "procedure" && (
              <div
                className="suzy__procedure-options"
                aria-label="Escolha um procedimento"
              >
                {PROCEDURES.map((procedure) => (
                  <button
                    type="button"
                    key={procedure}
                    onClick={() => handleProcedureSelection(procedure)}
                  >
                    {procedure}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div
                className="suzy__message suzy__message--assistant suzy__typing"
                aria-label="Suzy está digitando"
              >
                <span />
                <span />
                <span />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {!bookingStep && (
            <div
              className="suzy__quick-actions"
              aria-label="Opções rápidas da Suzy"
            >
              <button
                type="button"
                onClick={() => handleQuickAction("procedures")}
              >
                Conhecer os procedimentos
              </button>

              <button
                type="button"
                onClick={() => handleQuickAction("question")}
              >
                Tirar uma dúvida
              </button>

              <button
                type="button"
                onClick={() => handleQuickAction("location")}
              >
                Localização e horários
              </button>

              <button
                type="button"
                onClick={() => handleQuickAction("booking")}
              >
                Agendar atendimento
              </button>

              <button
                type="button"
                onClick={() => handleQuickAction("whatsapp")}
              >
                Falar pelo WhatsApp
              </button>
            </div>
          )}

          <form className="suzy__form" onSubmit={handleSubmit}>
            <label htmlFor="suzy-message" className="suzy__sr-only">
              Digite sua mensagem
            </label>

            <input
              ref={inputRef}
              id="suzy-message"
              type="text"
              value={input}
              maxLength={500}
              onChange={(event) => setInput(event.target.value)}
              placeholder={
                bookingStep === "name"
                  ? "Digite seu primeiro nome"
                  : bookingStep === "period"
                    ? "Digite o dia ou período"
                    : "Escreva sua mensagem"
              }
              disabled={isLoading || bookingStep === "procedure"}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={
                !input.trim() ||
                isLoading ||
                bookingStep === "procedure"
              }
              aria-label="Enviar mensagem"
            >
              <FaPaperPlane aria-hidden="true" />
            </button>
          </form>

          <p className="suzy__privacy">
            Não compartilhe dados pessoais, bancários ou informações de saúde.
          </p>
        </section>
      )}

      {!isOpen && (
        <button
          type="button"
          className="suzy__launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir assistente virtual Suzy"
        >
          <span className="suzy__launcher-icon" aria-hidden="true">
            <FaCommentDots />
            <FaStar/>
          </span>

          <span>Suzy</span>
        </button>
      )}
    </div>
  );
}

export default Suzy;