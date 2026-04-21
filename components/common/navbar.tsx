'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href: string) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ourcourses', label: 'Our Courses' },
    { href: '/aboutus', label: 'About Us' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    
  ];

  return (
    <nav className="w-full bg-primary text-white border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center md:justify-center items-center h-16 relative">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex gap-8 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 pb-2 border-b-2 ${
                  isActive(link.href)
                    ? 'text-secondary border-secondary'
                    : 'text-white border-transparent hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Absolute positioned */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 absolute right-4"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 rounded transition-all duration-200 font-medium ${
                  isActive(link.href)
                    ? 'bg-secondary text-white'
                    : 'text-white hover:bg-secondary hover:bg-opacity-20'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
