import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PublicContainerScreenProps {
  children?: React.ReactNode;
}

const PublicContainerScreen: React.FC<PublicContainerScreenProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicContainerScreen;
