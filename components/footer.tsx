import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-obsidian p-2 sm:p-16 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
        <div className="flex flex-row space-x-4">
          <Link
            className="font-poppins font-medium hover:underline text-white"
            href="media-contact"
          >
            For Media
          </Link>
          <Link
            className="font-poppins font-medium hover:underline text-white"
            href="jobs"
          >
            Jobs
          </Link>
          <Link
            className="font-poppins font-medium hover:underline text-white"
            href="contact"
          >
            Contact
          </Link>
          <Link
            className="font-poppins font-medium hover:underline text-white"
            href="give-now"
          >
            Give Now
          </Link>
        </div>

        <div className="flex flex-row space-x-2 sm:space-x-4">
          <Link href="#">
            <FaFacebookF color="white" className="w-6 h-6" />
          </Link>
          <Link href="#">
            <FaYoutube color="white" className="w-6 h-6" />
          </Link>
          <Link href="#">
            <FaInstagram color="white" className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="text-white flex flex-row items-center space-x-8">
        <div>
          <p className="text-xs sm:text-sm">SETI Institute</p>
          <p className="text-xs sm:text-sm"> 339 Bernardo Ave, Suite 200</p>
          <p className="text-xs sm:text-sm">
            {" "}
            Mountain View, CA 94043, United States
          </p>
        </div>
        <div>
          <p className="text-xs sm:text-sm">Phone 650.961.6633</p>
          <p className="text-xs sm:text-sm">Fax 650.961.7099</p>
        </div>
      </div>
    </div>
  );
}
