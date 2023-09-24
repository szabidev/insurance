import React, { FC, useState } from "react";
import { Form, Field } from "react-final-form";
import Button from "react-bootstrap/esm/Button";
import { useAppDispatch } from "../custom-hooks/useAppDispatch";
import { UserFormValues } from "../types/interfaces";

import { useNavigate } from "react-router-dom";
import { setUserEmail } from "../app-store/slices/login";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const goToAccountPage = () => {
    navigate("/account");
  };

  const initialValues: UserFormValues = {
    email: "",
    password: "",
  };

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleRegSubmit = () => {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => console.log(user));

    dispatch(setUserEmail(email));

    goToAccountPage();
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register to SmartInsurance</h1>
      <div className="register-form">
        <Form
          onSubmit={handleRegSubmit}
          initialValues={initialValues}
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
                      onChange={handleEmail}
                      value={email}
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
                      onChange={handlePassword}
                      value={password}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <Button type="submit" disabled={submitting} variant="primary">
                  Submit
                </Button>
                <Button
                  type="button"
                  onClick={() => form.reset()}
                  disabled={submitting || pristine}
                  variant="primary"
                >
                  Reset
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Register;
