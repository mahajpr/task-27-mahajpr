import { useState, useEffect } from "react";
import api from "../services/api";

function Instructors() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {

    api.get("/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
         setError("Failed to load instructors.");
        setLoading(false);
      });

  }, []);

  if (loading) {
  return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }


  return (
    <div>

      <h2>Instructors</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Instructors;