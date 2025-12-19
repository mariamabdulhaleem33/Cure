import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const Profile: FC = () => {
  return (
    <div className=" w-[90%] mx-auto h-screen flex flex-col justify-center">
      <div className="flex gap-20 h-[80%]">
        <div className="w-1/3">
          <ProfileSidebar />
        </div>
        <div className="w-2/3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Profile;
