import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages/login/LoginForm";
import { SignUpForm } from "./pages/registration/SignUpForm";
import { AddCards } from "./pages/cards/AddCards";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="addcards" element={<AddCards />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
