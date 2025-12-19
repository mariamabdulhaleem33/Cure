import { Route, Routes } from "react-router-dom";
import Profile from "../Pages/Profile";
import EditProfileForm from "../components/Profile/EditProfileForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="profile" element={<Profile />}>
        <Route path="edit" element={<EditProfileForm />} />
      </Route>
    </Routes>
  );
}
