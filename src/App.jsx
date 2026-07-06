import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Instructors from "./pages/Instructors";
import { ThemeContext } from "./context/ThemeContext";
import NotFound from "./pages/NotFound";



function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
    style={{
    background: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    }}>

      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;