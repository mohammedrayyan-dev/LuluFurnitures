import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Case 1: Hash exists → scroll to section
    if (hash) {
      const id = hash.replace("#", "");

      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Try immediately
      if (scrollToElement()) return;

      // Retry until Home mounts
      const retry = setInterval(() => {
        if (scrollToElement()) clearInterval(retry);
      }, 50);

      return () => clearInterval(retry);
    }

    // Case 2: Normal route change → scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;