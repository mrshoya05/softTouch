import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const token = localStorage.getItem("token");
  const  role = localStorage.getItem("role");
  return role == "Admin" ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
