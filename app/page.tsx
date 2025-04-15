import { HeroCards } from "@/components/hero-page/hero-cards";
import { HeroNavbar } from "@/components/hero-page/hero-navbar";
import { HeroSection } from "@/components/hero-page/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  return (
    
    <div>
      <HeroNavbar></HeroNavbar>
      <HeroSection></HeroSection>
      <HeroCards></HeroCards>
      {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        
      </div> */}
    </div>
  );
}
