import React from "react";
import "./App.css";
import logo from "./logo.svg";
 
function App() {
 
  const enterWebsite = () => {
    alert("Welcome to the Website!");
    // You can replace this URL with your own website later
    window.location.href = "https://www.google.com";
  };
 
  return (
    <div className="App">
      <header className="App-header">
 
        <img
          src={logo}
          alt="Logo"
          style={{ width: "120px", marginBottom: "20px" }}
        />
 
        <h1>React + FastAPI CI/CD Pipeline</h1>
 
        <h2>Deployed using Jenkins + Docker + GitHub</h2>
 
        <p>Version 1.0</p>
 
        <button
          onClick={enterWebsite}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#61dafb",
            color: "black",
            marginTop: "20px"
          }}
        >
          Enter Website
        </button>
 
      </header>
    </div>
  );
}
 
export default App;
