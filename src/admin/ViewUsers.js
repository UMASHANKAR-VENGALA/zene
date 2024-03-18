import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './AdminSidebar';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewusers');
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:2032/deleteuser/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div >
      <Sidebar>
      <h1 style={{ textAlign: 'center' }}>Users</h1>
      <hr/>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((user, index) => (
      <tr key={index}>
        <td>{user.fullname}</td>
        <td>{user.email}</td>
        <td>
          <button onClick={() => deleteUser(user.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="3">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
      </Sidebar>
    </div>
  );
}