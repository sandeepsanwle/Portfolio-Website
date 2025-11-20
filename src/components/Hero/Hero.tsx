import { Box, Container, Typography, Button, Stack, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Email, LinkedIn, Download } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';
import HeroBackground from './HeroBackground';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Node.js Developer',
  'React Developer',
  'Angular Developer',
  'Full Stack Developer',
];

interface HeroProps {
  mode: 'light' | 'dark';
}

const Hero = ({ mode }: HeroProps) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getAnimationProps } = useResponsiveAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // Simple, professional single burst
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 70,
      origin: { x, y },
      colors: ['#00bcd4', '#3f51b5', '#667eea'],
      ticks: 60,
      gravity: 1.2,
      decay: 0.94,
      startVelocity: 25,
      zIndex: 9999,
    });
  };

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true);
      
      // Create a temporary link element
      const link = document.createElement('a');
      // link.href = 'https://drive.google.com/uc?export=download&id=1WdV-uLrUa3ojbXiL7j-sdFiUx0_0ov3S';
      link.href = 'https://docs.google.com/document/d/1cumA-iZbIUGmQuk4lK0EnISt0ojIddK2WB2rFMfdUhA/export?format=pdf';
      link.download = 'Sandeep_Sanwle_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Trigger confetti animation
      setTimeout(() => {
        setIsDownloading(false);
        triggerConfetti();
      }, 500);
    } catch (error) {
      setIsDownloading(false);
      console.error('Download error:', error);
    }
  };

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
        overflow: 'hidden',
      }}
    >
      {/* Background Component */}
      <HeroBackground mode={mode} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 }
          })}
        >
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 1, delay: 0.2 }
            })}
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
                {...getAnimationProps({
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: -20, opacity: 0 },
                  transition: { duration: 0.5 }
                })}
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
            {...getAnimationProps({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.4 }
            })}
          >
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, fontSize: '1.1rem' }}>
              Passionate software developer specializing in React, Angular, Node.js, and modern web technologies.
              Building scalable, user-centric applications with clean code and innovative solutions.
            </Typography>
          </motion.div>

          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, delay: 0.6 }
            })}
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

              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Button
                  ref={buttonRef}
                  variant="outlined"
                  size="large"
                  onClick={handleDownloadResume}
                  disabled={isDownloading}
                  startIcon={isDownloading ? <CircularProgress size={20} /> : <Download />}
                  sx={{
                    borderWidth: 2,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: 'primary.light',
                      boxShadow: '0 4px 20px rgba(0, 188, 212, 0.4)',
                      background: 'rgba(0, 188, 212, 0.1)',
                    },
                    '&.Mui-disabled': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      opacity: 0.7,
                    },
                  }}
                >
                  {isDownloading ? 'Downloading...' : 'Download Resume'}
                </Button>
              </motion.div>
            </Stack>
          </motion.div>

          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 0.8 }
            })}
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
