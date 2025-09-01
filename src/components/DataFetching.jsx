import React, { useEffect, useState } from "react";

// HARDCODED USERS
// const STUDENTS = [
//   {
//     name: "Sang",
//     gender: "F",
//     email: "sang@msu.edu.in",
//   },
//   {
//     name: "Kiran",
//     gender: "M",
//     email: "kiran@msu.edu.in",
//   },
//   {
//     name: "Saroj",
//     gender: "M",
//     email: "saroj@msu.edu.in",
//   },
// ];

export default function DataFetching() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersData = await res.json();
      setStudents(usersData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Data Fetching</h1>

      {/* HARDCODED STUDENTS */}
      {/* <div>
        {STUDENTS.map((s) => (
          <li>{s.name}</li>
        ))}
      </div> */}

      <div>
        {students.map((s) => (
          <li>
            {s.name} - {s.email}
          </li>
        ))}
      </div>
    </div>
  );
}
