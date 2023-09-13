import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const RootLayout = () => {
  // const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <div className="root-layout">
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container fluid>
          <NavLink to="/" className="m-0 smart-insurance nav-link">
            SmartInsurance
          </NavLink>
          <Nav className="navbar justify-content-end navbar-expand-lg bg-primary container">
            <NavLink className={"nav-link"} to="register">
              Register
            </NavLink>
            <NavLink className={"nav-link"} to="login">
              Login
            </NavLink>
            <NavLink className={"nav-link"} to="account">
              Account
            </NavLink>
            <NavLink className={"nav-link"} to="offer">
              Create offer
            </NavLink>
            <NavLink className={"nav-link"} to="login">
              Sign Out
            </NavLink>
          </Nav>
        </Container>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
