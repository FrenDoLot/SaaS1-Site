import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <div className="badge"><MessageCircle size={16} />Telegram CRM для малого бизнеса</div>
        <h1>Получайте заявки и клиентов прямо в Telegram</h1>
        <p>LeadNotifyBot помогает бизнесу не терять обращения: клиент открывает ссылку, оставляет заявку, а владелец сразу получает уведомление.</p>
        <div className="heroActions">
          <a className="primaryButton" href="https://t.me/UvedZayava1_bot" target="_blank">Попробовать <ArrowRight size={18} /></a>
          <a className="secondaryButton" href="#how">Как работает</a>
        </div>
      </div>
      <div className="heroCard"><div className="phoneMockup">
        <div className="chatMessage client">Здравствуйте! Хочу оставить заявку</div>
        <div className="chatMessage bot">Выберите услугу и оставьте контакт</div>
        <div className="leadCard"><strong>Новая заявка</strong><span>Имя: Анна</span><span>Телефон: +7 900 000-00-00</span><span>Услуга: Консультация</span></div>
      </div></div>
    </section>
  );
}
