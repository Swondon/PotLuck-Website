import Navbar from '../components/Navbar';
import FaqHero from '../components/FaqHero';
import FaqAccordion from '../components/FaqAccordion';
import FeaturesCTA from '../components/FeaturesCTA';

export default function FaqPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <FaqHero />
      <FaqAccordion />
      <FeaturesCTA />
    </div>
  );
}