import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = {
  phone: '+254 700 123 456',
  whatsapp: '+254 700 123 456',
  email: 'info@tikospizza.co.ke',
  locations: [
    {
      city: 'Nairobi',
      address: 'Westlands Mall, Ground Floor',
      phone: '+254 712 345 678',
    },
    {
      city: 'Kitengela',
      address: 'EPZ Plaza, Shop 12',
      phone: '+254 723 456 789',
    },
    {
      city: 'Nakuru',
      address: 'Westside Mall, 1st Floor',
      phone: '+254 734 567 890',
    },
    {
      city: 'Machakos',
      address: 'Machakos Mall, Ground Floor',
      phone: '+254 745 678 901',
    },
  ],
  hours: {
    weekdays: '10:00 AM - 10:00 PM',
    weekends: '10:00 AM - 11:00 PM',
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                mb: 2,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}
            >
              Have a question or feedback? We'd love to hear from you!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(45deg, #FF4D4D 30%, #FF8E53 90%)',
                  color: 'white',
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                
                <Box sx={{ my: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon sx={{ mr: 2, fontSize: 24 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Call Us
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {contactInfo.phone}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <WhatsAppIcon sx={{ mr: 2, fontSize: 24 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        WhatsApp
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {contactInfo.whatsapp}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ mr: 2, fontSize: 24 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Email Us
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {contactInfo.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ mr: 2, fontSize: 24 }} />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Working Hours
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Mon-Fri: {contactInfo.hours.weekdays}
                        <br />
                        Sat-Sun: {contactInfo.hours.weekends}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                  Our Locations
                </Typography>
                <Grid container spacing={2}>
                  {contactInfo.locations.map((location, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <LocationOnIcon sx={{ mr: 2, mt: 0.5 }} />
                        <Box>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {location.city}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.9 }}>
                            {location.address}
                            <br />
                            {location.phone}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                {submitted && (
                  <Alert 
                    severity="success" 
                    sx={{ mb: 3 }}
                    onClose={() => setSubmitted(false)}
                  >
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<SendIcon />}
                        sx={{
                          py: 1.5,
                          fontSize: '1.1rem',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 6 }}>
          <Paper elevation={3}>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818399740214!2d36.81196081475602!3d-1.2833299359871286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f42bf35%3A0x5f7a3c26e24b8f7c!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1625161754996!5m2!1sen!2ske"
              sx={{
                border: 0,
                width: '100%',
                height: '450px',
                borderRadius: 1,
              }}
              allowFullScreen=""
              loading="lazy"
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
