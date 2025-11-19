import Navbar from '../components/Navbar';
import ReferFriendHero from '../components/ReferFriendHero';
import ReferFriendContent from '../components/ReferFriendContent';
import FeaturesCTA from '../components/FeaturesCTA';

export default function ReferFriendPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <ReferFriendHero />
      <ReferFriendContent />
      <FeaturesCTA />
    </div>
  );
}