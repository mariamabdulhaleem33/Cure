import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("authToken");
      navigate("/login");
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return {logout};
}               
