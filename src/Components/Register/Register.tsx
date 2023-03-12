import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { StyledAuthBox } from "../Shared/Shared.styled";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  password: string;
}

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

function RegisterComponent() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: Values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <StyledAuthBox>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
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
      </StyledAuthBox>
    </>
  );
}

export default RegisterComponent;
