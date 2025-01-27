import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

function UserCard({ user }) {
  return (
    <Link to={`/users/${user.id}`} className="user-card">
      <div className="user-card-image">
        <img src={user.image} alt={user.name || "User Image"} />
      </div>
      <div className="user-card-info">
        <h4>{user.firstName} {user.lastName}</h4>
        <h5>Role: {user.role}</h5>
        <p>Age: {user.age}</p>
      </div>
    </Link>
  );
}

export default UserCard;