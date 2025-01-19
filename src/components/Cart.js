import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
  ButtonGroup,
} from '@mui/material';
import {
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const MotionListItem = motion(ListItem);

const Cart = ({ open, onClose, items, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          p: 2,
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" component="h2">
          Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
        </Typography>
        <IconButton onClick={onClose} size="large" sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {items.length === 0 ? (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50vh',
            gap: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{
              mt: 2,
              px: 4,
              borderRadius: '24px',
              textTransform: 'none',
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <>
          <List sx={{ flexGrow: 1, overflow: 'auto', my: 2 }}>
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <MotionListItem
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.2 }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    mb: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 2,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', width: '100%', p: 1.5 }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 1,
                        objectFit: 'cover',
                        mr: 2,
                      }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <Typography
                            component="span"
                            variant="body2"
                            color="primary.main"
                            sx={{ fontWeight: 600 }}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </Typography>
                        }
                        primaryTypographyProps={{
                          variant: 'subtitle1',
                          fontWeight: 'bold',
                          gutterBottom: true,
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mt: 1,
                          gap: 2,
                        }}
                      >
                        <ButtonGroup 
                          size="small" 
                          aria-label="quantity controls"
                          sx={{ 
                            '& .MuiButton-root': {
                              borderColor: 'primary.main',
                              color: 'primary.main',
                            }
                          }}
                        >
                          <Button
                            onClick={() => handleQuantityChange(item, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <Button disabled sx={{ px: 2, minWidth: 40 }}>
                            {item.quantity}
                          </Button>
                          <Button
                            onClick={() => handleQuantityChange(item, 1)}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </ButtonGroup>
                        <IconButton
                          edge="end"
                          onClick={() => onRemoveItem(item.id)}
                          color="error"
                          size="small"
                          sx={{
                            '&:hover': {
                              backgroundColor: 'error.lighter',
                            },
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </MotionListItem>
              ))}
            </AnimatePresence>
          </List>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mt: 'auto' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                ${totalAmount.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={onCheckout}
              sx={{
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '28px',
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Drawer>
  );
};

export default Cart;
