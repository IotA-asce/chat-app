import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase-config/firebase-config.js'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { async } from '@firebase/util';

const SignIn = ({ setIsLoggedIn, setUsername}) => {

    const [count, setCount] = useState(false);
    const [username, setUsernam] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [cuser, setCuser] = useState({});

    const handleConfirmPasswordChange = (event) => {
        setCpassword(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUsernam(event.target.value);
        setUsername(event.target.value);
    }

    const DUMMY_MAIL_LINK = "@iota.com";

    const handleSignIn = async () => {
        try {
            setCuser(await signInWithEmailAndPassword(
                auth,
                username + DUMMY_MAIL_LINK,
                password
            ))
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error.message)
            setIsLoggedIn(false);
        }
    }
    
    const handleCreateNewAccount = async () => {
        try {
            setCuser(await createUserWithEmailAndPassword(
                auth,
                username + DUMMY_MAIL_LINK,
                password
            ))
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error.message)
            setIsLoggedIn(false);

        }
    }

    const handleLogOut = async () => {
        await signOut(auth);
        setCuser(auth.currentUser())
    }

    useEffect(() => {
        setCuser(auth.currentUser)
        console.log("user :", cuser)
    }, [])

    return (
        <div className='signInContainer'>
            <div className='signInField'>
                <input type='text' autoComplete='off' className='signInInput' placeholder='username...' autoFocus onChange={handleUsernameChange} />
            </div>
            <div className='signInField'>
                <input type='password' autoComplete='off' className='signInInput' placeholder='password...' onChange={handlePasswordChange} />
            </div>
            {count ?
                <div className='signInField'>
                    <input type='password' autoComplete='off' className='signInInput' placeholder='confirm password...' onChange={handleConfirmPasswordChange} />
                </div>
                :
                null
            }
            {count ?
                <button className='signInButton' onClick={handleCreateNewAccount}>Create account</button>
                :
                <button className='signInButton' onClick={handleSignIn}>Sign In</button>
            }
            {count ?
                <div className='createNewAccountLink' onClick={() => { setCount(!count) }}>
                    Have an account yet? Sign In
                </div>
                :
                <div className='createNewAccountLink' onClick={() => { setCount(!count) }}>
                    Don't have an account yet? Create One
                </div>
            }
            <p>{username}</p>
            <p>{password}</p>
            <p>{cpassword}</p>
        </div>
    )
}

export default SignIn