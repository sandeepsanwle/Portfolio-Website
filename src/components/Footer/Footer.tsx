import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'background.paper',
        borderTop: '1px solid rgba(0, 188, 212, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Sandeep Sanwle. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="mailto:sandeepsanwle74@gmail.com"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <Email />
            </IconButton>
            
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/sandeepsanwle"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
