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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
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
            ? 'rgba(10, 14, 39, 0.85)' 
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          transition: 'all 0.3s ease',
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
                  fontWeight: 700,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 188, 212, 0.05)',
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 32, md: 40 },
                      height: { xs: 32, md: 40 },
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '0.875rem', md: '1rem' },
                    }}
                  >
                    SS
                  </Box>
                  {!isMobile && (
                    <Typography
                      component="span"
                      sx={{
                        display: { xs: 'none', sm: 'inline' },
                        ml: 1,
                      }}
                    >
                      Sandeep Sanwle
                    </Typography>
                  )}
                </Box>
              </Button>
            </motion.div>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: activeSection === item.href ? 'primary.main' : 'text.primary',
                      position: 'relative',
                      fontWeight: activeSection === item.href ? 600 : 400,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: mode === 'dark' ? 'rgba(0, 188, 212, 0.1)' : 'rgba(0, 188, 212, 0.05)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: activeSection === item.href ? '60%' : '0%',
                        height: '3px',
                        bottom: 4,
                        left: '50%',
                        background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
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
                sx={{ ml: 1 }}
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
