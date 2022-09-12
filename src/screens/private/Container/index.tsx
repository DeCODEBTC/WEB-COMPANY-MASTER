import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

interface ProtectedContainerScreenProps {
  children?: React.ReactNode;
}

const ProtectedContainerScreen: React.FC<
  ProtectedContainerScreenProps
> = () => {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <div className="columns" style={{ height: "100vh" }}>
      <Sidebar />
      <div
        className="off-canvas-content"
        style={{
          marginLeft: "15%",
          padding: "3rem",
          width: "100%",
        }}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedContainerScreen;
