import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/landPage";
import resourcePage from "./components/resources/resources";
import Network from "./components/network/network";
import Materials from "./components/materials/materials";
import Companies_Applications from "./components/CompanieApplications/companies";
import TargetCompaniesHeader from "./components/TargetCompaniesHeader/TargetCompaniesHeader"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/resources" component={resourcePage} />
      <Route path="/network" component={Network} />
      <Route path="/materials" component={Materials} />
      <Route path="/Companies" component={Companies_Applications} />
      <Route path="/targetcompanies" component={TargetCompaniesHeader} />
    </div>
  );
}

export default App;
