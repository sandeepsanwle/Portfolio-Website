import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
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
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Sandeep Sanwle
          </Typography>
          
          <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
            Full Stack Developer
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
            Passionate software developer specializing in React, Angular, Node.js, and modern web technologies.
            Building scalable, user-centric applications with clean code and innovative solutions.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('contact')}
                sx={{
                  background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </motion.div>
          </Stack>

          <Stack direction="row" spacing={2}>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                component="a"
                href="mailto:sandeepsanwle74@gmail.com"
                startIcon={<Email />}
                sx={{ color: 'text.secondary' }}
              >
                Email
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.2 }}>
              <Button
                component="a"
                href="https://www.linkedin.com/in/sandeepsanwle"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedIn />}
                sx={{ color: 'text.secondary' }}
              >
                LinkedIn
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
