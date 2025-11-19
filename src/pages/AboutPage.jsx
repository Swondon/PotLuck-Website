import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import FeaturesCTA from '../components/FeaturesCTA';

export default function AboutPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <FeaturesCTA />
    </div>
  );
}