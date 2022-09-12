import React from "react";
import { BrowserRouter, Route, Routes as RouteDom } from "react-router-dom";
import ProtectedContainerScreen from "../screens/private/Container";
import Dashboard from "../screens/private/Dashboard";
import Menus from "../screens/private/Menus";
import SignIn from "../screens/public/auth/SignIn";
import SignUp from "../screens/public/auth/SignUp";
import PublicContainerScreen from "../screens/public/Container";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RouteDom>
        <Route path="auth" element={<PublicContainerScreen />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="/" element={<ProtectedContainerScreen />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="menus" element={<Menus />} />
          <Route path="orders" element={<Menus />} />
          <Route path="crm" element={<Menus />} />
        </Route>
      </RouteDom>
    </BrowserRouter>
  );
};

export default Routes;
