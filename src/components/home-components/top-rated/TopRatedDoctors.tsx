import Description from "@/components/ui/Description";
import Heading from "@/components/ui/Heading";
import LocationButton from "../find-care/LocationButton";

export default function TopRatedDoctors() {
  return (
    <section className="home-container flex flex-col items-center lg:block">
      <div className="lg:flex items-center justify-between">
        <div className=" max-w-[690px] text-center lg:text-start mb-[24px] sm:mb-[48px] mt-[8px] sm:mt-[16px]">
          <Heading tag="h2" className="">
            Top-Rated Doctors Chosen by Patients
          </Heading>
          <Description tag="p">
            Explore our highest-rated doctors, trusted by real patients for
            their expertise, care, and service. Book with confidence today.
          </Description>
        </div>
        <LocationButton
          className="hidden lg:inline-flex px-[30px]"
          text="View All"
        />
      </div>
      <div className="overflow-x-scroll"></div>
      <LocationButton
        className="inline-flex lg:hidden px-[30px]"
        text="View All"
      />
    </section>
  );
}
