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
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { useMediaQuery } from "react-responsive"

const Materials = () => {
    const [activeTab, setActiveTab] = useState('1');
    const sharedStates = useContext(TrackerContext);

    // Determine if screen size is mobile
    const isMobile = useMediaQuery({query: "(max-width:768px)"})

    // Update Selected Tabs
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    };

    // Copy the URL to user's clipboard
    const handleCopy = e => {
        let element = document.getElementById(`${e.target.id}Input`);
        element.select();
        document.execCommand("copy");
        e.target.focus();
        console.log("Copying item ", element)
    };

    // Redirect if user doesn't have valid token
    if(!sharedStates.userProfile.hasOwnProperty("jobSearchMaterials")){
        return <Redirect to="/" />
    } else{
        return (
            <div>
                {isMobile ? (
                    <>
                        <p className="jsm-Container-instructions">Use the Job Search Materials page to keep track of the essential
                            documents needed when applying for jobs. Log into Job Tracker while
                            applying and you can quickly copy and paste the information into the
                            application! </p>
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
                    </>
                    ) :
                    (
                        <>
                            <Nav tabs className="jsmContainer">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Resume
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Cover Letter
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        LinkedIn
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}
                                    >
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '5' })}
                                        onClick={() => { toggle('5'); }}
                                    >
                                        Repl.it
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '6' })}
                                        onClick={() => { toggle('6'); }}
                                    >
                                        CodeSandbox
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '7' })}
                                        onClick={() => { toggle('7'); }}
                                    >
                                        Portfolio
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className="jsmContainer">
                                    <Resume handleCopy={handleCopy}/>
                                </TabPane>
                                <TabPane tabId="2" className="jsmContainer">
                                    <CoverLetter handleCopy={handleCopy} />
                                </TabPane>
                                <TabPane tabId="3" className="jsmContainer">
                                    <LinkedIn handleCopy={handleCopy} />
                                </TabPane>
                                <TabPane tabId="4" className="jsmContainer">
                                    <GitHub handleCopy={handleCopy} />
                                </TabPane>
                                <TabPane tabId="5" className="jsmContainer">
                                    <Repl handleCopy={handleCopy} />
                                </TabPane>
                                <TabPane tabId="6" className="jsmContainer">
                                    <CodeSandbox handleCopy={handleCopy} />
                                </TabPane>
                                <TabPane tabId="7" className="jsmContainer">
                                    <Portfolio handleCopy={handleCopy} />
                                </TabPane>
                            </TabContent>
                        </>
                    )}
            </div>

        );
    }
};

export default Materials;
