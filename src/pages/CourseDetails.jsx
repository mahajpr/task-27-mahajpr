import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: "React",
      trainer: "John",
      duration: "30 Days",
    },
    {
      id: 2,
      title: "Node",
      trainer: "David",
      duration: "25 Days",
    },
    {
      id: 3,
      title: "JavaScript",
      trainer: "Peter",
      duration: "40 Days",
    },
    {
      id: 4,
      title: "Python",
      trainer: "Smith",
      duration: "35 Days",
    },
  ];

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  return (
    <div>
      <h2>Course Details</h2>

      <h3>{course.title}</h3>

      <p>Trainer: {course.trainer}</p>

      <p>Duration: {course.duration}</p>
    </div>
  );
}

export default CourseDetails;