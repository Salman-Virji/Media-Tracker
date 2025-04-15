"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import React, { useState } from "react";
import { fetchTrendingTV } from "@/lib/api/tmbd";

export function HeroCards() {
  const plugin = React.useRef<any>(null);
  const [shows, setShows] = useState<any[]>([]);

  React.useEffect(() => {
    plugin.current = Autoplay({ delay: 2000, stopOnInteraction: true });
    fetchTrendingTV().then(setShows);
  }, []);

  return (
    <div className="w-full ">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={plugin.current ? [plugin.current] : []}
        onMouseEnter={() => plugin.current?.stop()}
        onMouseLeave={() => plugin.current?.reset()}
        className="w-full overflow-hidden"
      >
        <CarouselContent className=" ">
          {shows.map((show) => (
            <CarouselItem className="sm:basis-full md:basis-1/2 xl:basis-1/4 2xl:basis-1/6">
              <div className="p-10">
                {/* <Card className="w-[200px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[375px] md:h-[450px] overflow-hidden"> */}
                <Card className="w-[200px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[375px] md:h-[450px] overflow-hidden border-hidden">
                  <CardContent className="h-full p-0">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                      alt={show.name}
                      className="object-contain w-full h-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
