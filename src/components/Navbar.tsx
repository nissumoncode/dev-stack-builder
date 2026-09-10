import { useState } from "react";
import logoText from "../assets/logo-text.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mr-3 rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Brand */}
        <a href="#" className="flex items-center lg:min-w-[180px]">
          <img
            src={logoText}
            alt="Dev Stack"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#D834C2]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-[#D834C2]">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="ml-auto flex items-center gap-1 lg:hidden">
          <button className="px-2 py-2 text-xs font-medium text-slate-700">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-3 py-2 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 last:border-b-0 hover:text-[#D834C2]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
