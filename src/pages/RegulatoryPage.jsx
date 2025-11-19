import Navbar from '../components/Navbar';
import RegulatoryHero from '../components/RegulatoryHero';
import RegulatoryContent from '../components/RegulatoryContent';
import FeaturesCTA from '../components/FeaturesCTA';

export default function RegulatoryPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <RegulatoryHero />
      <RegulatoryContent />
      <FeaturesCTA />
    </div>
  );
}