import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import FeaturesCTA from '../components/FeaturesCTA';

export default function ContactPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <ContactHero />
      <FeaturesCTA />
    </div>
  );
}