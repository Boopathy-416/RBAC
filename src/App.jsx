import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/welcome";
import Admin from "./components/Admin";
import Documents from "./components/Documents";
import ReportsPage from "./components/Reports";
import RootLayout from "./components/layout";
import SignIn from "./functionality/signup";
import Login from "./functionality/login";
import Profilesection from "./privacydata/profilesection";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/welcome" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reports" element={<ReportsPage />} />

          {/* Add routes for Signup, Login, and Profile */}
          <Route
            path="/signup"
            element={
              <SignIn onSuccess={() => window.location.replace("/login")} />
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/profilesection" element={<Profilesection />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
