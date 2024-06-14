import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function JoinSection() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 py-16">
      <div className="sm:w-1/2 text-left px-4 sm:px-12 sm:space-y-2 flex flex-col">
        <h2 className="text-4xl sm:text-6xl font-poppins font-medium">
          When we make first contact, you&apos;ll be one of the first we
          contact.
        </h2>
      </div>
      <div className="sm:w-1/2 flex flex-col items-center space-y-2 px-4 sm:px-12">
        <p className="text-lg sm:w-3/4 sm:text-xl font-light">
          Join the SETI family, stay up-to-date on news, missions, events and
          more with our newsletter.
        </p>
        <div className="w-full sm:w-3/4">
          <Label>First Name</Label>
          <Input className="w-full" placeholder="Carl" />
        </div>
        <div className="w-full sm:w-3/4">
          <Label>Last Name</Label>
          <Input className="w-full" placeholder="Sagan" />
        </div>
        <div className="w-full sm:w-3/4">
          <Label>Email Address</Label>
          <Input className="w-full" placeholder="example@seti.org" />
        </div>
        <Button className="w-full sm:w-3/4">Join the Exploration</Button>
      </div>
    </div>
  );
}
