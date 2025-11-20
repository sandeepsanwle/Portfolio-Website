import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const codeElements = [
  { text: '{ }', top: '10%', left: '5%', delay: 0, duration: 25 },
  { text: '</>', top: '15%', right: '8%', delay: 2, duration: 28 },
  { text: '( )', top: '70%', left: '10%', delay: 4, duration: 30 },
  { text: '[ ]', top: '75%', right: '12%', delay: 1, duration: 27 },
  { text: '=>', top: '25%', left: '15%', delay: 3, duration: 26 },
  { text: '<div>', top: '80%', left: '20%', delay: 5, duration: 29 },
  { text: 'const', top: '20%', right: '15%', delay: 2, duration: 24 },
  { text: 'function', top: '60%', right: '18%', delay: 4, duration: 31 },
  { text: 'npm', top: '35%', left: '8%', delay: 1, duration: 28 },
  { text: 'git', top: '85%', right: '10%', delay: 3, duration: 27 },
  { text: '< />', top: '40%', right: '5%', delay: 0, duration: 26 },
  { text: 'return', top: '50%', left: '12%', delay: 5, duration: 30 },
  { text: 'async', top: '30%', right: '20%', delay: 2, duration: 25 },
  { text: '...', top: '65%', left: '18%', delay: 4, duration: 29 },
  { text: 'class', top: '45%', left: '6%', delay: 1, duration: 27 },
];

const binaryStrings = [
  { text: '1010101', top: '12%', left: '25%', delay: 0, duration: 35 },
  { text: '0110100', top: '88%', left: '30%', delay: 3, duration: 38 },
  { text: '1100110', top: '22%', right: '25%', delay: 5, duration: 36 },
  { text: '0101011', top: '78%', right: '28%', delay: 2, duration: 40 },
  { text: '1001101', top: '55%', right: '22%', delay: 4, duration: 37 },
  { text: '0011010', top: '42%', left: '28%', delay: 1, duration: 39 },
];

const codeSnippets = [
  { text: 'console.log()', top: '18%', left: '3%', delay: 2, duration: 32, color: '#424242' },
  { text: 'import React', top: '72%', right: '6%', delay: 4, duration: 35, color: '#212121' },
  { text: 'export default', top: '38%', right: '3%', delay: 1, duration: 33, color: '#424242' },
  { text: 'useState()', top: '92%', left: '25%', delay: 5, duration: 36, color: '#212121' },
];

interface HeroBackgroundProps {
  mode: 'light' | 'dark';
}

const HeroBackground = ({ mode }: HeroBackgroundProps) => {
  const getBackgroundStyle = () => {
    if (mode === 'dark') {
      return {
        background: `linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(21, 25, 50, 0.9) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      };
    } else {
      return {
        background: `
          radial-gradient(circle at 15% 15%, rgba(0, 188, 212, 0.2) 0%, transparent 25%),
          radial-gradient(circle at 85% 20%, rgba(63, 81, 181, 0.18) 0%, transparent 30%),
          radial-gradient(circle at 25% 75%, rgba(92, 107, 192, 0.2) 0%, transparent 28%),
          radial-gradient(circle at 75% 85%, rgba(0, 151, 167, 0.15) 0%, transparent 32%),
          linear-gradient(180deg, #ffffff 0%, #f0f9ff 20%, #e0f2fe 50%, #f0f9ff 80%, #ffffff 100%)
        `,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 188, 212, 0.03) 0px,
              transparent 1px,
              transparent 40px,
              rgba(0, 188, 212, 0.03) 41px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(63, 81, 181, 0.03) 0px,
              transparent 1px,
              transparent 40px,
              rgba(63, 81, 181, 0.03) 41px
            ),
            repeating-linear-gradient(
              45deg,
              transparent 0px,
              transparent 80px,
              rgba(0, 188, 212, 0.02) 80px,
              rgba(0, 188, 212, 0.02) 81px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent 0px,
              transparent 80px,
              rgba(63, 81, 181, 0.02) 80px,
              rgba(63, 81, 181, 0.02) 81px
            )
          `,
          pointerEvents: 'none',
          animation: 'gridMove 30s linear infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1,
        },
        '@keyframes gridMove': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(40px, 40px)',
          },
        },
      };
    }
  };

  return (
    <>
      {/* Background Layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ...getBackgroundStyle(),
        }}
      />

      {/* Floating Code Elements - Only for Light Mode */}
      {mode === 'light' && (
        <>
          {codeElements.map((element, index) => (
            <Box
              key={`code-${index}`}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0.15, 0.4, 0.15],
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              sx={{
                position: 'absolute',
                ...(element.top && { top: element.top }),
                ...(element.left && { left: element.left }),
                ...(element.right && { right: element.right }),
                fontSize: { xs: '1.2rem', md: '1.8rem' },
                fontFamily: '"Fira Code", "Courier New", monospace',
                fontWeight: 600,
                color: '#616161',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            >
              {element.text}
            </Box>
          ))}
          
          {binaryStrings.map((binary, index) => (
            <Box
              key={`binary-${index}`}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.08, 0.2, 0.08],
                y: [-30, 30, -30],
              }}
              transition={{
                duration: binary.duration,
                delay: binary.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
              sx={{
                position: 'absolute',
                ...(binary.top && { top: binary.top }),
                ...(binary.left && { left: binary.left }),
                ...(binary.right && { right: binary.right }),
                fontSize: { xs: '0.7rem', md: '0.9rem' },
                fontFamily: '"Fira Code", "Courier New", monospace',
                color: '#757575',
                letterSpacing: '0.15em',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            >
              {binary.text}
            </Box>
          ))}

          {codeSnippets.map((snippet, index) => (
            <Box
              key={`snippet-${index}`}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: [0.12, 0.35, 0.12],
                x: [-20, 20, -20],
                y: [-15, 15, -15],
              }}
              transition={{
                duration: snippet.duration,
                delay: snippet.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              sx={{
                position: 'absolute',
                ...(snippet.top && { top: snippet.top }),
                ...(snippet.left && { left: snippet.left }),
                ...(snippet.right && { right: snippet.right }),
                fontSize: { xs: '0.65rem', md: '0.85rem' },
                fontFamily: '"Fira Code", "Courier New", monospace',
                color: snippet.color,
                fontWeight: 500,
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            >
              {snippet.text}
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default HeroBackground;

