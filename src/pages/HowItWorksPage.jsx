import Navbar from '../components/Navbar';
import HowItWorksHero from '../components/HowItWorksHero';
import HowItWorksSteps from '../components/HowItWorksSteps';
import FeaturesCTA from '../components/FeaturesCTA';

export default function HowItWorksPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <HowItWorksHero />
      <HowItWorksSteps />
      <FeaturesCTA />
    </div>
  );
}