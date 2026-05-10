import Hero from '@/components/Hero';
import Intro from '@/components/sections/Intro';
import Background from '@/components/sections/Background';
import TheoriesGrid from '@/components/sections/TheoriesGrid';
import StrongestTheory from '@/components/sections/StrongestTheory';
import ModernEvidence from '@/components/sections/ModernEvidence';
import WorksCited from '@/components/sections/WorksCited';
import ImageCredits from '@/components/sections/ImageCredits';
import CardStack from '@/components/CardStack';

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <CardStack>
        <Intro />
        <Background />
        <TheoriesGrid />
        <StrongestTheory />
        <ModernEvidence />
        <WorksCited />
        <ImageCredits />
      </CardStack>
    </main>
  );
}
