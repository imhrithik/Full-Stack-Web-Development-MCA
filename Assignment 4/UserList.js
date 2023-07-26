import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users/UserList.json');
      setUsers(response.data.users);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-title" style={{ color: "white" }}>User List</h2>
      <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>{user.name}<br /></li>
      ))}
    </ul>
  </div>
  );
};

export default UserList;
