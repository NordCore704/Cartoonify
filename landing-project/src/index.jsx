import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Pricing from "./pages/pricing";
import Products from "./pages/products";
import Contact from './pages/contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from '../src/components/sharedLayout';
import gsap from "gsap";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<App />}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
