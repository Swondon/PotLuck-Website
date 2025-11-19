import Navbar from '../components/Navbar';
import PressHero from '../components/PressHero';
import PressGrid from '../components/PressGrid';
import FeaturesCTA from '../components/FeaturesCTA';

export default function PressPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <PressHero />
      <PressGrid />
      <FeaturesCTA />
    </div>
  );
}