
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add debugging information
console.log("Main script loading");

// Execute immediately to ensure the app loads
const root = document.getElementById("root");
if (root) {
  console.log("Root element found, mounting app");
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
