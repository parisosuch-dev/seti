import LandingHero from "@/components/landing-hero";

export default function Home() {
  return (
    <div className="h-full">
      <div>
        <LandingHero />
        <div className="flex flex-col-reverse sm:flex-row w-full items-center justify-end">
          <iframe
            src="https://player.vimeo.com/video/866455832?h=3a0f40ae44&title=0&byline=0&portrait=0"
            width="640"
            height="360"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo video player"
            className="h-[240px] w-[426px] sm:h-[360px] sm:w-[640px] p-4"
          />
          <h2 className="sm:w-1/2 text-4xl sm:text-6xl text-center font-poppins font-medium p-4">
            Finding Life Beyond Earth is No Longer a Dream
          </h2>
        </div>
      </div>
    </div>
  );
}
