import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element to mount to");

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (err) {
  // Log render errors and show a helpful message instead of throwing.
  // eslint-disable-next-line no-console
  console.error('Failed to render App:', err);
  const errMsg = document.createElement('pre');
  errMsg.style.cssText = 'white-space:pre-wrap;padding:16px;background:#fee;color:#900;margin:16px;border-radius:6px;';
  errMsg.innerText = String(err);
  document.body.appendChild(errMsg);
}