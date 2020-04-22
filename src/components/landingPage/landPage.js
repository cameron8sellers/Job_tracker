import React from "react";
import Account from "../Auth/Account";
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
        <div className="landingPage-authContainer">
            <Account/>
        </div>
        <div className="landingPage-contentContainer">
            <p>Job Tracker was built to keep you focused on our
                five themes that are designed to set you up for your job search
                success! This Job Tracker is designed to build each week to help
                you feel confident in each of these areas so that upon starting your
                search you are not only technically sound in your projects, but personally
                prepared to showcase your talents!
            </p>
            <p>
                Use this Job Tracker to log your networking events, organizations of
                interest, and job search strategies!
            </p>
        </div>
    </div>
  );
};

export default LandingPage;
