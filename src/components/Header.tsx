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

const primaryNav = [
  { href: "/about", label: "About" },
  ...navLinks.filter((link) => link.href !== "/" && link.href !== "/contact"),
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
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
    `relative px-3.5 py-2.5 text-[15px] font-semibold tracking-wide text-stone-700 transition-colors duration-200 hover:text-brand-navy xl:px-4 dark:text-stone-300 dark:hover:text-white ${
      active
        ? "text-brand-navy after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:bg-brand-gold dark:text-white"
        : ""
    }`;

  const mobileMenu =
    mobileOpen && mounted
      ? createPortal(
          <div className="fixed inset-0 z-[100] lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-stone-950/40"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <nav
              className="absolute inset-x-0 bottom-0 overflow-y-auto border-t border-brand-border bg-white dark:border-stone-800 dark:bg-stone-950"
              style={{ top: headerHeight }}
            >
              <div className="flex flex-col gap-0.5 p-5">
                {primaryNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-sm px-3 py-3 text-base font-medium ${
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? "text-brand-gold"
                        : "text-stone-800 dark:text-stone-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="my-3 border-t border-brand-border dark:border-stone-800" />

                {aboutDropdown.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleAboutLinkClick(event, item.href)}
                    className="rounded-sm px-3 py-2 text-sm text-stone-500 dark:text-stone-400"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-4 flex items-center justify-between gap-3">
                  <ThemeToggle />
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary flex-1 text-center"
                  >
                    Contact
                  </Link>
                </div>

                <a
                  href={`tel:${company.phone}`}
                  className="mt-2 px-3 py-2 text-center text-sm text-stone-500"
                >
                  Call {company.phone}
                </a>
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
        className={`sticky top-0 z-50 border-b border-brand-border/80 bg-white/90 backdrop-blur-md transition-shadow duration-300 dark:border-stone-800 dark:bg-stone-950/90 ${
          scrolled ? "shadow-sm shadow-stone-900/5" : ""
        }`}
      >
        <SiteContainer className="flex h-[4.5rem] items-center justify-between gap-6 sm:h-20 lg:h-[5.25rem]">
          <LogoLink size="lg" />

          <nav className="hidden items-center gap-1 lg:flex">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                onMouseEnter={() => setAboutOpen(true)}
                className={`flex items-center gap-1.5 ${navClass(isAboutActive)}`}
                aria-expanded={aboutOpen}
              >
                About
                <svg
                  className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {aboutOpen && (
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-56 animate-fade-in rounded-md border border-brand-border bg-white py-2 shadow-lg dark:border-stone-700 dark:bg-stone-900"
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <Link
                    href="/about"
                    className="block px-4 py-2.5 text-[15px] font-medium text-brand-navy hover:bg-brand-surface dark:text-stone-100 dark:hover:bg-stone-800"
                    onClick={() => setAboutOpen(false)}
                  >
                    Overview
                  </Link>
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleAboutLinkClick(event, item.href)}
                      className="block px-4 py-2.5 text-[15px] text-stone-600 hover:bg-brand-surface hover:text-brand-navy dark:text-stone-300 dark:hover:bg-stone-800"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {primaryNav
              .filter((link) => link.href !== "/about")
              .map((link) => {
                const active =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link key={link.href} href={link.href} className={navClass(active)}>
                    {link.label}
                  </Link>
                );
              })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle className="!h-11 !w-11 border-0 bg-transparent hover:bg-brand-surface dark:hover:bg-stone-900" />
            <Link href="/contact" className="btn-primary !px-6 !py-3 text-[15px] font-semibold">
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-brand-navy lg:hidden dark:text-stone-100"
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
        </SiteContainer>
      </header>

      {mobileMenu}
    </>
  );
}
