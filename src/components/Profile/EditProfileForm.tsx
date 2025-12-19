import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import BirthdaySelector from "./BirthdaySelector";
import type { FC } from "react";

const EditProfileForm: FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-y-6 gap-x-16">
      <p className="col-span-2 text-3xl text-[#05162C]">Personal information</p>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="name">Full Name</Label>
        <Input type="text" id="name" placeholder="Full Name" />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="text" id="phone" placeholder="Phone Number" />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Label htmlFor="email">Your birthday</Label>
        <BirthdaySelector />
      </div>
      <div className="col-span-2 flex flex-col justify-center items-start gap-2">
        <Label htmlFor="email">Location</Label>
        <Input type="text" id="location" placeholder="location" />
      </div>
      <div className="col-start-2 flex flex-col justify-center items-end">
        <Button className="w-full bg-[#145DB8]">Save Changes</Button>
      </div>
    </div>
  );
}
export default EditProfileForm;