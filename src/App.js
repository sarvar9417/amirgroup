import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import PageRoutes from "./Pages/PageRoutes";

function App() {
  return (
    <div className="app">
      <div className="page-routes">
        <Navbar />
        <div className="protected-routes">
          <Router>
            <Sidebar />
            <PageRoutes />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
