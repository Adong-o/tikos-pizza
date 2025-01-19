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
  Alert,
  CircularProgress,
} from '@mui/material';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

const validatePhone = (phone) => {
  return String(phone).match(/^\+?[\d\s-]{10,}$/);
};

const Checkout = ({ cartItems, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: 'delivery',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.orderType === 'delivery' && !formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onOrderComplete(formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        orderType: 'delivery',
        address: '',
      });
    } catch (error) {
      setSubmitError('Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = formData.orderType === 'delivery' ? 5.00 : 0;
  const finalTotal = total + deliveryFee;

  return (
    <Box sx={{ padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
        <Typography variant="h5" gutterBottom>
          Checkout
        </Typography>
        
        {submitError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {submitError}
          </Alert>
        )}
        
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
                error={!!errors.name}
                helperText={errors.name}
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
                error={!!errors.phone}
                helperText={errors.phone}
                placeholder="+1234567890"
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
                error={!!errors.email}
                helperText={errors.email}
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
                  label="Delivery (+$5.00)"
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
                  error={!!errors.address}
                  helperText={errors.address}
                  multiline
                  rows={2}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Subtotal: ${total.toFixed(2)}
                </Typography>
                {formData.orderType === 'delivery' && (
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Delivery Fee: ${deliveryFee.toFixed(2)}
                  </Typography>
                )}
                <Typography variant="h6" color="primary">
                  Total: ${finalTotal.toFixed(2)}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={isSubmitting}
                sx={{ height: 48 }}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Place Order'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Checkout;
