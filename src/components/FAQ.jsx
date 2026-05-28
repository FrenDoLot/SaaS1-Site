import { faq } from "../data/siteData.js";
export default function FAQ() {
  return <section className="section" id="faq"><div className="sectionHeader"><span className="sectionLabel">FAQ</span><h2>Частые вопросы</h2></div><div className="faqList">{faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>;
}
