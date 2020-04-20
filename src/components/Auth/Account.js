import React, {useContext, useState} from 'react';
import { TrackerContext } from '../../App'
import CreateAccount from "./CreateAccount"
import LogIn from "./LogIn"

function Account() {
    const sharedStates = useContext(TrackerContext);
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    });

    const handleUserNameChange = e => {
        let newCreds = {...userCreds};
        newCreds.email = e.target.value;
        setUserCreds(newCreds);
    };

    const handlePasswordChange = e => {
        let newCreds = {...userCreds};
        newCreds.password = e.target.value;
        setUserCreds(newCreds);
    };

    return (
        <>
            {sharedStates.createModal ? <CreateAccount
                                            handleUserNameChange={handleUserNameChange}
                                            handlePasswordChange={handlePasswordChange}
                                            userCreds={userCreds}/>
                                       : <LogIn
                                            handleUserNameChange={handleUserNameChange}
                                            handlePasswordChange={handlePasswordChange}
                                            userCreds={userCreds}/>}
        </>
    );
}

export default Account;
