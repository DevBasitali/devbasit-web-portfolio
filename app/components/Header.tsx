'use client'

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex h-14 items-center justify-between">
      <div className="flex items-center justify-between w-full">
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold text-lg">Dev Basit Ali</span>
          </a>
          <button
        className="sm:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
          {/* <nav className="flex items-center space-x-6 text-sm font-medium sm:block"> */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex sm:items-center sm:space-x-6 text-sm font-medium`}>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
