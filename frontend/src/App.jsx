import { Login } from "./components/login";
import { Register } from "./components/register/register";
import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
