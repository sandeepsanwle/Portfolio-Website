import { Box, Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = 'service_8e52voj';
const TEMPLATE_ID = 'template_0uexxfc';
const PUBLIC_KEY = 'RFQ-cA1wT8sO58l-S';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const { getAnimationProps } = useResponsiveAnimation();

  // const onSubmit = (data: ContactFormData) => {
  //   console.log('Form submitted:', data);
  //   toast.success('Message sent successfully! I will get back to you soon.');
  //   reset();
  // };

  const onSubmit = async (data) => {
    try {
      // Send using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);

      toast.success('Message sent successfully! I will get back to you soon.');
      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 30% 20%, rgba(0, 188, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(63, 81, 181, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 }
          })}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                  fontWeight: 800,
                }}
              >
                Get In Touch
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
                sx={{ fontSize: '1.1rem' }}
              >
                Have a project in mind or want to collaborate? Let's talk!
              </Typography>
            </motion.div>
          </Box>

          {/* Form Card */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.3 }
            })}
          >
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                background: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, rgba(22, 25, 50, 0.9) 0%, rgba(15, 19, 40, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                border: (theme) =>
                  `1px solid ${
                    theme.palette.mode === 'dark'
                      ? 'rgba(0, 188, 212, 0.3)'
                      : 'rgba(0, 188, 212, 0.2)'
                  }`,
                boxShadow: (theme) =>
                  theme.palette.mode === 'dark'
                    ? '0 20px 60px rgba(0, 188, 212, 0.2)'
                    : '0 20px 60px rgba(0, 188, 212, 0.15)',
                backdropFilter: 'blur(20px)',
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
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <motion.div
                        {...getAnimationProps({
                          initial: { opacity: 0, x: -20 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.4, delay: 0.4 }
                        })}
                      >
                        <TextField
                          fullWidth
                          label="Your Name"
                          placeholder="John Doe"
                          {...register('name', { required: 'Name is required' })}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                              '&.Mui-focused fieldset': {
                                borderWidth: 2,
                              },
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <motion.div
                        {...getAnimationProps({
                          initial: { opacity: 0, x: 20 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.4, delay: 0.5 }
                        })}
                      >
                        <TextField
                          fullWidth
                          label="Your Email"
                          placeholder="john@example.com"
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                              '&.Mui-focused fieldset': {
                                borderWidth: 2,
                              },
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <motion.div
                        {...getAnimationProps({
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.4, delay: 0.6 }
                        })}
                      >
                        <TextField
                          fullWidth
                          label="Your Message"
                          placeholder="Tell me about your project..."
                          multiline
                          rows={6}
                          {...register('message', { required: 'Message is required' })}
                          error={!!errors.message}
                          helperText={errors.message?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                              '&.Mui-focused fieldset': {
                                borderWidth: 2,
                              },
                            },
                          }}
                        />
                      </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <motion.div
                        {...getAnimationProps({
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.4, delay: 0.7 },
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 }
                        })}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          endIcon={<Send />}
                          sx={{
                            background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                            py: 1.75,
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            boxShadow: '0 8px 24px rgba(0, 188, 212, 0.35)',
                            '&:hover': {
                              boxShadow: '0 12px 32px rgba(0, 188, 212, 0.5)',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
