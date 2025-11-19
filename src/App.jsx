import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import FeaturesPage from './pages/FeaturesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import UseCasesPage from './pages/UseCasesPage'
import FaqPage from './pages/FaqPage'
import RegulatoryPage from './pages/RegulatoryPage'
import ReferFriendPage from './pages/ReferFriendPage'
import AboutPage from './pages/AboutPage'
import PressPage from './pages/PressPage';
import BrandPage from './pages/BrandPage';
import ContactPage from './pages/ContactPage';
import PostLaunchPage from './pages/posts/PostLaunchPage';
import PostVisionPage from './pages/posts/PostVisionPage';
import NotFoundPage from './pages/NotFoundPage';





function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/regulatory" element={<RegulatoryPage />} />
        <Route path="/refer-a-friend" element={<ReferFriendPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/press/launch" element={<PostLaunchPage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/press/vision" element={<PostVisionPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
