import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Email, LinkedIn } from '@mui/icons-material';
import heroBg from '@/assets/hero-bg.jpg';
import { useState, useEffect } from 'react';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Node.js Developer',
  'React Developer',
  'Angular Developer',
  'Full Stack Developer',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: `linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(21, 25, 50, 0.9) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 80px rgba(0, 188, 212, 0.3)',
              }}
            >
              Sandeep Sanwle
            </Typography>
          </motion.div>
          
          <Box sx={{ mb: 3, height: '3rem', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" color="text.secondary" sx={{ mr: 1 }}>
              I'm a
            </Typography>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                  }}
                >
                  {roles[currentRole]}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, fontSize: '1.1rem' }}>
              Passionate software developer specializing in React, Angular, Node.js, and modern web technologies.
              Building scalable, user-centric applications with clean code and innovative solutions.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}>
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                    boxShadow: '0 4px 20px rgba(0, 188, 212, 0.4)',
                    '&:hover': {
                      boxShadow: '0 6px 30px rgba(0, 188, 212, 0.6)',
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      boxShadow: '0 4px 20px rgba(63, 81, 181, 0.3)',
                    },
                  }}
                >
                  View Projects
                </Button>
              </motion.div>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Stack direction="row" spacing={2}>
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button
                  component="a"
                  href="mailto:sandeepsanwle74@gmail.com"
                  startIcon={<Email />}
                  sx={{ 
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  Email
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/sandeepsanwle"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedIn />}
                  sx={{ 
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  LinkedIn
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
