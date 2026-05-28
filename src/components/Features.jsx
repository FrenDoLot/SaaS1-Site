import { features } from "../data/siteData.js";
export default function Features() {
  return <section className="section" id="features"><div className="sectionHeader"><span className="sectionLabel">Возможности</span><h2>Всё нужное для первых заявок</h2><p>Без перегруза, сложной CRM и лишних функций.</p></div><div className="grid">{features.map((item) => <article className="featureCard" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>;
}
