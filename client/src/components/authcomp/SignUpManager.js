import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignUpManager = ({setIsLoggedIn ,setUsername}) => {
    const [count, setcount] = useState(0);

    return (
        <div>
            <SignIn setIsLoggedIn={setIsLoggedIn}/>
        </div>
    );
};

export default SignUpManager;
