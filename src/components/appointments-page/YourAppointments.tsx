import { TabsDemo } from "@/components/appointments-page/components/TabsDemo";
import { useAppointments } from "@/hooks/appointments/useAppointments";
import type{ AppointmentCardData } from "@/Types/appointmentCardData";
import { mapAppointmentToCard } from "@/Types/mapAppointmentToCard";
export default function YourAppointments() {
  const { data, isLoading, isError } = useAppointments();
  // const appointments = data ? mapAppointmentToCard(data) : [];
    // const appointments = data ? (data) : [];

// const appointments: AppointmentCardData[] = data
//   ? data
//       .map(mapAppointmentToCard)
//       .filter((a): a is AppointmentCardData => a !== null)
//   : [];
  if (isLoading) {
    return <div>Loading appointments...</div>;
  }

  if (isError) {
    return <div>Error loading appointments. Please try again.</div>;
  }

  if (!data || data.length === 0) {
    return <div>No appointments found.</div>;

    
  }
console.log("Mapping appointments:", data);
// console.log("appointments:", appointments);
data.forEach((a, i) => console.log(i, a));

  // const { data } = useAppointments();
//   const result = useAppointments();
// {  console.log("useAppointments result:", result);}

//   {console.log("data", data);
//    }
  return (
    <>
    
    <div className="w-full flex justify-center py-10">
      <div className="w-full max-w-7xl px-4 flex flex-col gap-6">
        <h2 className="text-2xl font-serif">Your Appointments</h2>
        {/* {data.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))} */}
        <TabsDemo data={data} />
      </div>
    </div>
    
    </>
  );
}
