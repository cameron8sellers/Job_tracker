import React, { useState, createContext, useEffect } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landPage";
import resourcePage from "./components/resources/resources";
import Network from "./components/network/network";
import Materials from "./components/materials/materials";
import companies_Applications from "./components/companies/companies";
import "./App.css";
import Header from "./components/Header/Header";
import { validToken } from './services/api-helper-userAuth'
import NoAccess from "./components/Auth/NoAccess"

function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [createModal, setCreateModal] = useState(true);
    const [token, setToken] =  useState("");
    const [resources, setResources] = useState({});
    const [userProfile, setUserProfile] = useState({});


    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if(localToken){
            validToken(localToken).then(resp => {
                    if(resp === 200){
                        setLoggedIn(true)
                    }else{
                        setLoggedIn(false)
                    }
                }
            )
        }
    }, [token]);

  return (
    <>
        <div className="App">
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCreateModal={setCreateModal}/>
            <TrackerContext.Provider value={{
                resources,
                setResources,
                userProfile,
                setUserProfile,
                loggedIn,
                setLoggedIn,
                token,
                setToken,
                createModal,
                setCreateModal
            } }>
                <div className="App">
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/resources" component={resourcePage} />
                    <Route path="/network" component={loggedIn ? Network : NoAccess} />
                    <Route path="/materials" component={loggedIn ? Materials : NoAccess} />
                    <Route path="/companies" component={loggedIn ? companies_Applications : NoAccess} />;
                </div>
            </TrackerContext.Provider>
        </div>


    </>
  );
}

export default App;
export const TrackerContext = createContext();