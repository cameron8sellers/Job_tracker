import React from 'react';
import "./Account.css"

function NoAccess() {

    return (
        <div className="noAccess">
            <h1>Access Denied</h1>
            <div>
                <img src="https://res.cloudinary.com/doaftkgbv/image/upload/v1587650702/No_Access_white_zfmhya.png" alt="No Access" />
            </div>
            <h1>Please login or create an account</h1>
        </div>
    );
}

export default NoAccess;
