import React, { useState } from 'react';
import WaterDropLoader from './components/WaterDropLoader';
import { motion, AnimatePresence } from 'framer-motion';
import './App.scss';

// Placeholder sections - will be replaced by actual components
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <WaterDropLoader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div
            className="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
          </motion.div>

          <footer className="site-footer">
            <div className="footer-content">
              <p>&copy; Todos os direitos reservados 2026</p>
              <p>Desenvolvido por Jefferson David</p>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
