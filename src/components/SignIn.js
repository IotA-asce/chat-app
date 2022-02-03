import React, { useState } from "react";

// firebase essentials
import {
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth';

// material ui essentials
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';

const theme = createTheme();

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorCode, setErrorCode] = useState();
    const [isSuccess, setIsSuccess] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const auth = getAuth();

    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user);
                setIsSuccess(true);
                setIsError(false);
                setIsDisabled(true);
                // ...
            })
            .catch((error) => {
                setIsSuccess(false);
                setIsError(true);
                setIsDisabled(false);
                setErrorCode(error.code);
                setErrorMessage(error.message);
            });
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="off"
                            autoFocus
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={
                                (event) => {
                                    event.preventDefault();
                                    handleSubmit();
                                }
                            }
                            disabled={isDisabled}
                        >
                            Sign In
                        </Button>
                        {isError && <Alert severity="error">Error dected! {errorCode}, {errorMessage} </Alert>}
                        {isSuccess && <Alert severity="success">Sign In success...</Alert>}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn;