import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
} from '@mui/material';

const Checkout = ({ cartItems, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: 'delivery',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrderComplete(formData);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
        <Typography variant="h5" gutterBottom>
          Checkout
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <RadioGroup
                name="orderType"
                value={formData.orderType}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="delivery"
                  control={<Radio />}
                  label="Delivery"
                />
                <FormControlLabel
                  value="pickup"
                  control={<Radio />}
                  label="Pickup"
                />
              </RadioGroup>
            </Grid>

            {formData.orderType === 'delivery' && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Delivery Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  multiline
                  rows={2}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Typography variant="h6">
                Total: ${total.toFixed(2)}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Place Order
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Checkout;
