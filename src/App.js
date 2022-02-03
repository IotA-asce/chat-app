import React, { useState, useEffect } from "react";

import { db } from './components/firebaseConfig.js'
import { collection, doc, getDocs } from 'firebase/firestore'
import { getAuth, signOut } from "firebase/auth";

import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import MessageBox from "./components/MessageBox.js";

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

function App() {

	const [messages, setMessages] = useState([]);
	const [user, setUser] = useState({});
	const [signState, setSignState] = useState(0);					// sign in or sign up
	// 0 for sign in
	// 1 for sign up

	const messageCollectionRef = collection(db, 'messages');
	const theme = createTheme();

	const checkForUser = () => {
		const auth = getAuth()
		setUser(auth.currentUser);
		console.log(user);
	}

	useEffect(() => {

		const getMessages = async () => {
			const data = await getDocs(messageCollectionRef);
			setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// console.log(messages);
		}

		// getMessages();
		checkForUser();


	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Container
				component="main" maxWidth="xs"
			>
				<CssBaseline />
				<Box
					 sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
				>

					{user ? <MessageBox /> : (signState === 0 ? <SignIn /> : <SignUp />)}
					{/* {messages.map((message) => { return < >{message.message}</>})} */}
					{/* <SignIn /> */}
					{/* <SignUp /> */}
					{/* <button onClick={(event) => {event.preventDefault(); checkForUser()}}>Log out</button> */}
					{user ? null : signState === 0 ? <Button variant="contained" onClick={(event) => {setSignState(1)}}>Create Account instead</Button> : null}
					{user ? null : signState === 1 ? <Button variant="contained" onClick={(event) => {setSignState(0)}}>Sign in instead</Button> : null}
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default App;
