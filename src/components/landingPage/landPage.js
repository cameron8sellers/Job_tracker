import React from "react";
import Account from "../Auth/Account";
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className="landingPageContainer">

        <div className="landingPage-contentContainer">
            <p className="welcomeHook">You have enough to worry about while searching for a job...</p>
            <div className="landingPage-imageContainer">
                <img src="https://res.cloudinary.com/doaftkgbv/image/upload/v1587660076/BrainMap_tyv9om.png" alt="brain-map" />
            </div>
            <p>Let Job Tracker help by keeping the this information centralized in one location. Job Tracker was built to keep you focused on our
                five themes designed to set you up for your job search
                success! This Job Tracker is designed to help
                you feel confident in each of these areas so that upon starting your
                search, you are not only technically sound in your projects, but personally
                prepared to showcase your talents!
            </p>
            <p>
                Use this Job Tracker to log your networking events, organizations of
                interest, and job search strategies!
            </p>
        </div>
        <div className="landingPage-authContainer">
            <Account/>
        </div>
    </div>
  );
};

export default LandingPage;
