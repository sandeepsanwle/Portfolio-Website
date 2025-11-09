import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#00bcd4' : '#0097a7',
            light: mode === 'dark' ? '#33c9dc' : '#26c6da',
            dark: mode === 'dark' ? '#008394' : '#006064',
          },
          secondary: {
            main: mode === 'dark' ? '#3f51b5' : '#5c6bc0',
            light: mode === 'dark' ? '#6573c3' : '#7986cb',
            dark: mode === 'dark' ? '#2c387e' : '#3949ab',
          },
          background: {
            default: mode === 'dark' ? '#0a0e27' : '#f5f7fa',
            paper: mode === 'dark' ? '#151932' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#ffffff' : '#1a1a1a',
            secondary: mode === 'dark' ? '#b0bec5' : '#546e7a',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
          },
          h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
            lineHeight: 1.3,
          },
          h3: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.4,
          },
          h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
          },
          body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
                padding: '10px 24px',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                boxShadow: mode === 'dark' 
                  ? '0 8px 32px rgba(0, 188, 212, 0.15)' 
                  : '0 8px 32px rgba(0, 0, 0, 0.1)',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Navigation mode={mode} toggleTheme={toggleTheme} />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
