import React, {useContext, useState} from 'react';

import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import { authenticateUser } from '../../services/api-helper-userAuth'
import { TrackerContext } from '../../App'
import "./Account.css";

function Login({handleUserNameChange, handlePasswordChange, userCreds}) {
    const sharedStates = useContext(TrackerContext);
    const [loginError, setLoginError] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        if (userCreds.email.length > 3) {
            const json = await authenticateUser(userCreds);
            if (json.status === 200) {
                localStorage.setItem("token", json.token);
                sharedStates.setToken(json.token);
                sharedStates.setUserProfile(json.userProfile);
                console.log("User Authenticated");
                setLoginError(false)
            } else {
                console.log("Error Authenticating User: ", json.error);
                sharedStates.setLoggedIn(false);
                setLoginError(true)
            }
        }
    };

    return (
        <div className={sharedStates.loggedIn ? "hide" : "loginContainer"}>
            <Form onSubmit={handleLogin}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Username or Email Address"
                        onChange={handleUserNameChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input
                        type="password"
                        name="password"
                        // id="examplePassword"
                        placeholder="Password (case sensitive)"
                        onChange={handlePasswordChange}
                        className="loginContainer-input"/>
                </FormGroup>
                <Button className="loginContainer-Button">Log In</Button>
                {loginError ? <Alert color="danger"> Incorrect Username or Password </Alert> : ""}
                <p>Dont' forget your password!</p>
                <p>Job Tracker does not have access
                    to your password and cannot provide access to your account
                    if you forget it.</p>
            </Form>
        </div>
    );
}

export default Login;
