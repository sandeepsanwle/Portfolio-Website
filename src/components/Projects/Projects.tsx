import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { Code } from '@mui/icons-material';
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';

const projects = [
  {
    title: 'PAYROLL',
    technologies: ['React', 'Bootstrap', 'Nodejs', 'ExpressJs', 'MongoDB', 'Git'],
    description: 'Streamline workforce management, scheduling, and HR processes with our Payroll System. Our user-friendly Salary Slip Generator ensures transparent and compliant salary distribution.',
    responsibilities: [
      'Developed and maintained the React-based front-end for the payroll application.',
      'Implemented responsive and intuitive UI for payroll and employee data management.',
      'Utilized ReactJs component-based architecture to create modular UI components.',
      'Integrated with MongoDB for efficient storage and retrieval of employee data and payroll records.',
    ],
  },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';
  const { getAnimationProps } = useResponsiveAnimation();

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced background accents */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? `
              radial-gradient(60% 40% at 20% 0%, rgba(0, 188, 212, 0.12) 0%, rgba(0,0,0,0) 60%),
              radial-gradient(50% 35% at 85% 20%, rgba(63, 81, 181, 0.12) 0%, rgba(0,0,0,0) 60%),
              radial-gradient(40% 30% at 50% 100%, rgba(102, 126, 234, 0.08) 0%, rgba(0,0,0,0) 60%)
            `
            : `
              radial-gradient(60% 40% at 20% 0%, rgba(0, 188, 212, 0.08) 0%, rgba(0,0,0,0) 60%),
              radial-gradient(50% 35% at 85% 20%, rgba(63, 81, 181, 0.08) 0%, rgba(0,0,0,0) 60%),
              radial-gradient(40% 30% at 50% 100%, rgba(102, 126, 234, 0.05) 0%, rgba(0,0,0,0) 60%)
            `,
          pointerEvents: 'none',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 188, 212, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(63, 81, 181, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <motion.div
              {...getAnimationProps({
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.5 }
              })}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Featured Projects
              </Typography>
            </motion.div>
            <motion.div
              {...getAnimationProps({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.2 }
              })}
            >
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  maxWidth: 600,
                  mx: 'auto',
                }}
              >
                Showcasing innovative solutions, cutting-edge technologies, and impactful results
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.title}>
                <motion.div
                  {...getAnimationProps({
                    initial: { opacity: 0, y: 50, scale: 0.95 },
                    whileInView: { opacity: 1, y: 0, scale: 1 },
                    viewport: { once: true, margin: "-50px" },
                    transition: { 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }
                  })}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(22, 25, 50, 0.85) 0%, rgba(15, 19, 40, 0.85) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                      backdropFilter: 'blur(20px)',
                      border: `1px solid ${
                        isDark
                          ? 'rgba(0, 188, 212, 0.3)'
                          : 'rgba(0, 188, 212, 0.2)'
                      }`,
                      borderRadius: 3,
                      boxShadow: isDark
                        ? '0 20px 60px rgba(0, 188, 212, 0.2), 0 0 0 1px rgba(0, 188, 212, 0.1) inset'
                        : '0 20px 60px rgba(0, 188, 212, 0.15), 0 0 0 1px rgba(0, 188, 212, 0.08) inset',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        borderColor: isDark
                          ? 'rgba(0, 188, 212, 0.5)'
                          : 'rgba(0, 188, 212, 0.4)',
                        boxShadow: isDark
                          ? '0 30px 80px rgba(0, 188, 212, 0.3), 0 0 0 1px rgba(0, 188, 212, 0.2) inset'
                          : '0 30px 80px rgba(0, 188, 212, 0.25), 0 0 0 1px rgba(0, 188, 212, 0.15) inset',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 5,
                        background: 'linear-gradient(90deg, #00bcd4 0%, #3f51b5 50%, #667eea 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'gradient 3s ease infinite',
                      },
                      '@keyframes gradient': {
                        '0%, 100%': {
                          backgroundPosition: '0% 50%',
                        },
                        '50%': {
                          backgroundPosition: '100% 50%',
                        },
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: { xs: 3, md: 4 },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        flexGrow: 1,
                      }}
                    >
                      {/* Title Section */}
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Box
                            sx={{
                              display: 'inline-flex',
                              p: 1.5,
                              borderRadius: 2.5,
                              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%)',
                              color: 'primary.main',
                              mr: 2,
                            }}
                          >
                            <Code sx={{ fontSize: { xs: 20, md: 24 } }} />
                          </Box>
                        </motion.div>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontWeight: 800,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 2, 
                          fontWeight: 500,
                          fontSize: { xs: '0.9rem', md: '0.95rem' },
                          lineHeight: 1.7,
                          color: 'text.secondary',
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            {...getAnimationProps({
                              initial: { opacity: 0, scale: 0.8 },
                              whileInView: { opacity: 1, scale: 1 },
                              viewport: { once: true },
                              transition: { duration: 0.3, delay: index * 0.1 + techIndex * 0.05 },
                              whileHover: { scale: 1.1, y: -2 }
                            })}
                          >
                            <Chip
                              label={tech}
                              size="small"
                              sx={{
                                background: isDark
                                  ? 'linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(63, 81, 181, 0.15) 100%)'
                                  : 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%)',
                                color: 'primary.main',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                border: `1px solid ${isDark ? 'rgba(0, 188, 212, 0.3)' : 'rgba(0, 188, 212, 0.2)'}`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)',
                                },
                              }}
                            />
                          </motion.div>
                        ))}
                      </Stack>

                      {/* Responsibilities */}
                      <Typography 
                        variant="body2" 
                        color="text.primary" 
                        sx={{ 
                          mb: 1.5, 
                          fontWeight: 700,
                          fontSize: { xs: '0.85rem', md: '0.9rem' },
                        }}
                      >
                        Key Responsibilities:
                      </Typography>

                      <Box 
                        component="ul" 
                        sx={{ 
                          pl: 2.5, 
                          mb: 'auto',
                          '& li::marker': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {project.responsibilities.map((resp, idx) => (
                          <motion.div
                            key={idx}
                            {...getAnimationProps({
                              initial: { opacity: 0, x: -10 },
                              whileInView: { opacity: 1, x: 0 },
                              viewport: { once: true },
                              transition: { duration: 0.4, delay: index * 0.1 + idx * 0.1 }
                            })}
                          >
                            <Typography
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              sx={{ 
                                mb: 1,
                                fontSize: { xs: '0.8rem', md: '0.85rem' },
                                lineHeight: 1.6,
                              }}
                            >
                              {resp}
                            </Typography>
                          </motion.div>
                        ))}
                      </Box>

                      {/* Action Buttons */}
                      <Stack direction="row" spacing={1.5} sx={{ mt: 'auto', pt: 2 }}>
                        <motion.div 
                          whileHover={{ scale: 1.05 }} 
                          whileTap={{ scale: 0.95 }}
                          style={{ flex: 1 }}
                        >
                          <Button 
                            variant="contained"
                            size="small"
                            fullWidth
                            sx={{
                              background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                              boxShadow: '0 6px 20px rgba(0, 188, 212, 0.35)',
                              fontWeight: 700,
                              py: 1,
                              fontSize: { xs: '0.8rem', md: '0.85rem' },
                              textTransform: 'none',
                              '&:hover': {
                                boxShadow: '0 10px 30px rgba(0, 188, 212, 0.5)',
                                background: 'linear-gradient(135deg, #00bcd4 20%, #3f51b5 120%)',
                              },
                            }}
                          >
                            View Code
                          </Button>
                        </motion.div>
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
