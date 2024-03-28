import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import App from './App.tsx';
import { CounterProvider } from './contexts/CounterContext.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <CounterProvider>
                <App />
            </CounterProvider>
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
