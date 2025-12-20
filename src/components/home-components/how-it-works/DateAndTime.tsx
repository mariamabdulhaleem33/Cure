import DetailCard from "./DetailCard";

export default function DateAndTime() {
  return (
    <div className="border-[#99A2AB] border pt-[16px] h-full overflow-hidden rounded-[30px] flex flex-col justify-between">
      <div className="px-[33px] md:w-full h-full mx-auto -z-10 relative  ">
        <img src="/images/date.png" className="w-full  h-full object-cover" />
      </div>
      <DetailCard
        headingText={"Choose a Date & Time"}
        descText={
          "View real-time availability and pick a slot that works best for your schedule."
        }
      />
    </div>
  );
}
