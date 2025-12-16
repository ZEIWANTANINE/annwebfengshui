import AnnEnergySets from "@/app/components/AnnEnergySets";
import BrandStory from "@/app/components/BrandStory";
import CTA from "@/app/components/CTA";
import CraftAndAuthenticity from "@/app/components/CraftAndAuthenticity";
import EnergyFinder from "@/app/components/EnergyFinder";
import Hero from "@/app/components/Hero";
import MotionWrap from "@/app/components/MotionWrap";
import ProductGallery from "@/app/components/ProductGallery";
import SocialProof from "@/app/components/SocialProof";

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      {/* 1. Hero Section: Captures attention with a strong visual and message. */}
      <Hero />

      {/* 2. Brand Story: Builds an emotional connection and introduces the "why". */}
      <MotionWrap>
        <BrandStory />
      </MotionWrap>

      {/* 3. Craft & Authenticity: Establishes trust and highlights product quality. */}
      <CraftAndAuthenticity />

      {/* 4. Product Gallery: Showcases the products now that context is established. */}
      <MotionWrap>
        <ProductGallery />
      </MotionWrap>

      {/* 5. Ann Energy Sets: Presents curated, higher-value product collections. */}
      <MotionWrap>
        <AnnEnergySets />
      </MotionWrap>

      {/* 6. Energy Finder: Engages users with an interactive discovery tool. */}
      

      {/* 7. Social Proof: Reinforces purchase decisions with testimonials. */}
      <MotionWrap>
        <SocialProof />
      </MotionWrap>

      {/* 8. CTA: Drives conversion with a clear call-to-action. */}
      <MotionWrap>
        <CTA />
      </MotionWrap>
    </div>
  );
}
