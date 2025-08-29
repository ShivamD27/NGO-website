import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SchoolsPage from './pages/SchoolsPage';
import HostelsPage from './pages/HostelsPage';
import GalleryPage from './pages/GalleryPage';
import ELearningPage from './pages/ELearningPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import ScrollToTop from './components/ScrollToTop';
import SchoolDetailPage from './pages/SchoolDetailPage.jsx'; // ✅ Add this line



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <ScrollToTop /> 
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/schools/:slug" element={<SchoolDetailPage />} />

            <Route path="/hostels" element={<HostelsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/e-learning" element={<ELearningPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/administration" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
