import type { FC } from "react";
import { NavLink } from "react-router-dom";

const ProfileSidebar: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F6F7] h-full rounded-xl gap-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          {/* <img
            src={}
            alt="User Image"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="flex flex-col justify-center items-center gap-2 ">
          <h4 className="text-[#05162C] text-2xl">Seif Mohammed</h4>
          <p className="text-xs">129,El-Nasr Street, Cairo</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <ul>
          <li>
            <NavLink to="/profile/edit">Personal information</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Password management</NavLink>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;
