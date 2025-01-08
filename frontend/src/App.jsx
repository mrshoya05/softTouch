import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./layout/Layout";


function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route  element={<Login />} />
        </Route>
        <Route path="/register" element={<Layout />} >
          <Route  element={<Register />} />
        </Route>
        <Route  element={<Layout />} >
          <Route path="/dashboard"
            element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Route>
        <Route  element={<Layout />} >
          <Route path="/profile"  element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;