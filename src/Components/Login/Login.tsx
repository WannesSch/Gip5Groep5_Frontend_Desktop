import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useProfile } from "../../Hooks/useProfile";
import { InputValues } from "../../Models/InputValues";
import { StyledAuthBox, StyledButton, StyledTextField } from "../Shared/Shared.styled";


const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function LoginComponent() {
  const { fetchUser } = useProfile();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: InputValues) => {
      fetchUser(values);
    },
  });

  return (
    <>
      <StyledAuthBox>
        <form onSubmit={formik.handleSubmit}>
          <StyledTextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledTextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
        <Link to={"/register"}>
          <StyledButton>No account? Register here!</StyledButton>
        </Link>
      </StyledAuthBox>
    </>
  );
}

export default LoginComponent;
