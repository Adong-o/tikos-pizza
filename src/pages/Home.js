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
  CardActions,
  Chip,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { images } from '../assets/images';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import StarIcon from '@mui/icons-material/Star';

const StyledCard = styled(motion(Card))(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 280,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
  },
});

const features = [
  {
    icon: <LocalPizzaIcon sx={{ fontSize: 40 }} />,
    title: 'Fresh Ingredients',
    description: 'We use only the finest and freshest ingredients in our pizzas',
  },
  {
    icon: <DeliveryDiningIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40 }} />,
    title: 'Best Quality',
    description: 'Authentic Italian recipes and premium quality',
  },
];

const topSellers = [
  {
    id: 1,
    name: 'Classic Margherita',
    description: 'Fresh tomatoes, mozzarella, basil, and our signature sauce',
    price: 12.99,
    image: images.pizzas.margherita,
    rating: 4.9,
    soldCount: 1500,
  },
  {
    id: 2,
    name: 'Pepperoni Supreme',
    description: 'Double pepperoni with extra cheese and Italian herbs',
    price: 14.99,
    image: images.pizzas.pepperoni,
    rating: 4.8,
    soldCount: 1200,
  },
  {
    id: 3,
    name: 'BBQ Chicken Deluxe',
    description: 'Grilled chicken, red onions, and BBQ sauce',
    price: 16.99,
    image: images.pizzas.bbqChicken,
    rating: 4.7,
    soldCount: 1000,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Home = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          width: '100%',
          overflow: 'hidden',
          mt: -8, // Offset for navbar
          pt: 8, // Add padding top to compensate for navbar
        }}
      >
        {/* Background Image with Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${images.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        />

        {/* Hero Content */}
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 2,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Authentic Italian Pizza
                  <br />
                  Made with Love
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  Experience the taste of Naples in every bite. Our pizzas are crafted with 
                  traditional recipes, premium ingredients, and baked to perfection in our 
                  wood-fired ovens.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/menu')}
                    sx={{
                      fontSize: '1.2rem',
                      py: 1.5,
                      px: 4,
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    Order Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{
                      fontSize: '1.2rem',
                      py: 1.5,
                      px: 4,
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                }}
              >
                <LocalPizzaIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Authentic Recipe
                </Typography>
                <Typography color="text.secondary">
                  Our recipes have been passed down through generations, 
                  preserving the authentic taste of traditional Italian pizza.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                }}
              >
                <DeliveryDiningIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Fast Delivery
                </Typography>
                <Typography color="text.secondary">
                  Hot and fresh pizza delivered to your doorstep within 30 minutes
                  or your next order is on us!
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                }}
              >
                <StarIcon color="primary" sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Premium Quality
                </Typography>
                <Typography color="text.secondary">
                  We use only the finest ingredients, from Italian flour to 
                  fresh local produce, ensuring every pizza is perfect.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                component="img"
                src={images.about}
                alt="Our Restaurant"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                  Founded in 2010, Tikos Pizza began with a simple mission: to bring the authentic 
                  taste of Naples to your neighborhood. Our founder, Chef Marco, spent years 
                  perfecting his craft in Italy before bringing his expertise and passion to 
                  our kitchen.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                  What sets us apart is our unwavering commitment to quality. Our dough is 
                  made fresh daily, using imported Italian flour and left to rise for 24 hours. 
                  We use only the finest ingredients, from San Marzano tomatoes to fresh 
                  buffalo mozzarella, ensuring every pizza tells a story of tradition and taste.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                  Today, we're proud to serve our community not just pizza, but an authentic 
                  Italian dining experience. Every pizza that leaves our kitchen carries with 
                  it our passion for quality, tradition, and the joy of good food shared with 
                  loved ones.
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', gap: 3 }}>
                  <Box>
                    <Typography variant="h3" color="primary" fontWeight="bold">
                      13+
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Years of Experience
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" color="primary" fontWeight="bold">
                      50k+
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Happy Customers
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" color="primary" fontWeight="bold">
                      4.9
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Customer Rating
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Top Sellers Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <LocalFireDepartmentIcon color="primary" sx={{ fontSize: 'inherit' }} />
                Top Sellers
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                Our most loved pizzas that keep our customers coming back for more
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {topSellers.map((pizza, index) => (
                <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                  <motion.div variants={itemVariants}>
                    <StyledCard>
                      <StyledCardMedia
                        component="img"
                        image={pizza.image}
                        title={pizza.name}
                      />
                      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography gutterBottom variant="h5" component="h2" sx={{ mr: 1 }}>
                            {pizza.name}
                          </Typography>
                          <Chip
                            label={`${pizza.rating}★`}
                            size="small"
                            color="primary"
                            sx={{ fontWeight: 600 }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {pizza.description}
                        </Typography>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                          ${pizza.price.toFixed(2)}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ p: 2, pt: 0 }}>
                        <Button
                          size="large"
                          fullWidth
                          variant="contained"
                          onClick={() => onAddToCart(pizza)}
                          startIcon={<ShoppingCartIcon />}
                          sx={{
                            textTransform: 'none',
                            py: 1,
                            fontSize: '1.1rem',
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
