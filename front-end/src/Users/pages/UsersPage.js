import React from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Users Page Works</h2>
      <p>This page has only one button to go back.</p>
      <Link to="/">← Back to To Do List</Link>
    </div>
  );
};

export default UsersPage;
