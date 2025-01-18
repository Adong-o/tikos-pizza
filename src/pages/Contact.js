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
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Box sx={{ my: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    123 Pizza Street, Foodville, FD 12345
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography>
                    info@tikospizza.com
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom>
                Hours of Operation
              </Typography>
              <Typography>
                Monday - Thursday: 11:00 AM - 10:00 PM
                <br />
                Friday - Saturday: 11:00 AM - 11:00 PM
                <br />
                Sunday: 12:00 PM - 9:00 PM
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
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
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 4 }}>
          <Paper elevation={3}>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.925194492722!2d-74.00594368461596!3d40.71277797933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1625161754996!5m2!1sen!2sus"
              sx={{
                border: 0,
                width: '100%',
                height: '400px',
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
