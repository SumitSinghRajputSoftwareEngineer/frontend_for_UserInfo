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
    const url = process.env.React_app;
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url); // Replace with actual API endpoint
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error gracefully 
      }
    };
99
    fetchUsers();
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="user-list-container">
      <div className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
