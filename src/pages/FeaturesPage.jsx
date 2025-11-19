import { FaPlusSquare, FaUsers, FaShareAlt, FaHandshake, FaSync } from 'react-icons/fa';
import FeatureHero from '../components/FeatureHero';
import FeaturesCTA from '../components/FeaturesCTA';
import WhyPotluck from '../components/WhyPotluck';
import FeatureWheel from '../components/FeatureWheel';
import CompetitorMatrix from '../components/CompetitorMatrix';
import Navbar from '../components/Navbar';

const features = [
  {
    title: "Create Contracts",
    description: [
      "Pose any question and set the terms for your market.",
      "From sports and politics to inside jokes, if you can question it, you can market it.",
      "Invite your friends and let the predictions begin."
    ],
    icon: FaPlusSquare,
  },
  {
    title: "Join Contracts",
    description: [
      "Jump into public or private markets created by your friends.",
      "All positions are transparent within your group, creating a fun and social dynamic.",
      "Compete with friends and see who wins."
    ],
    icon: FaUsers,
  },
  {
    title: "Share & Track",
    description: [
      "Get a clear, real-time view of who’s involved and what positions they hold.",
      "Track contract progress as events unfold and share exciting outcomes with a single tap."
    ],
    icon: FaShareAlt,
  },
  {
    title: "Peer-to-Peer",
    description: [
      "Engage directly with your friends and peers with no intermediaries.",
      "Built on a foundation of trust, ensuring a fair and transparent experience for everyone."
    ],
    icon: FaHandshake,
  },
  {
    title: "Real-Time Updates",
    description: [
      "Never miss a beat with instant notifications.",
      "Stay informed as predictions are made, positions change, and results are finalized."
    ],
    icon: FaSync,
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <FeatureHero />
      <FeatureWheel features={features} />
      <WhyPotluck />
      <CompetitorMatrix />
      <FeaturesCTA />
    </div>
  );
}
