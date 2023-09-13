import React, { FC, useState } from "react";
import { Form, Field } from "react-final-form";
import Button from "react-bootstrap/esm/Button";
import { useAppDispatch } from "../custom-hooks/useAppDispatch";
// import { useAppSelector } from "../custom-hooks/useAppSelector";
import {
  setCasco,
  setDateOfBirth,
  setFirstName,
  setLastName,
  setRCA,
} from "../app-store/slices/offer";
import { OfferFormValues } from "../types/interfaces";

const Offer: FC = () => {
  // const store = useAppSelector((store) => store.offerDetails);
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState<string>("none");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const initialValues = {
    firstname: "",
    lastname: "",
    age: "",
    type_of_insurance: "",
    chassis: "",
    km: 0,
    make: "",
    manufactured: "",
    registrationNo: "",
  };

  const price = (Math.random() * 900 + 100).toFixed(2);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const dateCreated = `${year}-${month}-${day}`;

  console.log(price);
  const onSubmit = (values: OfferFormValues) => {
    setSelectedOption(values.type_of_insurance);
    fetch("http://localhost:8000/offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.firstname,
        lastName: values.lastname,
        dateOfBirth: values.age,
        rca: [
          {
            make: values.make,
            manufactured: values.manufactured,
            regNo: values.registrationNo,
            payment: price,
            dateCreated: dateCreated,
          },
        ],
        casco: [
          {
            chassisNo: values.chassis,
            km: values.km,
            payment: price,
            dateCreated: dateCreated,
          },
        ],
      }),
    });
    // .then((response) => response.json());

    if (selectedOption === "none") {
      return;
    }
    dispatch(setFirstName(values.firstname));
    dispatch(setLastName(values.lastname));
    dispatch(setDateOfBirth(values.age));
    if (selectedOption === "RCA") {
      dispatch(
        setRCA({
          make: values.make,
          manufactured: values.manufactured,
          regNo: values.registrationNo,
          payment: price,
          dateCreated: dateCreated,
        })
      );
    }
    if (selectedOption === "CASCO") {
      dispatch(
        setCasco({
          chassisNo: values.chassis,
          km: values.km,
          payment: price,
          dateCreated: dateCreated,
        })
      );
    }
    setIsSubmitted(true);
  };

  const options = [
    { key: 1, text: "RCA", value: "RCA" },
    { key: 2, text: "CASCO", value: "CASCO" },
  ];

  return (
    <div className="offer-container">
      <h1 className="offer-title">Create Offer</h1>
      <div className="offer-form">
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="firstname">
                {({ input, meta }) => (
                  <div className="forms">
                    <label>First Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="First Name"
                      required
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastname">
                {({ input, meta }) => (
                  <div className="forms">
                    <label>Last Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="age">
                {({ input, meta }) => (
                  <div className="forms">
                    <label>Date of birth</label>
                    <input
                      {...input}
                      type="date"
                      placeholder="Date of birth"
                      required
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="type_of_insurance" options={options}>
                {({ input, meta, options }) => {
                  return (
                    <div>
                      <label className="dropdown-label" htmlFor="insurance">
                        Type:
                      </label>
                      <select
                        {...input}
                        id="insurance"
                        name="insurance"
                        onChange={(e) => {
                          input.onChange(e);
                          setSelectedOption(e.target.value);
                        }}
                        required
                      >
                        <option key={0} value="none">
                          None
                        </option>
                        {options.map(
                          (opt: {
                            key: number;
                            value: string;
                            text: string;
                          }) => {
                            return (
                              <option key={opt.key} value={opt.value}>
                                {opt.text}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </div>
                  );
                }}
              </Field>

              {selectedOption === "CASCO" && (
                <>
                  <Field name="chassis">
                    {({ input, meta }) => (
                      <div className="forms">
                        <label>Chassis number</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Chassis number"
                          required
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="km">
                    {({ input, meta }) => (
                      <div className="forms">
                        <label>KM</label>
                        <input {...input} type="number" required />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </>
              )}

              {selectedOption === "RCA" && (
                <>
                  <Field name="make">
                    {({ input, meta }) => (
                      <div className="forms">
                        <label>Make</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Make"
                          required
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="manufactured">
                    {({ input, meta }) => (
                      <div className="forms">
                        <label>Manufactured</label>
                        <input {...input} type="date" required />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="registrationNo">
                    {({ input, meta }) => (
                      <div className="forms">
                        <label>Registration No.</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="Registration No."
                          required
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </>
              )}

              <div className="buttons offer-btn">
                <Button type="submit" disabled={submitting} variant="primary">
                  Create Offer
                </Button>
              </div>
            </form>
          )}
        />
      </div>
      {isSubmitted && (
        <div className="payment">
          <p className="price">Insurance to pay: {price} Ron</p>
        </div>
      )}
    </div>
  );
};

export default Offer;
