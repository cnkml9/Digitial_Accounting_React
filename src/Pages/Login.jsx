import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../dist/img/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginDispatcher, LoginSelector } from '../Services/ReduxCore/Identity/Login';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { ResponseToastHandler } from '../Utilities/Helpers/toast';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {
  const navigator = useNavigate();
  const loginState = useSelector(LoginSelector);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(LoginDispatcher({
      email: data.get('email'),
      password: data.get('password'),
    }))
  };

  useEffect(() => {
    if (loginState && loginState.isLoading && !loginState.rejected && !loginState.success)
      setIsLoading(true);
    else {
      setIsLoading(false);
      ResponseToastHandler(loginState, loginState.payload.message, loginState.payload.Message)
      setTimeout(() => {
        if (!loginState.isLoading && loginState.success && !loginState.rejected)
          navigator("/")
      }, 3000);
    }
  }, [loginState, navigator, dispatch])
  return (
    <>

      <ThemeProvider theme={defaultTheme}>
        <Container sx={{ borderRadius: '16px', boxShadow: 3 }} style={{ background: '#f2f6fc', padding: 22 }} component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="Your SVG" />
            <Typography sx={{ mb: 3 }} component="h1" variant="h5">
              Sisteme Giriş Yapın
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="şifre"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Beni Hatırla"
              />
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
                    >
                      Giriş Yap
                    </Button>
                  </>
                )
              }

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Şifremi unuttum ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/auth/register" variant="body2">
                    {"Hesabınız mı yok? Üye olun!"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>

  );
}