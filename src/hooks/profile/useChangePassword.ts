import { useState } from "react";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { useLogout } from "../auth/useLogout";

export const useChangePassword = () => {
  const { user } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const { logout } = useLogout();

  const changePassword = async (data: any) => {
    setIsSaving(true);
    const auth = getAuth();
    const Cuser = auth.currentUser;
    if (!user || !user.email) return alert("No user logged in");

    try {
      const credential = EmailAuthProvider.credential(
        Cuser.email,
        data.current_password,
      );
      await reauthenticateWithCredential(Cuser, credential);
      await updatePassword(Cuser, data.new_password);
      toast.success("Password changed successfully!");
      logout();
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.message || "Failed to change password. Please try again.",
      );
    }
    setIsSaving(false);
  };

  return { changePassword, isSaving };
};
