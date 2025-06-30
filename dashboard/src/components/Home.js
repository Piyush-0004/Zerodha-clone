import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
   useEffect(() => {
    let token = localStorage.getItem("token");

    // fallback: extract token from URL query param (first time)
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");

    if (urlToken && !token) {
      localStorage.setItem("token", urlToken); // store it for future
      token = urlToken;
    }

    /*if (!token) {
      window.location.href = "http://localhost:3000";
    }*/
   if (!token) {
    window.location.href = "https://zerodha-frontend-g99j.onrender.com";
  }
  // 3️⃣ Fetch protected data from backend
    fetch("https://zerodha-clone-lb23.onrender.com/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Dashboard fetch error:", err));
  }, []); 


  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;