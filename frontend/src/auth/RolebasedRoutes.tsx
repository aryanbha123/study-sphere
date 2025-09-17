import { Navigate, Outlet } from "react-router-dom";
import { type JSX } from "react";
import { useSelector } from "react-redux";
import { type RootState } from '../store/store';
const RoleBasedRoutes = (): JSX.Element => {
  const user = useSelector((s : RootState ) => s.auth.user); 
  const path: string | null = localStorage.getItem("requested_path");

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (path) {
    localStorage.removeItem("requested_path");
    return <Navigate to={path} replace />;
  }

  // role-based default route
  if (user.role === "admin") return <Navigate to="/admin" replace />;
  if (user.role === "user") return <Navigate to="/dashboard" replace />;

  // If nothing matches, render nested routes
  return <Outlet />;
};

export default RoleBasedRoutes;
