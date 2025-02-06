import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Goals from "./Goals";
import Home from "./Home";
import Your_Budget from "./Your_Budget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/your_budget" element={<Your_Budget />} /> 
      </Routes>
    </Router>
  );
}

export default App;
