import { useCancelAppointment } from "@/hooks/appointments/useCancelAppointment";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
interface CancelBtnProps {
  appointmentId: string;
  children: ReactNode;
}

export default function CancelBtn({ appointmentId, children }: CancelBtnProps) {
  const { mutate: cancel, isPending } = useCancelAppointment();

  return (
    <Button
      variant="outline"
      className="flex-1"
      disabled={isPending}
      onClick={() => {
        if (confirm("Are you sure you want to cancel this appointment?")) {
          cancel(appointmentId);
        }
      }}
    >
      {isPending ? "Canceling..." : children}
    </Button>
  );
}
