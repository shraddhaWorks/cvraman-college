'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-background pb-12">
          
          {/* --- Column 1: Brand & About --- */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold font-heading">
              SIR C.V RAMAN <br />
              <span className="text-secondary text-lg">Junior Inter College</span>
            </h2>
            <p className="text-background text-sm leading-relaxed max-w-xs font-sans">
              Dedicated to providing world-class intermediate education in Anantapur, 
              focusing on academic rigor and holistic development.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="hover:text-secondary transition-colors" title="Facebook">📘</Link>
              <Link href="#" className="hover:text-secondary transition-colors" title="Instagram">📷</Link>
              <Link href="#" className="hover:text-secondary transition-colors" title="Twitter">𝕏</Link>
              <Link href="#" className="hover:text-secondary transition-colors" title="LinkedIn">💼</Link>
            </div>
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-secondary pl-3">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-background font-sans">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Academic Courses</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors">Admissions 2026</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Campus Gallery</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* --- Column 3: Courses --- */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-secondary pl-3">Our Streams</h3>
            <ul className="flex flex-col gap-3 text-background font-sans">
              <li className="hover:text-secondary cursor-default">MPC (Maths, Physics, Chemistry)</li>
              <li className="hover:text-secondary cursor-default">BiPC (Biology, Physics, Chemistry)</li>
              <li className="hover:text-secondary cursor-default">CEC (Civics, Economics, Commerce)</li>
              <li className="hover:text-secondary cursor-default">MEC (Maths, Economics, Commerce)</li>
            </ul>
          </div>

          {/* --- Column 4: Contact Info --- */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-secondary pl-3">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-background font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="text-sm">Main Road, Near Tower Clock, Anantapur, AP - 515001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-sm">info@cvramancollege.edu</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background text-xs">
          <p>© {currentYear} SIR C.V RAMAN Junior Inter College. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}