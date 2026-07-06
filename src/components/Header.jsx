import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Learning Management System</h1>

      <Link to="/">Home</Link> |{" "}
      <Link to="/courses">Courses</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/instructors">Instructors</Link>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>

      <hr />
    </div>
  );
}

export default Header;