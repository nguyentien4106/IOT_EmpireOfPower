import { Navigate } from "react-router-dom";
import { getSession } from "../helper/utils";

export const ProtectedRoute = ({ children }) => {
  return getSession("isAuth") === "true" ? children : <Navigate to="/login" />
};

export default ProtectedRoute;