import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { EmojiEvents } from '@mui/icons-material';

const Certifications = () => {
  return (
    <Box id="certifications" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Certifications
          </Typography>

          <Card
            sx={{
              maxWidth: 600,
              mx: 'auto',
              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
              border: '1px solid rgba(0, 188, 212, 0.2)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
          >
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  color: 'white',
                  mb: 2,
                }}
              >
                <EmojiEvents fontSize="large" />
              </Box>

              <Typography variant="h5" sx={{ mb: 2 }}>
                Accenture Nordics Developer
              </Typography>

              <Chip
                label="Professional Certification"
                sx={{
                  bgcolor: 'rgba(0, 188, 212, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications;
