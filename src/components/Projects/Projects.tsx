import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Code } from '@mui/icons-material';

const projects = [
  {
    title: 'JOB-PORTAL',
    duration: 'Jul 2023 - Dec 2023',
    technologies: ['Angular', 'Angular Material', 'ExpressJs', 'MySQL', 'Git'],
    description: 'Developed a robust job-portal system connecting job seekers and employers.',
    responsibilities: [
      'Designed and implemented responsive Angular front-end interfaces for a streamlined user experience.',
      'Built and integrated RESTful APIs using ExpressJS and MySQL to support core features (job posting, user profiles, applications, filters).',
      'Ensured cross-browser compatibility and optimized performance across platforms.',
    ],
  },
  {
    title: 'MEDICAL WRITING',
    duration: 'Mar 2024 - Oct 2024',
    technologies: ['Angular', 'Angular Material', 'Express', 'NestJs', 'PostgreSQL', 'Git'],
    description: 'Automated end-to-end medical documentation workflows required for drug-approval processes.',
    responsibilities: [
      'Developed dynamic and reusable Angular components to support document-creation workflows and interactive UI features.',
      'Implemented secure and scalable RESTful APIs using NestJS, handling document generation logic, versioning, and audit tracking.',
      'Collaborated with domain experts and QA teams to ensure the system met the rigorous standards required for medical-compliance documentation.',
    ],
  },
  {
    title: 'DYNAMIC FEEDBACK | @Korn Ferry',
    duration: 'Jan 2025 - Present',
    technologies: ['ReactJs', 'Zustand', 'Material UI', 'Nodejs', 'ExpressJs', 'MySQL', 'Git', 'Docker'],
    description: 'Contributed to the enhancement and optimization of Korn Ferry\'s Dynamic Feedback platform — a system designed to collect, organize, and analyze performance feedback securely across organizational levels.',
    responsibilities: [
      'Collaborated on full-stack development to enhance and maintain key platform modules within the existing Korn Ferry ecosystem.',
      'Improved and refactored responsive ReactJS interfaces using Material UI and Zustand for efficient state management and smooth user interactions.',
      'Integrated third-party analytics (Pendo) for user engagement tracking and actionable insights.',
      'Contributed to codebase modernization — including migration from JavaScript to TypeScript and restructuring from a monorepo to service-based repositories for scalability and maintainability.',
    ],
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12 }} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
                      border: '1px solid rgba(0, 188, 212, 0.2)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Code sx={{ color: 'primary.main', mr: 2 }} />
                        <Typography variant="h4">
                          {project.title}
                        </Typography>
                      </Box>

                      <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                        {project.duration}
                      </Typography>

                      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(0, 188, 212, 0.1)',
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>

                      <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                        {project.description}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 600 }}>
                        Key Responsibilities:
                      </Typography>

                      <Box component="ul" sx={{ pl: 2 }}>
                        {project.responsibilities.map((resp, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                          >
                            {resp}
                          </Typography>
                        ))}
                      </Box>
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

export default Projects;
