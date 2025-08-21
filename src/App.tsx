import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import Navigation from './components/Navigation/Navigation';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Home from './pages/Home/Home';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Play from './pages/Play/Play';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// Hooks
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <ThemeToggle />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-study/:id" element={<CaseStudy />} />
              <Route path="/play" element={<Play />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
