export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="sectionHeader">
        <span className="sectionLabel">Тарифы</span>
        <h2>Выберите удобный вариант</h2>
        <p>Можно начать бесплатно на 3 дня и проверить, подходит ли сервис.</p>
      </div>

      <div className="pricingGrid">
        <div className="pricingCard">
          <span className="sectionLabel">Пробный период</span>
          <h2>3 дня</h2>
          <div className="price">Бесплатно</div>

          <ul>
            <li>Полный доступ к боту</li>
            <li>Персональная ссылка</li>
            <li>Приём заявок</li>
            <li>Уведомления в Telegram</li>
          </ul>
        </div>

        <div className="pricingCard">
          <span className="sectionLabel">Месяц</span>
          <h2>Стандарт</h2>
          <div className="price">399 ₽</div>

          <ul>
            <li>Полный доступ</li>
            <li>История заявок</li>
            <li>Поддержка</li>
            <li>Без ограничений</li>
          </ul>
        </div>

        <div className="pricingCard">
          <span className="sectionLabel">Год</span>
          <h2>Выгодно</h2>
          <div className="price">2999 ₽</div>

          <ul>
            <li>Все возможности тарифа “Месяц”</li>
            <li>Экономия 1789 ₽</li>
            <li>Приоритетные обновления</li>
            <li>Без ограничений</li>
          </ul>
        </div>
      </div>
    </section>
  );
}