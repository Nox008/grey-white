// /components/layout/Header.tsx

'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// SVG Icon Components
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);


export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-20 border-b border-border-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main flex container with gap for spacing */}
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo / Firm Name: now flexible and can shrink/truncate */}
            <div className="flex-1 min-w-0">
              <Link 
                href="/" 
                className="text-xl font-heading font-bold text-text-primary truncate"
                onClick={() => isMenuOpen && handleLinkClick()}
              >
                Grey White Space Designs
              </Link>
            </div>
            
            {/* Desktop Navigation: will not shrink */}
            <nav className="hidden md:flex md:space-x-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "font-sans text-sm font-medium transition-colors hover:text-text-primary",
                    pathname === link.href ? "text-text-primary" : "text-text-primary/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button: will not shrink */}
            <div className="flex items-center justify-end md:hidden flex-shrink-0">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label="Toggle menu"
                className="p-2"
              >
                {isMenuOpen ? <CloseIcon className="text-text-primary" /> : <MenuIcon className="text-text-primary" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-10 bg-background transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20">
          <nav>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "block w-full text-center py-4 text-2xl font-heading transition-colors",
                  pathname === link.href ? "text-text-primary" : "text-text-primary/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}