import { createContext , useState} from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Arun",
    email: "arun@gmail.com",
    enrolledCourses: ["React", "Python"],
  });

  const enrollCourse = (courseName) => {

    if (!user.enrolledCourses.includes(courseName)) {
      setUser({
        ...user,
        enrolledCourses: [...user.enrolledCourses, courseName],
      });
    }
  };

  return (
    <UserContext.Provider value={{user , enrollCourse}}>
      {children}
    </UserContext.Provider>
  );
}