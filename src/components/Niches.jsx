import { niches } from "../data/siteData.js";
export default function Niches() {
  return <section className="section"><div className="sectionHeader"><span className="sectionLabel">Для кого</span><h2>Подходит малому бизнесу и услугам</h2></div><div className="tags">{niches.map((niche) => <span key={niche}>{niche}</span>)}</div></section>;
}
