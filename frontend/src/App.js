import logo from './logo.svg';
import './App.css';
 
function App() {
  const handleLogout = () => {
    alert("Logged out successfully!");
    window.location.reload();
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
 
        <h1>Welcome to My CI/CD Pipeline Project</h1>
 
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
 
