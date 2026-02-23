import { Navigate, Outlet } from "react-router-dom"

export default function UnauthenticatedRoute() {

  if (localStorage.getItem("authToken")) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}