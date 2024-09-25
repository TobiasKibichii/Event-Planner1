import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
