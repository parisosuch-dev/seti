import Link from "next/link";

export default function GetInvolved() {
    return (
        <div className="w-full flex flex-col items-center justify-center space-y-8 px-4 sm:px-24 py-16 sm:py-32">
            <h2 className="sm:w-1/2 text-4xl sm:text-6xl font-poppins font-medium text-center">
                Get Involved
            </h2>
            <div className="flex flex-col w-full space-y-6">
                <div className="text-center transform transition duration-500 hover:scale-110">
                    <Link href='#' className="text-2xl bg-obsidian p-2 text-white rounded-lg">Attend an Event</Link>
                </div>
                <div className="text-center transform transition duration-500 hover:scale-110">
                    <Link href='#' className="text-2xl bg-obsidian p-2 text-white rounded-lg">Listen to a Podcast</Link>
                </div>
                <div className="text-center transform transition duration-500 hover:scale-110">
                    <Link href='#' className="text-2xl bg-obsidian p-2 text-white rounded-lg">Become a PI or Affiliate</Link>
                </div>
            </div>
        </div>
    )
}