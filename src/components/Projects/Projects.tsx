import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Launch } from '@mui/icons-material';

const projects = [
  {
    title: 'JOB-PORTAL',
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
    <Box
      id="projects"
      sx={{
        py: 12,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle background accents */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(60% 40% at 20% 0%, rgba(0, 188, 212, 0.08) 0%, rgba(0,0,0,0) 60%),
            radial-gradient(50% 35% at 85% 20%, rgba(63, 81, 181, 0.08) 0%, rgba(0,0,0,0) 60%)
          `,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}
            >
              Projects
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Selected work showcasing engineering, UI, and scalability.
            </Typography>
          </Box>

          <Grid container spacing={4} alignItems="stretch">
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, rgba(22, 25, 50, 0.8) 0%, rgba(15, 19, 40, 0.8) 100%)'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                      border: (theme) =>
                        `1px solid ${
                          theme.palette.mode === 'dark'
                            ? 'rgba(0, 188, 212, 0.25)'
                            : 'rgba(0, 188, 212, 0.18)'
                        }`,
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 18px 40px rgba(0, 188, 212, 0.18)'
                          : '0 18px 40px rgba(0, 188, 212, 0.12)',
                      transition: 'all 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        borderColor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(0, 188, 212, 0.4)'
                            : 'rgba(0, 188, 212, 0.3)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        flexGrow: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            display: 'inline-flex',
                            p: 1.25,
                            borderRadius: 2,
                            bgcolor: 'rgba(0, 188, 212, 0.12)',
                            color: 'primary.main',
                            mr: 2,
                          }}
                        >
                          <Code />
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 800 }}>
                          {project.title}
                        </Typography>
                      </Box>

                      <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                        {project.description}
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

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 600 }}>
                        Key Responsibilities:
                      </Typography>

                      <Box component="ul" sx={{ pl: 2, mb: 'auto' }}>
                        {project.responsibilities.map((resp, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.75 }}
                          >
                            {resp}
                          </Typography>
                        ))}
                      </Box>

                      <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                        {/* <Button
                          variant="contained"
                          size="small"
                          endIcon={<Launch />}
                          sx={{
                            background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                            boxShadow: '0 6px 24px rgba(0, 188, 212, 0.35)',
                            fontWeight: 700,
                            '&:hover': {
                              boxShadow: '0 10px 30px rgba(0, 188, 212, 0.5)',
                            },
                          }}
                        >
                          Case Study
                        </Button> */}
                        <Button variant="outlined" size="small">
                          View Code
                        </Button>
                      </Stack>
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
