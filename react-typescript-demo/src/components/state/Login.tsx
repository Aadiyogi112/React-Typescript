import { useState } from "react";

const LoginComponent=()=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const loginHandler=()=>{
        setLoggedIn(true);
    }
    const logoutHandler=()=>{
        setLoggedIn(false);
    }
    return (
        <div>
            User is {loggedIn? 'Logged in': 'Logged Out'}
            <div>
                <button onClick={loginHandler}>Login</button>
                <button onClick={logoutHandler}>Logout</button>

            </div>
        </div>
    )
}

export default LoginComponent