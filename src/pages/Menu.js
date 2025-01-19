import React, { useState } from 'react';
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
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EcoIcon from '@mui/icons-material/Eco';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const pizzas = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh tomatoes, mozzarella, basil, and our signature sauce",
    price: 899,
    image: "/images/margherita.jpg",
    rating: 4.8,
    isVegetarian: true,
    category: "Classic",
    spicyLevel: 0,
  },
  {
    id: 2,
    name: "Pepperoni Supreme",
    description: "Double pepperoni, extra cheese, and Italian herbs",
    price: 1199,
    image: "/images/pepperoni.jpg",
    rating: 4.9,
    isVegetarian: false,
    category: "Premium",
    spicyLevel: 1,
  },
  {
    id: 3,
    name: "BBQ Chicken Deluxe",
    description: "Grilled chicken, red onions, bell peppers, and BBQ sauce",
    price: 1299,
    image: "/images/bbq-chicken.jpg",
    rating: 4.7,
    isVegetarian: false,
    category: "Premium",
    spicyLevel: 1,
  },
  {
    id: 4,
    name: "Vegetarian Garden",
    description: "Mushrooms, olives, bell peppers, onions, and fresh tomatoes",
    price: 999,
    image: "/images/vegetarian.jpg",
    rating: 4.6,
    isVegetarian: true,
    category: "Classic",
    spicyLevel: 0,
  },
  {
    id: 5,
    name: "Spicy Mexican",
    description: "Jalapeños, spicy beef, onions, and Mexican spices",
    price: 1399,
    image: "/images/mexican.jpg",
    rating: 4.8,
    isVegetarian: false,
    category: "Special",
    spicyLevel: 3,
  },
  {
    id: 6,
    name: "Hawaiian Paradise",
    description: "Ham, pineapple, and extra mozzarella cheese",
    price: 1099,
    image: "/images/hawaiian.jpg",
    rating: 4.5,
    isVegetarian: false,
    category: "Classic",
    spicyLevel: 0,
  },
  {
    id: 7,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ground beef, and ham",
    price: 1499,
    image: "/images/meat-lovers.jpg",
    rating: 4.9,
    isVegetarian: false,
    category: "Premium",
    spicyLevel: 1,
  },
  {
    id: 8,
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken, ranch sauce, and blue cheese",
    price: 1299,
    image: "/images/buffalo-chicken.jpg",
    rating: 4.7,
    isVegetarian: false,
    category: "Special",
    spicyLevel: 2,
  },
];

const categories = ["All", "Classic", "Premium", "Special"];

const Menu = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredPizzas = pizzas.filter((pizza) => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pizza.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || pizza.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 2,
              }}
            >
              Our Menu
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Discover our handcrafted pizzas made with fresh ingredients and love
            </Typography>
          </motion.div>
        </Box>

        {/* Search and Filter */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search pizzas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "contained" : "outlined"}
                    onClick={() => setSelectedCategory(category)}
                    sx={{ minWidth: 100 }}
                  >
                    {category}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Pizza Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {filteredPizzas.map((pizza) => (
              <Grid item xs={12} sm={6} md={4} key={pizza.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={pizza.image}
                      alt={pizza.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
                          {pizza.name}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          Ksh. {pizza.price}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {pizza.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Rating value={pizza.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                          {pizza.rating}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        {pizza.isVegetarian && (
                          <Chip
                            icon={<EcoIcon />}
                            label="Veg"
                            size="small"
                            color="success"
                          />
                        )}
                        {pizza.spicyLevel > 0 && (
                          <Chip
                            icon={<WhatshotIcon />}
                            label={`Spicy ${pizza.spicyLevel}`}
                            size="small"
                            color="error"
                          />
                        )}
                        <Chip
                          label={pizza.category}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => onAddToCart(pizza)}
                      >
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* No Results Message */}
        {filteredPizzas.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
            }}
          >
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No pizzas found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your search or filter criteria
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Menu;
