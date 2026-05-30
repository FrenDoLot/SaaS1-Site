export default function DemoVideo() {
  return (
    <section className="section">
      <div className="sectionHeader">
        <span className="sectionLabel">Демонстрация</span>

        <h2>Посмотрите, как работает UvedZayava</h2>

        <p>
          Клиент оставляет заявку через Telegram, а владелец мгновенно получает
          уведомление с контактами и данными клиента.
        </p>
      </div>

      <div className="videoWrapper">
        <video controls className="demoVideo">
          <source src="/demo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </section>
  );
}