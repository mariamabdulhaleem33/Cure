import DoctorCard from "@/components/ui/DoctorCard";
import { useQuery } from "@tanstack/react-query";
import api from "@/api/axios";
import { type FC } from "react";
import type { FavoriteItem } from "@/Types/Favorites.types";


const Favorites: FC = () => {

  const { data } = useQuery<FavoriteItem[]>({
    queryKey: ["favorites"],
    queryFn: async () => {
      const res = await api.get("/all-favourites");
      return res.data.favourites;
    },
  });

  return (
    <div className="flex flex-col py-10 w-full mx-auto gap-15 max-w-7xl px-10">
      <p className="text-2xl font-secondary lg:text-3xl text-slate-900">
        Your Favourites ({data?.length || 0})
      </p>

      <div className="flex justify-center gap-x-10 gap-y-10 flex-wrap">
        {data?.map((fav) => {
          const doctor = fav.doctor;

          return (
            <DoctorCard
              key={fav.id}
              style="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              name={""}
              imageUrl={``}
              specialty={doctor.specialization.name}
              startTime={doctor.availability_slots[0].from}
              endTime={doctor.availability_slots[0].to}
              address={doctor.clinic_location?.address}
              forBooking={true}
              price={parseFloat(doctor.session_price)}
              userId={doctor.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
