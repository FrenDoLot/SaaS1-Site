export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        <img
          src="/logotip.jpg"
          alt="logo"
          className="logoImage"
        />

        UvedZayava
      </a>

      <nav className="nav">
        <a href="#features">Возможности</a>
        <a href="#pricing">Цена</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a
        className="headerButton"
        href="https://t.me/UvedZayava1_bot"
        target="_blank"
      >
        Открыть бота
      </a>
    </header>
  );
}