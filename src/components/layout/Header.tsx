// /components/layout/Header.tsx

'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
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

// SVG Icon Components (no changes)
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);


export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  
  const isTransparent = !hasScrolled && !isMenuOpen && pathname === '/';
  const headerBg = isTransparent ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm border-b border-border-accent';
  const textColor = isTransparent ? 'text-white' : 'text-text-primary';
  const logoSrc = isTransparent ? '/logo-ts.png' : '/logo.jpg';

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out",
        // ** FIX: Dynamically set z-index. Header is z-30 by default, but z-50 when menu is open
        // to ensure the close button is on top of the menu overlay.
        isMenuOpen ? 'z-50' : 'z-30',
        headerBg
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            <div className="flex-1 min-w-0">
              <Link href="/" aria-label="Homepage" onClick={() => isMenuOpen && handleLinkClick()}>
                <Image
                  src={logoSrc} 
                  alt="Grey White Space Designs Logo"
                  width={160}
                  height={32}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            
            <nav className="hidden md:flex md:space-x-8 flex-shrink-0">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn("font-sans text-sm font-medium transition-colors hover:opacity-80", textColor, pathname === link.href && !isTransparent ? "text-text-primary" : "" )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end md:hidden flex-shrink-0">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2">
                {/* When menu is open, the close icon must be dark to appear on the white menu background */}
                {isMenuOpen ? <CloseIcon className="text-text-primary" /> : <MenuIcon className={textColor} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* ** FIX: Mobile menu overlay z-index is raised to z-40 to be above all page content */}
      <div className={cn("fixed inset-0 z-40 bg-background transition-opacity duration-300 md:hidden", isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className="flex flex-col items-center justify-center h-full pt-20">
          <nav>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={cn( "block w-full text-center py-4 text-2xl font-heading transition-colors", pathname === link.href ? "text-text-primary" : "text-text-primary/70" )}
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