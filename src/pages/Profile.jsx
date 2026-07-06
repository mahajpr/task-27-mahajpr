import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const { user } = useContext(UserContext);

function Profile() {
  const {user} = useContext(UserContext);

  return (
    <div>

      <h2>Student Profile</h2>

      <h3>Name: {user.name}</h3>

      <p>Email: {user.email}</p>

      <h3>Enrolled Courses</h3>

      <ul>
        {user.enrolledCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

    </div>
  );
}

export default Profile;