import React, { FC } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { useNavigate } from "react-router-dom";

const Welcome: FC = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("login");
  };

  return (
    <div className="welcome-container">
      <Card className="welcome-text">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title className="welcome-title">
            Welcome to SmartInsurance
          </Card.Title>
          <Card.Text className="welcome-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ea,
            in rem nam rerum ut quo fuga recusandae accusantium eaque itaque
            assumenda eligendi facilis quaerat! Minima quam non nostrum qui
            repellat ut nihil minus nam tenetur? Nemo, architecto sint. Eligendi
            mollitia, sed sapiente dolore voluptas tenetur ad sint praesentium
            natus rerum maxime illo id delectus itaque. Fuga esse explicabo
            accusantium.
          </Card.Text>
          <Button
            onClick={() => goToLogin()}
            variant="primary"
            className="mt-3"
          >
            Get Started
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Welcome;
