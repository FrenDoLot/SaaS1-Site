const steps = ["Владелец получает свою ссылку", "Клиент открывает Telegram-бота", "Оставляет заявку и контакт", "Владелец получает уведомление"];
export default function HowItWorks() {
  return <section className="section" id="how"><div className="sectionHeader"><span className="sectionLabel">Процесс</span><h2>Как это работает</h2></div><div className="steps">{steps.map((step, index) => <div className="step" key={step}><span>{index + 1}</span><p>{step}</p></div>)}</div></section>;
}
