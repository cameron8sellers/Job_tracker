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

    const handleCopy = e => {
        let element = document.getElementById(`${e.target.id}Input`);
        element.select();
        document.execCommand("copy");
        e.target.focus();
        console.log("Copying item ", element)
    };

    if(!sharedStates.userProfile.hasOwnProperty("jobSearchMaterials")){
        return <Redirect to="/" />
    } else{
        return (
            <div className="jsmContainer">
                <Resume handleCopy={handleCopy}/>
                <br />
                <CoverLetter handleCopy={handleCopy}/>
                <br/>
                <LinkedIn handleCopy={handleCopy}/>
                <br/>
                <GitHub handleCopy={handleCopy} />
                <br/>
                <Repl handleCopy={handleCopy} />
                <br/>
                <CodeSandbox handleCopy={handleCopy} />
                <br/>
                <Portfolio handleCopy={handleCopy}/>
            </div>
        );
    }
};

export default Materials;
