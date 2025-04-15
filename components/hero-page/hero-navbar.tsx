// components/hero-navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
//import { ModeToggle } from "@/components/theme-toggle"; // if you have dark/light mode
import Link from "next/link";

export function HeroNavbar() {
  return (
    <header className="w-full py-4 border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left: Logo/Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          MediaTracker
        </Link>

        {/* Right: Links + Actions */}
        <div className="flex items-center gap-4">
          <Link href="#features" className="text-sm hover:underline">Discover</Link>
          <Link href="https://github.com/yourusername/mediatrackr" target="_blank" className="text-sm hover:underline">GitHub</Link>
          
          {/* <ModeToggle /> */}
          
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
