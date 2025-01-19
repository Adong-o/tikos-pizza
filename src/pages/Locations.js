import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsIcon from '@mui/icons-material/Directions';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const locations = [
  {
    id: 1,
    city: 'Nairobi',
    area: 'Westlands',
    address: 'Westlands Mall, Ground Floor',
    phone: '+254 712 345 678',
    hours: {
      weekdays: '10:00 AM - 10:00 PM',
      weekends: '10:00 AM - 11:00 PM',
    },
    deliveryArea: 'Delivers to Westlands, Parklands, Lavington, and Kilimani',
    mapUrl: 'https://maps.google.com/?q=Westlands+Mall+Nairobi',
    image: '/images/locations/nairobi.jpg',
  },
  {
    id: 2,
    city: 'Kitengela',
    area: 'EPZ',
    address: 'EPZ Plaza, Shop 12',
    phone: '+254 723 456 789',
    hours: {
      weekdays: '10:00 AM - 9:00 PM',
      weekends: '10:00 AM - 10:00 PM',
    },
    deliveryArea: 'Delivers to Kitengela town and surrounding areas',
    mapUrl: 'https://maps.google.com/?q=EPZ+Plaza+Kitengela',
    image: '/images/locations/kitengela.jpg',
  },
  {
    id: 3,
    city: 'Nakuru',
    area: 'Westside',
    address: 'Westside Mall, 1st Floor',
    phone: '+254 734 567 890',
    hours: {
      weekdays: '10:00 AM - 9:00 PM',
      weekends: '10:00 AM - 10:00 PM',
    },
    deliveryArea: 'Delivers to Nakuru CBD and residential areas',
    mapUrl: 'https://maps.google.com/?q=Westside+Mall+Nakuru',
    image: '/images/locations/nakuru.jpg',
  },
  {
    id: 4,
    city: 'Machakos',
    area: 'Town Center',
    address: 'Machakos Mall, Ground Floor',
    phone: '+254 745 678 901',
    hours: {
      weekdays: '10:00 AM - 9:00 PM',
      weekends: '10:00 AM - 10:00 PM',
    },
    deliveryArea: 'Delivers to Machakos town and nearby estates',
    mapUrl: 'https://maps.google.com/?q=Machakos+Mall',
    image: '/images/locations/machakos.jpg',
  },
];

const LocationCard = ({ location, index }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        elevation={3}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
          },
        }}
      >
        <Box
          sx={{
            height: 200,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={location.image}
            alt={location.city}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              p: 2,
            }}
          >
            <Typography variant="h5" component="h3">
              {location.city}
            </Typography>
            <Typography variant="subtitle1">{location.area}</Typography>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">{location.address}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body1">{location.phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <AccessTimeIcon color="primary" sx={{ mr: 1, mt: 0.3 }} />
              <Box>
                <Typography variant="body1">
                  Mon-Fri: {location.hours.weekdays}
                </Typography>
                <Typography variant="body1">
                  Sat-Sun: {location.hours.weekends}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <DeliveryDiningIcon color="primary" sx={{ mr: 1, mt: 0.3 }} />
              <Typography variant="body2" color="text.secondary">
                {location.deliveryArea}
              </Typography>
            </Box>
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<DirectionsIcon />}
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Locations = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
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
              Our Locations
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Find your nearest Tiko's Pizza and enjoy our delicious pizzas
            </Typography>
          </motion.div>
        </Box>

        {/* Delivery Information */}
        <Box sx={{ mb: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: 'primary.lighter',
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom color="primary.main">
              🚚 Free Delivery
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We offer free delivery for orders above Ksh. 1000 within our delivery zones.
              Minimum order for delivery is Ksh. 500. Delivery times may vary based on location and traffic conditions.
            </Typography>
          </Paper>
        </Box>

        {/* Location Grid */}
        <Grid container spacing={4}>
          {locations.map((location, index) => (
            <Grid item xs={12} md={6} key={location.id}>
              <LocationCard location={location} index={index} />
            </Grid>
          ))}
        </Grid>

        {/* Contact Information */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Need Help?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            For any queries or support, contact our customer service:
          </Typography>
          <Typography variant="h6" color="primary.main">
            +254 700 123 456
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Available 7 days a week, 9:00 AM - 10:00 PM
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Locations;
