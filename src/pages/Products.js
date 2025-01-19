import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarIcon from '@mui/icons-material/Star';
import { images } from '../assets/images';

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

const pizzas = [
  {
    id: 1,
    name: 'Classic Margherita',
    description: 'Fresh tomatoes, mozzarella, basil, and our signature sauce',
    price: 12.99,
    image: images.pizzas.margherita,
    rating: 4.9,
    category: 'Classic',
    isSpicy: false,
    isVegetarian: true,
  },
  {
    id: 2,
    name: 'Pepperoni Supreme',
    description: 'Double pepperoni with extra cheese and Italian herbs',
    price: 14.99,
    image: images.pizzas.pepperoni,
    rating: 4.8,
    category: 'Meat',
    isSpicy: true,
    isVegetarian: false,
  },
  {
    id: 3,
    name: 'BBQ Chicken Deluxe',
    description: 'Grilled chicken, red onions, and BBQ sauce',
    price: 16.99,
    image: images.pizzas.bbqChicken,
    rating: 4.7,
    category: 'Specialty',
    isSpicy: false,
    isVegetarian: false,
  },
  {
    id: 4,
    name: 'Vegetarian Garden',
    description: 'Fresh vegetables, mushrooms, and olives',
    price: 13.99,
    image: images.pizzas.vegetarian,
    rating: 4.6,
    category: 'Vegetarian',
    isSpicy: false,
    isVegetarian: true,
  },
  {
    id: 5,
    name: 'Spicy Hawaiian',
    description: 'Ham, pineapple, jalapeños, and spicy sauce',
    price: 15.99,
    image: images.pizzas.hawaiian,
    rating: 4.5,
    category: 'Specialty',
    isSpicy: true,
    isVegetarian: false,
  },
  {
    id: 6,
    name: 'Meat Lovers',
    description: 'Pepperoni, sausage, bacon, and ground beef',
    price: 17.99,
    image: images.pizzas.meatLovers,
    rating: 4.8,
    category: 'Meat',
    isSpicy: false,
    isVegetarian: false,
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

const Products = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredPizzas = useMemo(() => {
    return pizzas.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pizza.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pizza.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 3,
                textAlign: 'center',
              }}
            >
              Our Pizza Menu
            </Typography>
            <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search pizzas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 30,
                    bgcolor: 'background.paper',
                    '& fieldset': {
                      borderRadius: 30,
                    },
                  },
                }}
              />
            </Box>
          </Box>

          <Grid container spacing={3}>
            {filteredPizzas.map((pizza) => (
              <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                <StyledCard
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  initial="hidden"
                  animate="visible"
                >
                  <StyledCardMedia
                    image={pizza.image}
                    title={pizza.name}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {pizza.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon sx={{ color: 'warning.main', mr: 0.5 }} />
                        <Typography variant="subtitle2">
                          {pizza.rating}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, minHeight: 40 }}
                    >
                      {pizza.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      {pizza.isVegetarian && (
                        <Chip
                          label="Vegetarian"
                          size="small"
                          color="success"
                          variant="outlined"
                        />
                      )}
                      {pizza.isSpicy && (
                        <Chip
                          icon={<LocalFireDepartmentIcon />}
                          label="Spicy"
                          size="small"
                          color="error"
                          variant="outlined"
                        />
                      )}
                    </Box>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      ${pizza.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<ShoppingCartIcon />}
                      onClick={() => {
                        onAddToCart({
                          ...pizza,
                          quantity: 1
                        });
                      }}
                      sx={{
                        borderRadius: '20px',
                        py: 1,
                        textTransform: 'none',
                        fontSize: '1rem',
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>

          {filteredPizzas.length === 0 && (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No pizzas found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Try adjusting your search terms
              </Typography>
            </Box>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Products;
