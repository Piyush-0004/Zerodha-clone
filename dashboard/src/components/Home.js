import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
   const [data, setData] = useState(null);
   useEffect(() => {
    let token = localStorage.getItem("token");

    // fallback: extract token from URL query param (first time)
    const urlParams = new URLSearchParams(window.location.search);
    const urlToken = urlParams.get("token");

    if (urlToken && !token) {
      localStorage.setItem("token", urlToken); // store it for future
      token = urlToken;

      window.history.replaceState(null, "", window.location.pathname);    //clean the token from the URL
    }

    /*if (!token) {
      window.location.href = "http://localhost:3000";
    }*/

   if (!token) {
    window.location.href = "https://zerodha-frontend-g99j.onrender.com";
  }
  
  //  Fetch protected data from backend
    fetch("https://zerodha-clone-lb23.onrender.com/api/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
     .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((result) => setData(result))
      .catch((err) => {
        console.error("Dashboard fetch error:", err);
        localStorage.removeItem("token");
        window.location.href = "https://zerodha-frontend-g99j.onrender.com";
      });  
  }, []); 


  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;