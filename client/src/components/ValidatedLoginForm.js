import React from "react";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./ValidatedLoginForm.scss"

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <div>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email: </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password: </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>

          </form>


        </div>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;