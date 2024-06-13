import Starfield from "@/components/star-field";

export default function Home() {
  return (
    <div className="h-full">
      <div className="h-1/2 sm:h-full bg-obsidian p-2 sm:p-0 flex flex-col items-center justify-center relative">
        <Starfield
          starCount={4000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <h1 className="text-white text-6xl sm:text-9xl text-center font-poppins font-black absolute">
          DO THE STARS GAZE BACK?
        </h1>
      </div>
      <div>
        <h2 className="bg-blue-900 h-[500px]">Some text content</h2>
      </div>
    </div>
  );
}
