import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Page-level components
import ToDoList from './ToDoList/pages/ToDoList';
import UsersPage from './Users/pages/UsersPage.js';

// Real Navigation
import RMainNavigation from './shared/components/Navigation/MainNavigation';

const AuthPlaceholder = () => (
  <div>
    {/* Replace this with Auth logic later */}
    <h3>Auth Placeholder</h3>
  </div>
);

// // Placeholder MainNavigation (for now)
// const MainNavigation = () => (
//   <nav style={{ backgroundColor: '#ddd', padding: '1rem' }}>
//     <h2>Main Navigation (Placeholder)</h2>
//   </nav>
// );

function App() {
  return (
    <Router>
      <RMainNavigation />
      <AuthPlaceholder />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
