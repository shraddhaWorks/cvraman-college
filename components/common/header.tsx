'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="flex justify-center items-center py-4 px-4 sm:py-6 sm:px-8">
        <div className="w-full max-w-7xl flex justify-center">
          <Image
            src="/cvrt-logo-2025.webp"
            alt="CVRT College Logo"
            width={200}
            height={80}
            priority
            className="h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </header>
  );
}
