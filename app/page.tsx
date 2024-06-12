import Starfield from "@/components/star-field";

export default function Home() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-white text-9xl text-center font-poppins font-black">
          DO THE STARS GAZE BACK?
        </h1>
      </div>
    </div>
  );
}
