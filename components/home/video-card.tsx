import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export function VideoCard() {
  return (
    <div className="bg-gray-900 rounded-[35px] overflow-hidden">
      <div className="relative aspect-[16/9]">
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
          alt="Professional working on tablet"
          className="w-full h-full object-cover brightness-85"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-[3px] border-white hover:scale-110 transition-transform"
          >
            <Play className="w-12 h-12 text-white fill-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}