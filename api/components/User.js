import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try { 
        setUser(null);
        setError(null);
        setLoading(true);
        const name = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUser(name.data); 
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);
  if (loading) 
  return <div>로딩중..</div>;
  if (error) 
  return <div>에러가 발생했습니다</div>;
  if (!user) 
  return null;
  return (
    <ul>
      {user.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default User;