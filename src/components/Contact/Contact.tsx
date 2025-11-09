import { Box, Container, Typography, TextField, Button, Grid, Card, CardContent, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Email, Phone, LinkedIn } from '@mui/icons-material';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'sandeepsanwle74@gmail.com',
    link: 'mailto:sandeepsanwle74@gmail.com',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+91-7898318114',
    link: 'tel:+917898318114',
  },
  {
    icon: <LinkedIn />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/sandeepsanwle',
    link: 'https://www.linkedin.com/in/sandeepsanwle',
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! I will get back to you soon.');
    reset();
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{ mb: 6, textAlign: 'center' }}>
            Get In Touch
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      component="a"
                      href={info.link}
                      target={info.title === 'LinkedIn' ? '_blank' : undefined}
                      rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      sx={{
                        textDecoration: 'none',
                        background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
                        border: '1px solid rgba(0, 188, 212, 0.2)',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box sx={{ color: 'primary.main', mr: 2 }}>
                            {info.icon}
                          </Box>
                          <Typography variant="h6">
                            {info.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {info.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%)',
                    border: '1px solid rgba(0, 188, 212, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid container spacing={3}>
                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Name"
                            {...register('name', { required: 'Name is required' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                          />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Email"
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
                          />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={6}
                            {...register('message', { required: 'Message is required' })}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                          />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                              background: 'linear-gradient(135deg, #00bcd4 0%, #3f51b5 100%)',
                              py: 1.5,
                            }}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
