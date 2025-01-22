import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./utils/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./layout/Layout";
<<<<<<< HEAD
import { AuthProvider } from "./utils/Authcontext";
=======
import  {AuthProvider}  from "./utils/Authcontext";
import AdminDashboard from "./pages/AdminDashboard";
>>>>>>> 66e0b2046d1ee0c4e553d3ad3f4b29a22a2c9688

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<div>Welcome to the Skincare Dashboard</div>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<Layout />}>
            <Route
              path="dashboard"
              element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
            />
            <Route
              path="profile"
              element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
