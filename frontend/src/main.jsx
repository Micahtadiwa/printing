import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';  // Corrected this line
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
    </BrowserRouter> ,
);