'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function HeroSection() {

    
  return (
    <section className="w-full py-24 bg-background text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Track your media easily
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
          Keep a backlog of your favorite TV shows, anime, movies, and games.
        </p>

        <Button asChild size="lg" className="mb-12">
          <Link href="/dashboard">Get Started</Link>
        </Button>

        
      </div>
    </section>
  );
}


