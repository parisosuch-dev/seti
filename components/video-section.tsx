export default function VideoSection() {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center space-x-0 sm:space-x-32 py-16 sm:px-12 justify-between bg-gray-100">
      <h2 className="sm:w-1/2 text-4xl sm:text-6xl text-left font-poppins font-medium p-4">
        Finding Life Beyond Earth is No Longer a Dream
      </h2>
      <iframe
        src="https://player.vimeo.com/video/866455832?h=3a0f40ae44&title=0&byline=0&portrait=0"
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo video player"
        className="h-full w-full sm:h-[360px] sm:w-[640px] p-4"
      />
    </div>
  );
}
