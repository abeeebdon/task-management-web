"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/70 backdrop-blur">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link href="#" className="font-semibold text-lg">
          Tasky
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground">
            Features
          </a>
          <a href="#benefits" className="hover:text-foreground">
            Benefits
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#cta" className="btn btn-primary">
            Get Started Free
          </a>
        </div>
        <button
          className="md:hidden btn btn-secondary"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container-prose py-4 space-y-4">
            <a href="#features" className="block">
              Features
            </a>
            <a href="#benefits" className="block">
              Benefits
            </a>
            <a href="#pricing" className="block">
              Pricing
            </a>
            <a href="#faq" className="block">
              FAQ
            </a>
            <div className="flex items-center gap-3 pt-2">
              <ThemeToggle />
              <a href="#cta" className="btn btn-primary w-full text-center">
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
