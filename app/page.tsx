import { Navigation } from '@/components/ui/navigation';
import { HeroContainer } from '@/components/home/hero-container';
import { PartnersSection } from '@/components/home/partners-section';
import { FeaturesSection } from '@/components/home/features-section';
import { ServicesSection } from '@/components/home/services-section';
import { TeamSection } from '@/components/home/team-section';
import { PartnershipsSection } from '@/components/home/partnerships-section';
import { MethodologySection } from '@/components/home/methodology-section';
import { CaseStudiesSection } from '@/components/home/case-studies-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FaqSection } from '@/components/home/faq-section';
import Blog from '@/components/home/Blog';
import { Confiance } from '@/components/home/confiance';

export default function Home() {
  return (
    <main className="relative">
      <div className='headerbackgroundDesktop'>
        <Navigation />
        <HeroContainer />
      </div>
      <PartnersSection />

      <FeaturesSection />

      <ServicesSection />

      {/* <TeamSection /> */}

      <PartnershipsSection />

      <MethodologySection />

      <CaseStudiesSection />

      <TestimonialsSection />

      <FaqSection />

      <Blog />

      <Confiance />
    </main>
  );
}