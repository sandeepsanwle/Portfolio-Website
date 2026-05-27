import { Box, Container, Typography, Grid, Chip, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Storage, Cloud } from '@mui/icons-material';
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: 'Frontend' | 'Backend' | 'Database & Tools';
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
  gradient: string;
  primaryColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code />,
    description: 'Building responsive and interactive user interfaces',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    primaryColor: '#667eea',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'ReactJS', level: 88 },
      { name: 'Angular', level: 82 },
    ],
  },
  {
    title: 'Backend',
    icon: <Cloud />,
    description: 'Developing scalable server-side applications and APIs',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    primaryColor: '#f5576c',
    skills: [
      { name: 'NodeJS', level: 87 },
      { name: 'Express', level: 85 },
      { name: 'NestJs', level: 80 },
    ],
  },
  {
    title: 'Database & Tools',
    icon: <Storage />,
    description: 'Managing data and version control systems',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    primaryColor: '#00f2fe',
    skills: [
      { name: 'MySQL', level: 83 },
      { name: 'MongoDB', level: 78 },
      { name: 'Git', level: 90 },
    ],
  },
];

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { getAnimationProps } = useResponsiveAnimation();

  return (
    <Box id="skills" sx={{ py: 12, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? 'radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(63, 81, 181, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(63, 81, 181, 0.05) 0%, transparent 50%)',
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
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
                  background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                Technical Skills
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
                sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
              >
                A comprehensive overview of my technical expertise and proficiency levels
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={category.title}>
                <motion.div
                  {...getAnimationProps({
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.6, delay: index * 0.15 },
                    whileHover: { y: -8 }
                  })}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: isDark
                        ? 'linear-gradient(135deg, rgba(22, 25, 50, 0.8) 0%, rgba(15, 19, 40, 0.8) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${isDark ? 'rgba(0, 188, 212, 0.2)' : 'rgba(0, 188, 212, 0.1)'}`,
                      borderRadius: 4,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: isDark
                          ? '0 20px 40px rgba(0, 188, 212, 0.2)'
                          : '0 20px 40px rgba(0, 188, 212, 0.15)',
                        borderColor: isDark ? 'rgba(0, 188, 212, 0.4)' : 'rgba(0, 188, 212, 0.3)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: category.gradient,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      {/* Icon Header */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Box
                          sx={{
                            display: 'inline-flex',
                            p: 2.5,
                            borderRadius: 3,
                            background: category.gradient,
                            color: 'white',
                            mb: 3,
                            boxShadow: `0 8px 20px ${category.gradient}40`,
                          }}
                        >
                          {category.icon}
                        </Box>
                      </motion.div>

                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1,
                          fontWeight: 700,
                          color: 'text.primary',
                        }}
                      >
                        {category.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 4, minHeight: 40 }}
                      >
                        {category.description}
                      </Typography>

                      {/* Skills List */}
                      <Box
                        sx={{
                          height: 280,
                          overflowY: 'auto',
                          overflowX: 'hidden',
                          pr: 1,
                          '&::-webkit-scrollbar': {
                            width: '6px',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                            borderRadius: '10px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            background: category.gradient,
                            borderRadius: '10px',
                            '&:hover': {
                              background: category.primaryColor,
                            },
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              {...getAnimationProps({
                                initial: { opacity: 0, x: -20 },
                                whileInView: { opacity: 1, x: 0 },
                                viewport: { once: true },
                                transition: { duration: 0.4, delay: index * 0.15 + skillIndex * 0.1 },
                                whileHover: { scale: 1.02 }
                              })}
                            >
                              <Box
                                sx={{
                                  p: 2,
                                  borderRadius: 2,
                                  bgcolor: isDark
                                    ? 'rgba(0, 188, 212, 0.05)'
                                    : 'rgba(0, 188, 212, 0.03)',
                                  border: `1px solid ${isDark ? 'rgba(0, 188, 212, 0.15)' : 'rgba(0, 188, 212, 0.1)'}`,
                                  transition: 'all 0.3s ease',
                                  '&:hover': {
                                    bgcolor: isDark
                                      ? 'rgba(0, 188, 212, 0.1)'
                                      : 'rgba(0, 188, 212, 0.05)',
                                    borderColor: isDark ? 'rgba(0, 188, 212, 0.3)' : 'rgba(0, 188, 212, 0.2)',
                                    transform: 'translateX(4px)',
                                  },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontWeight: 600,
                                    color: 'text.primary',
                                    mb: 1.5,
                                  }}
                                >
                                  {skill.name}
                                </Typography>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    gap: 0.5,
                                    alignItems: 'center',
                                  }}
                                >
                                  {[...Array(10)].map((_, i) => {
                                    const isFilled = i < Math.floor(skill.level / 10);
                                    return (
                                      <motion.div
                                        key={i}
                                        {...getAnimationProps({
                                          initial: { scale: 0 },
                                          whileInView: { scale: 1 },
                                          viewport: { once: true },
                                          transition: {
                                            duration: 0.2,
                                            delay: index * 0.15 + skillIndex * 0.1 + i * 0.02,
                                            type: 'spring',
                                            stiffness: 300,
                                          }
                                        })}
                                      >
                                        <Box
                                          sx={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            background: isFilled
                                              ? category.gradient
                                              : isDark
                                              ? 'rgba(255, 255, 255, 0.1)'
                                              : 'rgba(0, 0, 0, 0.1)',
                                            boxShadow: isFilled
                                              ? `0 0 8px ${category.primaryColor}60`
                                              : 'none',
                                            transition: 'all 0.3s ease',
                                          }}
                                        />
                                      </motion.div>
                                    );
                                  })}
                                </Box>
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional Skills Tags */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.5 }
            })}
          >
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography
                variant="h6"
                sx={{ mb: 3, color: 'text.secondary', fontWeight: 600 }}
              >
                Additional Technologies & Tools
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  justifyContent: 'center',
                }}
              >
                {['HTML5', 'CSS3', 'Material-UI', 'Tailwind CSS', 'REST APIs', 'PostgreSQL', 'Docker', 'Jest', 'Webpack', 'Vite'].map(
                  (tech, idx) => (
                    <motion.div
                      key={tech}
                      {...getAnimationProps({
                        initial: { opacity: 0, scale: 0.8 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true },
                        transition: { duration: 0.3, delay: 0.6 + idx * 0.05 },
                        whileHover: { scale: 1.1, y: -2 }
                      })}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          bgcolor: isDark
                            ? 'rgba(0, 188, 212, 0.15)'
                            : 'rgba(0, 188, 212, 0.1)',
                          color: 'primary.main',
                          fontWeight: 600,
                          border: `1px solid ${isDark ? 'rgba(0, 188, 212, 0.3)' : 'rgba(0, 188, 212, 0.2)'}`,
                          '&:hover': {
                            bgcolor: isDark
                              ? 'rgba(0, 188, 212, 0.25)'
                              : 'rgba(0, 188, 212, 0.15)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.2s ease',
                        }}
                      />
                    </motion.div>
                  )
                )}
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
