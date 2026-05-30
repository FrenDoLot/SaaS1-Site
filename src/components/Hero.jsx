import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <div className="badge">
          <MessageCircle size={16} />
          Telegram CRM для малого бизнеса
        </div>

        <h1>Получайте заявки и клиентов прямо в Telegram</h1>

        <p>
          UvedZayava помогает бизнесу не терять обращения: клиент открывает
          ссылку, заполняет короткую анкету, а владелец сразу получает заявку.
        </p>

        <div className="heroActions">
          <a className="primaryButton" href="https://t.me/UvedZayava1_bot" target="_blank">
            Попробовать <ArrowRight size={18} />
          </a>

          <a className="secondaryButton" href="#how">
            Как работает
          </a>
        </div>
      </div>

      <div className="heroCard">
        <div className="phoneMockup">
          <div className="chatMessage bot">
            Здравствуйте! 👋
          </div>

          <div className="chatMessage bot">
            Как вас зовут?
          </div>

          <div className="chatMessage client">
            Анна
          </div>

          <div className="chatMessage bot">
            Укажите телефон или Telegram
          </div>

          <div className="chatMessage client">
            +7 900 000-00-00
          </div>

          <div className="leadCard">
            <strong>🔔 Новая заявка</strong>
            <span>👤 Имя: Анна</span>
            <span>📞 Контакт: +7 900 000-00-00</span>
            <span>💬 Комментарий: Хочу консультацию</span>
          </div>
        </div>
      </div>
    </section>
  );
}