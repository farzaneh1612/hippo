// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Dashboard from "./pages/Dashboard.tsx";
import Stake from "./pages/Stake.tsx";
import Bridge from "./pages/Bridge.tsx";
import { NetworkProvider } from "../src/context/NetworkContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <NetworkProvider>
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={5000} />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/bridge" element={<Bridge />} />
      </Routes>
    </BrowserRouter>
  </NetworkProvider>
);
