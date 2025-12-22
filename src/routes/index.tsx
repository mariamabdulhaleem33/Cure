import MainLayout from "@/components/layout/MainLayout";
import EditProfileForm from "@/components/Profile/EditProfileForm/EditProfileForm";
import Profile from "@/Pages/Profile";
import Search from "@/components/Search";
import { Route, Routes } from "react-router-dom";
import AppointmentPayment from "@/components/payment/AppointmentPayment";
import ReviewCard from "@/components/rating/ReviewCard";
import Booking from "@/components/create_booking/Booking";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<Home />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path='/booking' element={<Booking/>} />
        <Route path="payment" element={<AppointmentPayment />} />
        <Route path="rate" element={<ReviewCard />} />
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfileForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
