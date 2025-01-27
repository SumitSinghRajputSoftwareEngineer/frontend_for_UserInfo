// import { Axios } from "axios";
import axios from 'axios';
// import React , { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/load"); // Replace with actual API endpoint
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error gracefully (e.g., display an error message)
      }
    };

    fetchUsers();
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="user-list-container">
      {/* <button onClick={handleSort}>Sort by Age ({sortOrder})</button> */}
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
