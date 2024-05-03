import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { LoadingProvider } from './providers/LoadingProvider.jsx';
import { ClientProvider } from './providers/ClientProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoadingProvider>
        <ClientProvider>
            <App />
        </ClientProvider>
    </LoadingProvider>
);

