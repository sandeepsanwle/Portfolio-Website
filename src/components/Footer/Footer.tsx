import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import { Email, LinkedIn, Phone, ArrowUpward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        borderTop: (theme) =>
          `1px solid ${
            theme.palette.mode === 'dark'
              ? 'rgba(0, 188, 212, 0.2)'
              : 'rgba(0, 188, 212, 0.15)'
          }`,
      }}
    >
      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(0, 188, 212, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(63, 81, 181, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main footer content */}
        <Box sx={{ py: 6 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={4}
          >
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Sandeep Sanwle
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 320 }}>
                  Full Stack Developer crafting exceptional digital experiences with modern technologies
                </Typography>
              </Box>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: 'text.primary',
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Connect with me
                </Typography>
                <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  <motion.div whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      component="a"
                      href="mailto:sandeepsanwle74@gmail.com"
                      sx={{
                        bgcolor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(0, 188, 212, 0.1)'
                            : 'rgba(0, 188, 212, 0.08)',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(0, 188, 212, 0.2)'
                              : 'rgba(0, 188, 212, 0.15)',
                          boxShadow: '0 4px 16px rgba(0, 188, 212, 0.3)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Email />
                    </IconButton>
                  </motion.div>

                  <motion.div whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      component="a"
                      href="tel:+917898318114"
                      sx={{
                        bgcolor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(0, 188, 212, 0.1)'
                            : 'rgba(0, 188, 212, 0.08)',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(0, 188, 212, 0.2)'
                              : 'rgba(0, 188, 212, 0.15)',
                          boxShadow: '0 4px 16px rgba(0, 188, 212, 0.3)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Phone />
                    </IconButton>
                  </motion.div>

                  <motion.div whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      component="a"
                      href="https://www.linkedin.com/in/sandeepsanwle"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(0, 188, 212, 0.1)'
                            : 'rgba(0, 188, 212, 0.08)',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(0, 188, 212, 0.2)'
                              : 'rgba(0, 188, 212, 0.15)',
                          boxShadow: '0 4px 16px rgba(0, 188, 212, 0.3)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </motion.div>
                </Stack>
              </Box>
            </motion.div>

            {/* Back to top button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: 'text.primary',
                  }}
                >
                  Back to Top
                </Typography>
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}>
                  <IconButton
                    onClick={scrollToTop}
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'rgba(0, 188, 212, 0.1)'
                          : 'rgba(0, 188, 212, 0.08)',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: (theme) =>
                          theme.palette.mode === 'dark'
                            ? 'rgba(0, 188, 212, 0.2)'
                            : 'rgba(0, 188, 212, 0.15)',
                        boxShadow: '0 4px 16px rgba(0, 188, 212, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <ArrowUpward />
                  </IconButton>
                </motion.div>
              </Box>
            </motion.div>
          </Stack>
        </Box>

        <Divider
          sx={{
            borderColor: (theme) =>
              theme.palette.mode === 'dark'
                ? 'rgba(0, 188, 212, 0.15)'
                : 'rgba(0, 188, 212, 0.1)',
          }}
        />

        {/* Bottom bar */}
        <Box sx={{ py: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                © {new Date().getFullYear()} Sandeep Sanwle. All rights reserved.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                Built with React, TypeScript & Material-UI
              </Typography>
            </motion.div>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
