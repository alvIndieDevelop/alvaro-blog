import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  TextField,
  Grid,
  Container,
  Paper,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";

import { useTranslation } from "react-i18next";

import { createUser } from "../../utils/auth";

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string(t("err_string_email"))
      .email(t("err_isEmail"))
      .required(t("required")),
    password: yup
      .string(t("err_string_password"))
      .min(8, t("err_validPassword"))
      .required(t("required")),
    confirmPassword: yup
      .string(t("err_string_password"))
      .oneOf([yup.ref("password"), null], t("err_validConfirmPassword")),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      const userCreated = await createUser({ email, password });
      if (userCreated) navigate("/dashboard");
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            sx={{
              p: 3,
            }}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={t("email")}
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={t("password")}
                  type="password"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label={t("confirmPassword")}
                  type="password"
                  id="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
