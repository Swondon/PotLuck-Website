import Navbar from '../components/Navbar';
import UseCasesHero from '../components/UseCasesHero';
import UseCasesGrid from '../components/UseCasesGrid';
import FeaturedPots from '../components/FeaturedPots';
import FeaturesCTA from '../components/FeaturesCTA';

export default function UseCasesPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <UseCasesHero />
              <FeaturedPots />
      <UseCasesGrid />
      <FeaturesCTA />
    </div>
  );
}