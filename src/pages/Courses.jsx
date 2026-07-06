import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CourseCard from "../components/CourseCard";

function Courses() {

  const [courses , setCourses] =useState ([
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
  ]);

  const [search, setSearch] = useState("");
    const [newCourse, setNewCourse] = useState("");
  const addCourse = () => {
    if (newCourse.trim() === "") return;

    const course = {
      id: courses.length + 1,
      title: newCourse,
      trainer: "New Trainer",
      duration: "20 Days"
    };

    setCourses([...courses, course]);
    setNewCourse("");
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h2>Courses</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="New Course"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
      />

      <button onClick={addCourse}>Add Course</button>

      <h3>Total Courses : {filteredCourses.length}</h3>

      {filteredCourses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          deleteCourse={deleteCourse}
        />
      ))}

    </div>
  );
}

export default Courses;