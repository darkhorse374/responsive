import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="space-y-12">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
        Une vision <span className="text-[#e6ff80]">360°</span>,
        <br />
        des action là où
        <br />
        l'impact
        <br />
        est <span className="text-[#e6ff80] relative">
          maximal
          <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#e6ff80]"></span>
        </span>
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-5 pt-4">
        <Button className="bg-white text-black hover:bg-gray-100 text-base font-medium rounded-full px-8 py-6 h-auto flex items-center">
          Discutons ensemble
          <span className="ml-2">→</span>
        </Button>
        <Button variant="outline" className="border-[#e6ff80] text-[#e6ff80] hover:bg-[#e6ff80] hover:text-black text-base font-medium rounded-full px-8 py-6 h-auto flex items-center">
          Voir nos case studies
          <span className="ml-2">→</span>
        </Button>
      </div>
    </div>
  );
}