import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProblemSolution from "./components/ProblemSolution.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import Niches from "./components/Niches.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Features />
        <Niches />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
