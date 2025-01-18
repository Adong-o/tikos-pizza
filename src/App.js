import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4B2B',
      dark: '#E63E1C',
      light: '#FF6B4A',
      lighter: 'rgba(255, 75, 43, 0.1)',
    },
    secondary: {
      main: '#FFD700',
      dark: '#FFC700',
      light: '#FFE14D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(255, 75, 43, 0.23)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2D3436',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: '0 16px 16px 0',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = useCallback((item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, []);

  const handleRemoveFromCart = useCallback((itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  }, []);

  const handleUpdateQuantity = useCallback((itemId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveFromCart(itemId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [handleRemoveFromCart]);

  const handleCheckout = useCallback(() => {
    setCartItems([]);
    setIsCartOpen(false);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
          }}
        >
          <Navbar 
            cartItemsCount={totalItems}
            onCartClick={() => setIsCartOpen(true)}
          />
          
          <Cart
            open={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onRemoveItem={handleRemoveFromCart}
            onUpdateQuantity={handleUpdateQuantity}
            onCheckout={handleCheckout}
          />

          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
              <Route 
                path="/menu" 
                element={<Products onAddToCart={handleAddToCart} />} 
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
