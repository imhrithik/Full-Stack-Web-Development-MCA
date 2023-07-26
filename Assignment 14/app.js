import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the user data to the server
      await axios.post('/api/users', { name, email });
      fetchUsers(); // Fetch the updated user list
      setName('');
      setEmail('');
    } catch (error) {
      console.log('Error saving user:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      // Fetch the list of users from the server
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.log('Error retrieving users:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" required />
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
