export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const el = document.getElementById(decodeURIComponent(id));
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function getHashId(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1);
}

export function scrollToHashFromHref(
  href: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const id = getHashId(href);
  if (!id) return false;
  return scrollToSection(id, behavior);
}

export function scrollToHashWithRetry(href: string, maxAttempts = 15): void {
  const id = getHashId(href);
  if (!id) return;

  let attempts = 0;
  const tryScroll = () => {
    const behavior: ScrollBehavior = attempts === 0 ? "auto" : "smooth";
    if (scrollToSection(id, behavior) || attempts++ >= maxAttempts) return;
    requestAnimationFrame(tryScroll);
  };

  tryScroll();
}
