import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';

/**
 * Hook to provide responsive animation configurations
 * Disables scroll-triggered animations on mobile devices to prevent janky/hang effects
 */
export const useResponsiveAnimation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const config = useMemo(() => {
    if (isMobile) {
      // On mobile: no animations, elements appear immediately
      return {
        initial: {},
        animate: {},
        whileInView: {},
        viewport: {},
        transition: {},
      };
    }

    // On desktop: return null to allow components to use their own animations
    return null;
  }, [isMobile]);

  return { 
    isMobile, 
    config,
    // Helper function to get animation props conditionally
    getAnimationProps: (desktopProps: any) => {
      return isMobile ? config : desktopProps;
    }
  };
};

