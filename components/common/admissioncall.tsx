import React from 'react'
import Link from 'next/link';
export default function admissioncall() {
  return (
    <div >
       {/* Bottom Banner */}
          <div className="mt-20 relative p-8 md:p-12 rounded-[2.5rem] bg-primary text-white overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">Admissions Open for 2026-27</h3>
                <p className="text-white/80">Secure your seat in the most prestigious junior college in Anantapur.</p>
              </div>
              <Link href="/contact">
              <button className="px-10 py-4 bg-secondary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                Apply Now
              </button>
              </Link>
            </div>
          </div>
    </div>
  )
}
