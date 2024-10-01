import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Scrollbar } from "smooth-scrollbar-react";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Scrollbar
      plugins={{
        overscroll: {
          effect: "glow",
        },
      }}
    >
      <App />
    </Scrollbar>
  </React.StrictMode>
);
