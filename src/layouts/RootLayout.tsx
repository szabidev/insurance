import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Modal from "../components/Modal";

const RootLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="root-layout">
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container fluid>
          <NavLink to="/" className="m-0 smart-insurance nav-link">
            SmartInsurance
          </NavLink>
          <Nav className="navbar justify-content-end navbar-expand-lg bg-primary container">
            {isLoggedIn ? (
              <NavLink className={"nav-link"} to={"offer"}>
                Create offer
              </NavLink>
            ) : (
              <NavLink className={"nav-link"} to="#" onClick={openModal}>
                Create offer
              </NavLink>
            )}
            {!isLoggedIn && (
              <>
                <NavLink className={"nav-link"} to="register">
                  Register
                </NavLink>
                <NavLink className={"nav-link"} to="login">
                  Login
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <>
                <NavLink className={"nav-link"} to="account">
                  Account
                </NavLink>
                <NavLink className={"nav-link"} to="login">
                  Sign Out
                </NavLink>
              </>
            )}
          </Nav>
        </Container>
      </div>
      {showModal && <Modal onClose={closeModal} />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
