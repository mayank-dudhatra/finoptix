import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Goals from "./Goals";
import Home from "./Home";
import Your_Budget from "./Your_Budget";
import InvestmentAnalytics from "./InvestmentAnalytics";
import Profile from "./Profile";
import NotFound from "./Components/NotFound";
import Landing from "./Landing";
import SignIn from "./SignIn";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/your_budget" element={<Your_Budget />} /> 
        <Route path="/analytics" element={<InvestmentAnalytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} /> {/* Catch-all 404 route */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
