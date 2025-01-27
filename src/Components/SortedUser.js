import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./UserList.css";
import UserCard from './UserCard';

function SortedUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isAscending = queryParams.get('ascending') === 'true'; // Get 'ascending' parameter

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let apiUrl = 'http://localhost:8080/api/users/sort/age';
        if (isAscending) {
          apiUrl += '?ascending=true';
        } else {
          apiUrl += '?ascending=false';
        }
        const response = await axios.get(apiUrl);
        setUsers(response.data);
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.error('Error fetching sorted users:', error);
      }
    };

    fetchUsers();
  }, [isAscending]); // Include 'isAscending' in the dependency array

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

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

export default SortedUser;