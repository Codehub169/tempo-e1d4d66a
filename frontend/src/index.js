import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // Global styles, including fonts and CSS variables
import App from './App';

// Create a root for the React application, targeting the 'root' div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component within React's StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
