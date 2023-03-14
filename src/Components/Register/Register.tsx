import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
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
  firstName: yup.string().min(2, "name must be 2 or more characters long"),
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
            id="firstname"
            name="firstname"
            label="Firstname"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            fullWidth
            id="lastname"
            name="lastname"
            label="Lastname"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
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
            id="birthDate"
            name="birthDate"
            label="BirthDate"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
            helperText={formik.touched.birthDate && formik.errors.birthDate}
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
        <Link to={"/login"}>
          <Button>Already have an account? Login here!</Button>
        </Link>
      </StyledAuthBox>
    </>
  );
}

export default RegisterComponent;
