import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingBar from 'react-top-loading-bar';

// Pages
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Locations from '../pages/Locations';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const MainContent = ({ onAddToCart }) => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProgress(30);
    
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <LoadingBar
        color="#FF4D4D"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={<Menu onAddToCart={onAddToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MainContent;
