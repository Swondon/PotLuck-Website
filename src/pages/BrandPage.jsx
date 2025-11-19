import Navbar from '../components/Navbar';
import BrandHero from '../components/BrandHero';
import BrandContent from '../components/BrandContent';
import FeaturesCTA from '../components/FeaturesCTA';

export default function BrandPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <BrandHero />
      <BrandContent />
      <FeaturesCTA />
    </div>
  );
}