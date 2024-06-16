import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-obsidian p-4 sm:p-16 flex flex-col sm:flex-col space-y-8 sm:space-y-8 items-center justify-between">
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
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
        <Link
          className="font-poppins font-medium hover:underline text-white"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
        <div className="flex flex-row space-x-2">
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
      <div className="text-white flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center space-x-0 text-center sm:text-left sm:space-x-8">
        <div>
          <p className="text-sm sm:text-md">SETI Institute</p>
          <p className="text-sm sm:text-md"> 339 Bernardo Ave, Suite 200</p>
          <p className="text-sm sm:text-md">
            {" "}
            Mountain View, CA 94043, United States
          </p>
        </div>
        <div>
          <p className="text-sm sm:text-md">Phone 650.961.6633</p>
          <p className="text-sm sm:text-md">Fax 650.961.7099</p>
        </div>
        <div className="text-white text-sm sm:text-md">
          <p>2024 SETI Institute All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <Link href="https://parisosuch.com" className="underline">
              Paris Osuch
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
