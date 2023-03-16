import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useProfile } from "../../Hooks/useProfile";
import { InputValues } from "../../Models/InputValues";
import { User } from "../../Models/User";
import { StyledAuthBox } from "../Shared/Shared.styled";

const validationSchema = yup.object({
  firstName: yup.string().min(2, "name must be 2 or more characters long"),
  lastName: yup.string().min(2, "name must be 2 or more characters long"),
  birthDate: yup
    .string()
    .min(10, "please use format dd/mm/yyyy")
    .max(10, "please use format dd/mm/yyyy"),
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
  const { registerUser } = useProfile();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      birthdate: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: InputValues) => {
      console.log(values);
      registerUser(values);
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
            label="FirstName"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
            fullWidth
            id="lastname"
            name="lastname"
            label="Lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
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
            id="birthdate"
            name="birthdate"
            label="BirthDate"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
            helperText={formik.touched.birthdate && formik.errors.birthdate}
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
