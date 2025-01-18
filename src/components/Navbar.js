import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Badge,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

const Navbar = ({ cartItems, onCartClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <LocalPizzaIcon color="primary" />
        Tikos Pizza
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={RouterLink} to={item.path} sx={{ justifyContent: 'center' }}>
            <ListItemText 
              primary={item.name}
              primaryTypographyProps={{
                sx: {
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            height: { xs: 70, md: 80 },
            justifyContent: 'space-between',
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontWeight: 700,
            }}
          >
            <LocalPizzaIcon color="primary" sx={{ fontSize: 32 }} />
            Tikos Pizza
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          <IconButton 
            onClick={onCartClick}
            sx={{ 
              ml: 2,
              '&:hover': {
                backgroundColor: 'primary.lighter',
              },
            }}
          >
            <Badge badgeContent={cartItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>

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
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
