import { useCallback, useEffect, useState } from "react";

export default function useWindowScroll() {
  const [scrollY, setScrollY] = useState<number | null>(null);
  const onScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return {
    scrollY
  }
}