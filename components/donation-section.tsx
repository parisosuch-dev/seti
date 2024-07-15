import { Button } from "./ui/button";

export default function DontationSection() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-8 px-4 sm:px-24 sm:space-y-0 py-16 sm:py-32">
      <h2 className="sm:w-1/2 text-4xl sm:text-6xl font-poppins font-medium text-center sm:text-left">
        We Are a Nonprofit Research Organization
      </h2>
      <div className="sm:w-1/2 flex flex-col items-center space-y-4 px-4 sm:px-12">
        <p className="text-md sm:w-3/4 sm:text-xl text-center sm:text-left">
          From microbes to alien intelligence, the SETI Institute is America’s
          only organization wholly dedicated to searching for life in the
          universe.
        </p>
        <Button>Make a difference</Button>
      </div>
    </div>
  );
}
