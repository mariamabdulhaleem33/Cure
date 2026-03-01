import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedRoute() {
  if (!localStorage.getItem("authToken")) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
