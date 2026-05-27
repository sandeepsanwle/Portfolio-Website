import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Work } from '@mui/icons-material';
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';

const Experience = () => {
  const { getAnimationProps } = useResponsiveAnimation();

  return (
    <Box id="experience" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Work Experience
          </Typography>

          <Card
            sx={{
              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
              border: '1px solid rgba(0, 188, 212, 0.2)',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Work sx={{ color: 'primary.main', mr: 2 }} />
                <Typography variant="h4">
                  Software Developer
                </Typography>
              </Box>

              <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                Zecdata Technology
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Apr 2023 - Present
              </Typography>

              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" variant="body1" sx={{ mb: 2 }}>
                  Developed end-to-end solutions using React and Angular on the front end, and NodeJS (Express) on the back end.
                </Typography>
                <Typography component="li" variant="body1" sx={{ mb: 2 }}>
                  Demonstrated versatility in seamlessly transitioning between frontend and backend tasks.
                </Typography>
                <Typography component="li" variant="body1">
                  Led front-end and backend development, showcasing expertise in design principles and user-centric development.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
