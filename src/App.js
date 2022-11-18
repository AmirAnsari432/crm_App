import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Customer from "./pages/Customer"
import Enginner from "./pages/Engineer"
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/engineer" element={<Enginner />} />
        <Route path="/*"  element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
