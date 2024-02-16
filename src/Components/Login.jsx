import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import '../assets/Login.css'; // Assuming you have a CSS file for additional styling

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#3c096c", // Change to your desired primary color
        },
        secondary: {
            main: "#000fds", // Change to your desired secondary color
        },
    },
});

const LoginCard = styled(Card)({
    maxWidth: 400,
    margin: 'auto',
    marginTop: 8,
    padding: 2,
});

const LoginCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Container component="main" maxWidth="xs" >
                <LoginCard>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: "primary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                        }
                        title={<Typography variant="h5">Sign in</Typography>}
                    />
                    <LoginCardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
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
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </form>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </LoginCardContent>
                </LoginCard>
            </Container>
        </ThemeProvider>
    );
}