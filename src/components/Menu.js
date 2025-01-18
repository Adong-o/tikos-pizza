import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

const pizzaMenu = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Fresh tomatoes, mozzarella, and basil',
    price: 12.99,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Classic pepperoni with mozzarella',
    price: 14.99,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    name: 'Hawaiian',
    description: 'Ham, pineapple, and mozzarella',
    price: 13.99,
    image: 'https://via.placeholder.com/300x200'
  }
];

const Menu = ({ onAddToCart }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={4}>
        {pizzaMenu.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={pizza.image}
                alt={pizza.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {pizza.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pizza.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  ${pizza.price}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                  onClick={() => onAddToCart(pizza)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
