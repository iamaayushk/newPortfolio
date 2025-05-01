import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary'; // Create this component
import ReactDOM from 'react-dom/client'; // ✅ CORRECT for React 18+


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
