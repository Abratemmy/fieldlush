import React from  "react-router-dom"
import './App.css';
import Footer from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/router";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
