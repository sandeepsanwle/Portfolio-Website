import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Cloud } from '@mui/icons-material';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code />,
    skills: ['JavaScript', 'TypeScript', 'ReactJS', 'Angular'],
  },
  {
    title: 'Backend',
    icon: <Cloud />,
    skills: ['NodeJS', 'Express', 'NestJs'],
  },
  {
    title: 'Database & Tools',
    icon: <Storage />,
    skills: ['MySQL', 'MongoDB', 'Git'],
  },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Technical Skills
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={category.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                    }}
                  >
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
                      {category.icon}
                    </Box>
                    
                    <Typography variant="h5" sx={{ mb: 3 }}>
                      {category.title}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            bgcolor: 'rgba(0, 188, 212, 0.1)',
                            color: 'primary.main',
                            fontWeight: 600,
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
