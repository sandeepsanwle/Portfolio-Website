import { 
  AppBar, 
  Toolbar, 
  Container, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
  Divider
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7, Close as CloseIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

const Navigation = ({ mode, toggleTheme }: NavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      // Active section tracking
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Scroll progress and scrolled state
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      setScrolled(scrollTop > 8);
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setActiveSection(id);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 280,
        height: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sandeep Sanwle
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item, index) => (
          <ListItem key={item.label} disablePadding sx={{ px: 2, mb: 1 }}>
            <ListItemButton
              onClick={() => scrollToSection(item.href)}
              sx={{
                borderRadius: 2,
                bgcolor: activeSection === item.href ? 'rgba(0, 188, 212, 0.1)' : 'transparent',
                color: activeSection === item.href ? 'primary.main' : 'text.primary',
                fontWeight: activeSection === item.href ? 600 : 400,
                '&:hover': {
                  bgcolor: 'rgba(0, 188, 212, 0.08)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '1rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', display: 'grid', gap: 1.25 }}>
        <Button
          variant="contained"
          onClick={() => scrollToSection('contact')}
          sx={{
            background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
            color: 'white',
            fontWeight: 700,
            py: 1.25,
            boxShadow: '0 4px 20px rgba(0, 188, 212, 0.4)',
            '&:hover': {
              boxShadow: '0 6px 30px rgba(0, 188, 212, 0.6)',
            },
          }}
        >
          Hire Me
        </Button>
        <Button
          variant="outlined"
          onClick={() => scrollToSection('projects')}
          sx={{ py: 1.25, fontWeight: 700 }}
        >
          View Projects
        </Button>
        <Button
          fullWidth
          onClick={toggleTheme}
          startIcon={mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          sx={{
            color: 'text.primary',
            justifyContent: 'flex-start',
            textTransform: 'none',
          }}
        >
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: mode === 'dark' 
            ? (scrolled ? 'rgba(10, 14, 39, 0.92)' : 'rgba(10, 14, 39, 0.85)') 
            : (scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)'),
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? (mode === 'dark' 
                ? '0 8px 24px rgba(0, 188, 212, 0.12)' 
                : '0 8px 24px rgba(0, 0, 0, 0.08)') 
            : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              py: 1,
              minHeight: { xs: 64, md: 72 },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ flexGrow: 1 }}
            >
              <Button
                onClick={() => scrollToSection('home')}
                sx={{
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': { bgcolor: 'transparent' },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: { xs: '.02em', md: '.04em' },
                      fontSize: { xs: '1.1rem', md: '1.35rem' },
                      lineHeight: 1,
                      background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textTransform: 'uppercase',
                    }}
                  >
                    Sandeep Sanwle
                  </Typography>
                  {!isMobile && (
                    <Box
                      sx={{
                        mt: 0.75,
                        height: 3,
                        width: 80,
                        borderRadius: 2,
                        background: 'linear-gradient(90deg, #00bcd4 0%, #3f51b5 100%)',
                        boxShadow: '0 0 16px rgba(0, 188, 212, 0.5)',
                      }}
                    />
                  )}
                </Box>
              </Button>
            </motion.div>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      textTransform: 'uppercase',
                      letterSpacing: '.12em',
                      fontWeight: activeSection === item.href ? 800 : 600,
                      fontSize: '0.8rem',
                      px: 1.5,
                      py: 1,
                      color: activeSection === item.href ? 'primary.main' : 'text.primary',
                      transition: 'all 0.25s ease',
                      borderRadius: 0,
                      bgcolor: 'transparent',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                      },
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        bottom: 6,
                        transform: 'translateX(-50%)',
                        height: 2,
                        width: activeSection === item.href ? '70%' : '0%',
                        background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                        transition: 'width 0.25s ease',
                        borderRadius: 2,
                      },
                      '&:hover::after': {
                        width: '70%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <Box
                component={motion.div}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    color: 'text.primary',
                    bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 188, 212, 0.05)',
                    '&:hover': {
                      bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.2)' : 'rgba(0, 188, 212, 0.15)',
                      color: 'primary.main',
                    },
                  }}
                >
                  {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1, alignItems: 'center' }}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: 'text.primary',
                  bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 188, 212, 0.05)',
                  '&:hover': {
                    bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.2)' : 'rgba(0, 188, 212, 0.15)',
                  },
                }}
              >
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: 'text.primary',
                  bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 188, 212, 0.05)',
                  '&:hover': {
                    bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.2)' : 'rgba(0, 188, 212, 0.15)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {/* Decorative gradient glow for unique look */}
        <Box
          sx={{
            position: 'absolute',
            top: -40,
            left: '10%',
            right: '10%',
            height: 80,
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,188,212,0.25) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(20px)',
            pointerEvents: 'none',
          }}
        />
        {/* Scroll progress bar */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 3,
            bgcolor: 'transparent',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${scrollProgress}%`,
              background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
              transition: 'width 0.15s ease-out',
            }}
          />
        </Box>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {drawer}
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
};

export default Navigation;
