import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../dist/img/logo.svg";
import "react-international-phone/style.css";
import { useDispatch, useSelector } from "react-redux";
import { RegisterDispatcher, RegisterSelector } from "../Services/ReduxCore/Identity/Register";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ResponseToastHandler } from "../Utilities/Helpers/toast";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const registerState = useSelector(RegisterSelector);
  const dispatch = useDispatch();

  useEffect(() => {

    if (registerState && registerState.isLoading && !registerState.success && !registerState.rejected)
      setIsLoading(true);
    else {
      setIsLoading(false);
      ResponseToastHandler(registerState, registerState.payload.message, registerState.payload.title);
      setTimeout(() => {
        if (!registerState.isLoading && registerState.success && !registerState.rejected)
          navigator("/");
      }, 3000);

    }

  }, [registerState, dispatch, navigator]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(RegisterDispatcher({
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      title: data.get("title")
    }))
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container
          sx={{ borderRadius: "16px", boxShadow: 3 }}
          style={{ background: "#f2f6fc", padding: 22 }}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="Your SVG" />
            <Typography component="h1" variant="h5">
              Ücretsiz Deneyin
            </Typography>
            <Typography sx={{ mb: 3 }} component="h1">
              İstediğiniz her yerden hızlı ve kolayca e-fatura kesin ve ön
              muhasebenizi yönetin!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Ad"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Soyad"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="title"
                    label="Ticari Ünvan"
                    name="title"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Şifre"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Şifre Tekrar"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              {
                isLoading ? (
                  <>
                    <LoadingButton sx={{ mt: 3, mb: 2 }} fullWidth loading variant="outlined">
                      Submit
                    </LoadingButton>
                  </>
                ) : (
                  <>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    // load iconu
                    >
                      Kayıt Ol
                    </Button>
                  </>
                )
              }

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/auth/login" variant="body2">
                    Zaten üye misiniz? Giriş Yap
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>

  );
}
