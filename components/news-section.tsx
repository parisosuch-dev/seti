import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NewsSection() {
  interface NewsArticle {
    image: string;
    title: string;
    date: string;
  }

  const articles: NewsArticle[] = [
    {
      title: "Earth at the Crossroads II",
      image: "/images/earth_at_the_crossroads_header_1920x1080-4.jpg",
      date: "Jun 13 2024",
    },
    {
      title: "Close Encounters of the Rocky Kind: An Asteroid Day Flyby",
      image: "/images/DefenseMain_1024x1024.jpg",
      date: "Jun 12 2024",
    },
    {
      title:
        "SETI Institute Technosignature Science and Technology Grants Program",
      image: "/images/technosearch-1024x600.jpg",
      date: "Jun 12 2024",
    },
    // {
    //   title: 'Decoding the Message from "A Sign in Space": A Year-Long Journey',
    //   image: "/images/A Sign in Space.jpg",
    //   date: "Jun 11 2024",
    // },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 sm:px-12 py-4 sm:py-12">
      <h2 className="text-4xl sm:text-6xl font-poppins font-medium text-center">
        News
      </h2>
      <div className="grid grid-col-1 sm:grid-cols-3 w-full justify-items-center gap-y-4 pt-4 sm:pt-8">
        {articles.map((artcile) => (
          <div
            key={artcile.title}
            className="flex flex-col items-center space-y-2 h-full hover:translate-y-[-10px] transform transition-transform duration-300 ease-in-out"
          >
            <div className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] relative">
              <Image
                src={artcile.image}
                alt="Cannot Find Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-[300px] sm:w-[400px]">
              <Badge variant="secondary">{artcile.date}</Badge>
              <h3 className="text-md sm:text-xl font-medium hover:underline font-poppins">
                {artcile.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8 flex flex-row group items-center justify-center space-x-1">
        <Link className="font-medium group-hover:underline" href="/news">
          More
        </Link>
        <ArrowLongRightIcon className="block h-6 w-6 group-hover:translate-x-1 transform ease-in-out duration-200" />
      </div>
    </div>
  );
}
