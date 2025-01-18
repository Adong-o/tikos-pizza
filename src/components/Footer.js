import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = [
    { title: 'Menu', path: '/menu' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Terms & Conditions', path: '/terms' },
    { title: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocalPizzaIcon color="primary" sx={{ fontSize: 32 }} />
              <Typography
                variant="h5"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                Tikos Pizza
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Crafting the perfect pizza with love and passion since 1990. Every slice tells our story of quality and tradition.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              {footerLinks.map((link) => (
                <Grid item xs={6} key={link.title}>
                  <Link
                    component={RouterLink}
                    to={link.path}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="text.primary"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body2">
                  123 Pizza Street, Foodie City, FC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon color="primary" />
                <Typography variant="body2">
                  +1 (234) 567-8900
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon color="primary" />
                <Typography variant="body2">
                  info@tikospizza.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="body2"
          align="center"
          sx={{
            color: 'text.secondary',
          }}
        >
          {new Date().getFullYear()} Tikos Pizza. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
