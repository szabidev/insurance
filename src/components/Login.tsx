import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { useAppDispatch } from "../custom-hooks/useAppDispatch";
import { setUserEmail } from "../app-store/slices/login";
import { UserFormValues } from "../types/interfaces";

import Button from "react-bootstrap/esm/Button";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToAccountPage = () => {
    navigate("/account");
  };

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const handleLoginSubmit = (values: UserFormValues) => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          goToAccountPage();
        } else {
          alert("User does not exist! Register");
          goToRegisterPage();
        }
      });

    console.log(values);
    dispatch(setUserEmail(values.email));
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login to SmartInsurance</h1>
      <div className="login-form">
        <Form
          onSubmit={handleLoginSubmit}
          initialValues={{ email: "", password: "" }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input, meta }) => (
                  <div className="forms">
                    <label>Email</label>
                    <input
                      {...input}
                      type="email"
                      placeholder="Email address"
                      required
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div className="forms">
                    <label>Password</label>
                    <input
                      {...input}
                      type="password"
                      placeholder="Password"
                      required
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <Button type="submit" disabled={submitting} variant="primary">
                  Login
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
