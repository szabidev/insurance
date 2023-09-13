import React, { FC } from "react";
import { Form, Field } from "react-final-form";
import Button from "react-bootstrap/esm/Button";
import { useAppDispatch } from "../custom-hooks/useAppDispatch";
// import { useAppSelector } from "../custom-hooks/useAppSelector";
import { UserFormValues } from "../types/interfaces";
// import {
//   setIsRegistered,
//   setRegEmail,
//   setRegPassword,
// } from "../app-store/slices/register";
import { useNavigate } from "react-router-dom";
import { setUserEmail } from "../app-store/slices/login";

const Register: FC = () => {
  // const store = useAppSelector((store) => store.registerDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToAccountPage = () => {
    navigate("/account");
  };

  // const email = store.email;
  // const password = store.password;
  // const isRegistered = store.isRegistered;

  const initialValues: UserFormValues = {
    email: "",
    password: "",
  };

  const handleRegSubmit = (values: UserFormValues) => {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    }).then((response) => response.json());

    // dispatch(setRegEmail(values.email));
    dispatch(setUserEmail(values.email));
    // dispatch(setRegPassword(values.password));
    // dispatch(setIsRegistered(true));
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
