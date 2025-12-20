import Heading from "../../ui/Heading";
import { CiSearch } from "react-icons/ci";

import Description from "../../ui/Description";
import LocationButton from "./LocationButton";

export default function FindCare() {
  return (
    <div className="mt-50 home-container flex flex-col items-center  gap-[24px] lg:flex-row lg:justify-between ">
      <div className="flex flex-col lg:text-start text-center gap-[8px] lg:gap-[32px] max-w-[490px]">
        <Heading tag={"h2"} className="text-[#05162C]">
          Find Care Near You in Seconds
        </Heading>
        <Description tag={"p"}>
          Allow location access or choose your city to instantly discover
          trusted doctors and clinics around you—quick, easy, and local.
        </Description>
        <LocationButton
          className="hidden lg:inline-flex"
          icon={<CiSearch />}
          text="Search by location"
        />
      </div>
      <div>
        <img src="/public/images/home-map.png" alt="" />
      </div>
      <LocationButton
        className="inline-flex lg:hidden"
        icon={<CiSearch />}
        text="Search by location"
      />
    </div>
  );
}
