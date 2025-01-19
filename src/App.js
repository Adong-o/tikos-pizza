import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import LoadingBar from 'react-top-loading-bar';

import theme from './theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Locations from './pages/Locations';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function App() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
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

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingBar
        color="#FF4D4D"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Navbar
            cartItemsCount={getTotalItems()}
            onCartClick={() => setIsCartOpen(true)}
          />
          
          <Box component="main" sx={{ flexGrow: 1 }}>
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
                    element={<Menu onAddToCart={handleAddToCart} />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/locations" element={<Locations />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Box>

          <Cart
            open={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
          />

          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
