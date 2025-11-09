import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { School } from '@mui/icons-material';

const educationData = [
  {
    degree: 'MCA (Computer Application)',
    institution: 'International Institute of Professional Studies, Indore (MP) India',
    duration: '2021 - 2023',
    cgpa: '7.8/10',
  },
  {
    degree: 'BCA (Computer Application)',
    institution: 'International Institute of Professional Studies, Indore (MP) India',
    duration: '2018 - 2021',
    cgpa: '7.8/10',
  },
];

const Education = () => {
  return (
    <Box id="education" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Education
          </Typography>

          <Grid container spacing={4}>
            {educationData.map((edu, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
                      border: '1px solid rgba(0, 188, 212, 0.2)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <School sx={{ color: 'primary.main', mr: 2 }} />
                        <Typography variant="h5">
                          {edu.degree}
                        </Typography>
                      </Box>

                      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        {edu.institution}
                      </Typography>

                      <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                        {edu.duration}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        CGPA: {edu.cgpa}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Education;
