import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Scroll immediately to prevent flash of scrolled content
    handleScroll();

    // Scroll again on next frame in case of dynamic renders or route transitions
    const rafId = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
