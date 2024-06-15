import DontationSection from "@/components/donation-section";
import JoinSection from "@/components/join-section";
import LandingHero from "@/components/landing-hero";
import NewsSection from "@/components/news-section";
import VideoSection from "@/components/video-section";

export default function Home() {
  return (
    <div className="h-full">
      <LandingHero />
      <VideoSection />
      <JoinSection />
      <NewsSection />
      <DontationSection />
    </div>
  );
}
