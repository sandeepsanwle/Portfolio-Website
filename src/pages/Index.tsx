import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from '@/theme/theme';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Projects from '@/components/Projects/Projects';
import Certifications from '@/components/Certifications/Certifications';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Navigation />
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
