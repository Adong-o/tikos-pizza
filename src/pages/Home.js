import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const StyledHeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,77,77,0.05) 0%, rgba(255,77,77,0.1) 100%)',
    zIndex: 1,
  },
}));

const LocationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Delivery',
    description: 'Free delivery for orders above Ksh. 1000',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Service',
    description: 'Order anytime, we never close',
  },
  {
    icon: <LocalPizzaIcon sx={{ fontSize: 40 }} />,
    title: 'Fresh Ingredients',
    description: 'Quality ingredients for the perfect pizza',
  },
];

const locations = [
  {
    city: 'Nairobi',
    address: 'Westlands Mall, Ground Floor',
    phone: '+254 712 345 678',
    hours: '10:00 AM - 10:00 PM',
  },
  {
    city: 'Kitengela',
    address: 'EPZ Plaza, Shop 12',
    phone: '+254 723 456 789',
    hours: '10:00 AM - 9:00 PM',
  },
  {
    city: 'Nakuru',
    address: 'Westside Mall, 1st Floor',
    phone: '+254 734 567 890',
    hours: '10:00 AM - 9:00 PM',
  },
  {
    city: 'Machakos',
    address: 'Machakos Mall, Ground Floor',
    phone: '+254 745 678 901',
    hours: '10:00 AM - 9:00 PM',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <StyledHeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(45deg, #FF4D4D 30%, #FF8E53 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Authentic Italian Pizza
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: 500 }}
                >
                  Experience the taste of Italy with our handcrafted pizzas made from the finest ingredients
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/menu')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Order Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/locations')}
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Find Us
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  component="img"
                  src="/images/hero-pizza.png"
                  alt="Delicious Pizza"
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: 'auto',
                    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </StyledHeroSection>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.dark' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      bgcolor: 'transparent',
                      textAlign: 'center',
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          mb: 2,
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: 'primary.lighter',
                          color: 'primary.main',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Locations Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: 700,
            }}
          >
            Our Locations
          </Typography>
          <Grid container spacing={4}>
            {locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LocationCard elevation={2}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <LocationOnIcon
                        sx={{ fontSize: 24, color: 'primary.main', mr: 1 }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {location.city}
                      </Typography>
                    </Box>
                    <Typography variant="body1" paragraph>
                      {location.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {location.phone}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 'auto' }}
                    >
                      {location.hours}
                    </Typography>
                  </LocationCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          bgcolor: 'primary.main',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" gutterBottom>
                Ready to Order?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Get your favorite pizza delivered to your doorstep
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/menu')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                }}
              >
                Order Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
