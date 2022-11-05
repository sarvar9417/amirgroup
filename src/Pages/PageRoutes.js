import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProtectedRoutes from "./ProtectedRoutes";

const PageRoutes = () => {
  return (
    <div className="page-routes">
      <Navbar />
      <div className="protected-routes">
        <Sidebar />
        <ProtectedRoutes />
      </div>
    </div>
  );
};

export default PageRoutes;
