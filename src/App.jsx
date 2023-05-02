import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages/login/LoginForm";
import { SignUpForm } from "./pages/registration/SignUpForm";
import { Home } from "./pages/home/Home";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { AddCards } from "./components/AddCards/AddCards";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="home" element={<Home />} />
          <Route path="addcards" element={<AddCards />} />
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
