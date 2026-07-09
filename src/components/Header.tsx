"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LogoLink } from "@/components/Logo";
import SiteContainer from "@/components/SiteContainer";
import ThemeToggle from "@/components/ThemeToggle";
import { aboutDropdown, company, navLinks } from "@/lib/data";
import { scrollToHashFromHref } from "@/lib/scroll";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isAboutActive = pathname === "/about" || pathname.startsWith("/about");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    setAboutOpen(false);
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleAboutLinkClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    setAboutOpen(false);
    setMobileOpen(false);

    if (pathname !== "/about" || !href.includes("#")) return;

    event.preventDefault();
    window.history.pushState(null, "", href);
    scrollToHashFromHref(href);
  }

  const navClass = (active: boolean) =>
    `rounded-sm px-2.5 py-2 text-sm font-medium transition-all duration-300 xl:px-4 ${
      active
        ? "bg-brand-cream text-brand-navy dark:bg-stone-800 dark:text-brand-gold"
        : "text-stone-600 hover:bg-brand-cream hover:text-brand-navy dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"
    }`;

  const mobileMenu =
    mobileOpen && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[100] md:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-stone-950/40"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <nav
              className="absolute inset-x-0 bottom-0 overflow-y-auto border-t border-brand-border bg-background shadow-2xl dark:border-stone-800"
              style={{ top: headerHeight }}
            >
              <div className="flex flex-col gap-1 p-4">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-4 py-3 text-sm font-medium text-stone-700 hover:bg-brand-cream dark:text-stone-200 dark:hover:bg-stone-800"
                >
                  Home
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between rounded-sm px-4 py-3 text-sm font-medium text-stone-700 hover:bg-brand-cream dark:text-stone-200 dark:hover:bg-stone-800"
                >
                  About Us
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileAboutOpen && (
                  <div className="ml-2 space-y-1 border-l-2 border-brand-gold pl-3">
                    <Link
                      href="/about"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-sm px-3 py-2 text-sm font-semibold text-brand-gold"
                    >
                      Full About Page
                    </Link>
                    {aboutDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(event) => handleAboutLinkClick(event, item.href)}
                        className="block rounded-sm px-3 py-2 text-sm text-stone-600 dark:text-stone-400"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-sm px-4 py-3 text-sm font-medium text-stone-700 hover:bg-brand-cream dark:text-stone-200 dark:hover:bg-stone-800"
                  >
                    {link.label}
                  </Link>
                ))}

                <a
                  href={`tel:${company.phone}`}
                  className="rounded-sm px-4 py-3 text-sm font-medium text-stone-700 hover:bg-brand-cream dark:text-stone-200 dark:hover:bg-stone-800"
                >
                  Call {company.phone}
                </a>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-2 text-center"
                >
                  Get Your Free Quote
                </Link>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 border-b border-brand-border bg-background/90 backdrop-blur-md transition-shadow duration-300 dark:border-stone-800 ${
          scrolled ? "shadow-md shadow-stone-900/5" : ""
        }`}
      >
        <SiteContainer className="flex items-center justify-between gap-2 py-2.5 sm:py-4">
          <LogoLink size="md" />

          <nav className="hidden items-center gap-0.5 md:flex">
            <Link href="/" className={navClass(pathname === "/")}>
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 ${navClass(isAboutActive)}`}
                aria-expanded={aboutOpen}
              >
                About Us
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {aboutOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 w-[min(20rem,calc(100vw-2rem))] animate-fade-in rounded-lg border border-brand-border bg-background p-2 shadow-xl dark:border-stone-700 dark:bg-stone-900">
                  <div className="border-b border-brand-border px-3 py-2 dark:border-stone-700">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      About Rudra Manpower
                    </p>
                    <Link
                      href="/about"
                      className="mt-1 block text-sm font-semibold text-brand-gold transition hover:text-brand-gold-dark"
                      onClick={() => setAboutOpen(false)}
                    >
                      View full About page →
                    </Link>
                  </div>
                  <ul className="max-h-[60vh] overflow-y-auto py-1">
                    {aboutDropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={(event) => handleAboutLinkClick(event, item.href)}
                          className="block rounded-sm px-3 py-2.5 transition hover:bg-brand-cream dark:hover:bg-stone-800"
                        >
                          <span className="text-sm font-medium text-brand-navy dark:text-stone-100">
                            {item.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-stone-500 dark:text-stone-400">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link key={link.href} href={link.href} className={navClass(active)}>
                  {link.label}
                </Link>
              );
            })}

            <ThemeToggle className="ml-1 xl:ml-2" />

            <Link href="/contact" className="btn-primary ml-1 whitespace-nowrap !px-4 !py-2 xl:ml-2 xl:!px-5 xl:!py-2.5">
              Get in Touch
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-sm p-2 text-brand-navy dark:text-stone-100"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </SiteContainer>
      </header>

      {mobileMenu}
    </>
  );
}
