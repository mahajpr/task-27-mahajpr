import { Link , useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


function CourseCard({ course , deleteCourse}) {
    const [enrolled, setEnrolled] = useState(false);

    const { enrollCourse } = useContext(UserContext);

    const navigate = useNavigate();


  return (
    <div>
      <h3>{course.title}</h3>

      <p>Trainer : {course.trainer}</p>

      <p>Duration : {course.duration}</p>

      <Link to={`/course/${course.id}`}>
        View Details
      </Link>
       <br />
      <br />

      <button onClick={() => {
        enrollCourse(course.title);
        setEnrolled(true);
        navigate("/profile");
      }}
      >
        {enrolled ? "Enrolled" : "Enroll"}
      </button>

      <button
        onClick={() => deleteCourse(course.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default CourseCard;
