import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import LandingHeader from "@/components/landing/landing-header";
import MovingText from "@/components/landing/moving-text";
import ThreeDModel from "@/components/landing/ThreeDModel";
import LearningPaths from "@/components/landing/learning-paths";
import Differences from "@/components/landing/differences";
import Sponsors from "@/components/landing/sponsors";

export default async function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <LandingHeader />
      <Hero />
      <MovingText />
      <Features />
      <Sponsors />
      <Differences />
      <LearningPaths />
      <ThreeDModel />
    </main>
  );
}
