import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const apiUrl = `http://localhost:8080/api/users/${id}`;
        const response = await axios.get(apiUrl);
        setUser(response.data);
      } catch (error) {
        setError(error);
        console.error('Error fetching user details:', error);
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <div>Error fetching user details: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const userDetails = [
    { label: 'Age', value: user.age },
    { label: 'Gender', value: user.gender },
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { label: 'Hair Color', value: user.hair.color },
    { label: 'Hair Type', value: user.hair.type },
    { label: 'Address', value: user.address.address },
    { label: 'City', value: user.address.city },
    { label: 'State', value: user.address.state },
    { label: 'Postal Code', value: user.address.postalCode },
    { label: 'Country', value: user.address.country },
    { label: 'Company', value: user.company.name },
    { label: 'Department', value: user.company.department },
    { label: 'Title', value: user.company.title },
    { label: 'Company Address', value: user.company.address.address }, 
    { label: 'Company City', value: user.company.address.city }, 
    { label: 'Company State', value: user.company.address.state }, 
    { label: 'Company Postal Code', value: user.company.address.postalCode }, 
    { label: 'Company Country', value: user.company.address.country }, 
    { label: 'Crypto Coin', value: user.crypto.coin },
    { label: 'Crypto Wallet', value: user.crypto.wallet },
    { label: 'Crypto Network', value: user.crypto.network },
    { label: 'Blood Group', value: user.bloodGroup },
    { label: 'Height', value: user.height },
    { label: 'Weight', value: user.weight },
    { label: 'Eye Color', value: user.eyeColor },
    { label: 'IP Address', value: user.ip },
    { label: 'Mac Address', value: user.macAddress },
    { label: 'University', value: user.university },
    { label: 'EIN', value: user.ein },
    { label: 'SSN', value: user.ssn },
    { label: 'User Agent', value: user.userAgent },
  ];

  return (
    <div className="user-details">
      <div className="user-profile">
        <img src={user.image} alt={user.firstName + ' ' + user.lastName} className="user-image" />
        <div className="user-info">
          <h2>{user.firstName} {user.lastName}</h2>
          <ul className="user-info-list">
            {userDetails.map((detail) => (
              <li key={detail.label} className='element'>
                <span className="info-label">{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
        </div>
      </div> 
    </div>
  );
}

export default UserDetails;