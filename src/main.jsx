import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
      .then(registration => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  });
}

// Set COOP and COEP headers
if (typeof window !== 'undefined') {
  const metaCOOP = document.createElement('meta');
  metaCOOP.httpEquiv = 'Cross-Origin-Opener-Policy';
  metaCOOP.content = 'same-origin';
  document.head.appendChild(metaCOOP);

  const metaCOEP = document.createElement('meta');
  metaCOEP.httpEquiv = 'Cross-Origin-Embedder-Policy';
  metaCOEP.content = 'require-corp';
  document.head.appendChild(metaCOEP);
}