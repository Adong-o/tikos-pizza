import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Badge,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalPizza as LocalPizzaIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ cartItemsCount = 0, onCartClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalPizzaIcon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h6" color="primary.main">
            Tiko's Pizza
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              bgcolor: isActive(item.path) ? 'primary.lighter' : 'transparent',
              '&:hover': {
                bgcolor: 'primary.lighter',
              },
            }}
          >
            <ListItemText 
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          bgcolor: 'background.default',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 80 }}>
            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <LocalPizzaIcon
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    mr: 1,
                    color: 'primary.main',
                    fontSize: 32,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'text.primary',
                  }}
                >
                  Tiko's Pizza
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                ml: 4,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    mx: 1,
                    color: isActive(item.path) ? 'primary.main' : 'text.primary',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: isActive(item.path) ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Cart Button */}
            <IconButton
              onClick={onCartClick}
              sx={{
                ml: 2,
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <Badge
                badgeContent={cartItemsCount}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: '0.8rem',
                    height: '20px',
                    minWidth: '20px',
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
