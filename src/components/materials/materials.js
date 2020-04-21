import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import "./materials.css";

import Resume from "./Material/Resume";
import LinkedIn from "./Material/LinkedIn";
import CoverLetter from "./Material/CoverLetter";
import GitHub from "./Material/GitHub";
import Repl from "./Material/Repl";
import Portfolio from "./Material/Portfolio";
import CodeSandbox from "./Material/CodeSandbox";
import {TrackerContext} from "../../App";


const Materials = () => {
    const sharedStates = useContext(TrackerContext);
    const [newURL, setNewURL] = useState("")

    const handleURLChange = e => {
        setNewURL(e.target.value)
    };

    if(!sharedStates.userProfile.hasOwnProperty("jobSearchMaterials")){
        return <Redirect to="/" />
    } else{
        return (
            <div className="jsmContainer">
                <Resume handleURLChange={handleURLChange} newURL={newURL}/>
                <br />
                <CoverLetter handleURLChange={handleURLChange} newURL={newURL}/>
                <br/>
                <LinkedIn handleURLChange={handleURLChange} newURL={newURL}/>
                <br/>
                <GitHub handleURLChange={handleURLChange} newURL={newURL}/>
                <br/>
                <Repl handleURLChange={handleURLChange} newURL={newURL}/>
                <br/>
                <CodeSandbox handleURLChange={handleURLChange} newURL={newURL}/>
                <br/>
                <Portfolio handleURLChange={handleURLChange} newURL={newURL}/>
            </div>
        );
    }
};

export default Materials;
