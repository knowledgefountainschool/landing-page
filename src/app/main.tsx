import 'unfonts.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/main.css';
import { App } from './app.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
