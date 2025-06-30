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

    if (!token) {
      window.location.href = "http://localhost:3000";
    }
  }, []); 


  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;