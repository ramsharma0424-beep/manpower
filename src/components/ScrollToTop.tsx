"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHashWithRetry } from "@/lib/scroll";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const { hash, pathname: currentPath } = window.location;

    if (hash) {
      scrollToHashWithRetry(`${currentPath}${hash}`);
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    function onHashChange() {
      const { hash, pathname: currentPath } = window.location;
      if (hash) {
        scrollToHashWithRetry(`${currentPath}${hash}`);
      }
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
