"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLenisInstance } from "@/lib/lenis";
import useScrollSpy from "@/lib/useScrollSpy";
import { PLAYGROUND_FIGMA_LINK } from "@/data/projects";

interface NavItem {
  id: string;
  label: string;
  pagePath?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work", pagePath: "/work" },
  { id: "values", label: "Values" },
  { id: "background", label: "Background" },
  { id: "references", label: "References" },
  { id: "about", label: "About", pagePath: "/about" },
  { id: "contact", label: "Contact" },
];

export const PENDING_SCROLL_KEY = "pendingScrollId";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(el);
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// The target section may not be mounted yet right after a cross-page navigation commits,
// so retry across a few frames instead of giving up after one. Uses native scrollIntoView
// (not Lenis) since Lenis hasn't recalculated document height for the new page yet at this point.
function scrollToIdWhenReady(id: string, attemptsLeft = 30): number {
  return requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (attemptsLeft > 0) {
      scrollToIdWhenReady(id, attemptsLeft - 1);
    }
  });
}

export default function SidebarNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useScrollSpy(isHome ? NAV_ITEMS.map((item) => item.id) : []);

  // Landing on "/" after navigating from another page (e.g. "Values" clicked from /about).
  // Uses sessionStorage instead of a URL hash so the address bar stays plain "/" and a
  // later reload of this tab always starts at Intro, not wherever was last visited.
  useEffect(() => {
    if (!isHome) return;
    const id = sessionStorage.getItem(PENDING_SCROLL_KEY);
    if (!id) return;
    sessionStorage.removeItem(PENDING_SCROLL_KEY);
    const raf = scrollToIdWhenReady(id);
    return () => cancelAnimationFrame(raf);
  }, [isHome, pathname]);

  return (
    <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
      <Link href="/" className="sidebar-nav__brand">
        Ama Dziedzom Barnor
      </Link>

      <div className="sidebar-nav__links">
        {NAV_ITEMS.map((item) => {
          if (isHome) {
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sidebar-nav__link ${activeSection === item.id ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(item.id);
                }}
              >
                {item.label}
              </a>
            );
          }

          if (item.pagePath) {
            return (
              <Link
                key={item.id}
                href={item.pagePath}
                className={`sidebar-nav__link ${pathname.startsWith(item.pagePath) ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          }

          return (
            <Link
              key={item.id}
              href="/"
              className="sidebar-nav__link"
              onClick={() => sessionStorage.setItem(PENDING_SCROLL_KEY, item.id)}
            >
              {item.label}
            </Link>
          );
        })}

        <a
          href={PLAYGROUND_FIGMA_LINK}
          className="sidebar-nav__link sidebar-nav__link--external"
          target="_blank"
          rel="noopener noreferrer"
        >
          Playground ↗
        </a>
      </div>
    </nav>
  );
}
