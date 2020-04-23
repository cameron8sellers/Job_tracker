import React, { useContext } from "react";
import { TrackerContext } from "../../App";
import { Card } from "reactstrap";

import "./resources.css";

const ResourcesPage = () => {
  const sharedStates = useContext(TrackerContext);
  console.log(sharedStates.resources);

  const jobBoards = sharedStates.resources["Job Boards"].map(
    (resource, index) => {
      return (
        <div>
          <a href={resource.url}>
            <li>{resource.name}</li>
          </a>
        </div>
      );
    }
  );

  const personalBranding = sharedStates.resources["Personal Branding"].map(
    (resource, index) => {
      return (
        <div>
          <a href={resource.url}>
            <li>{resource.name}</li>
          </a>
        </div>
      );
    }
  );

  const resume = sharedStates.resources["Resume And Cover Letter"].map(
    (resource, index) => {
      return (
        <div>
          <a href={resource.url}>
            <li>{resource.name}</li>
          </a>
        </div>
      );
    }
  );

  const interview = sharedStates.resources["Interviewing"].map(
    (resource, index) => {
      return (
        <div>
          <a href={resource.url}>
            <li>{resource.name}</li>
          </a>
        </div>
      );
    }
  );
  const salary = sharedStates.resources["Salary Negotiation"].map(
    (resource, index) => {
      return (
        <div>
          <a href={resource.url}>
            <li>{resource.name}</li>
          </a>
        </div>
      );
    }
  );
  const tech = sharedStates.resources["Technical"].map((resource, index) => {
    return (
      <div>
        <a href={resource.url}>
          <li>{resource.name}</li>
        </a>
      </div>
    );
  });
  return (
    <div className="resources-main">
      <Card className="job-head">
        <h1> Job Boards</h1>
      </Card>
      <Card className="jobBoard-card">{jobBoards}</Card>
      <Card className="personal-head">
        <h1>Personal Branding</h1>
      </Card>
      <Card className="personalBranding-card">{personalBranding}</Card>
      <Card className="resume-head">
        <h1>Resume and Cover Letter</h1>
      </Card>
      <Card className="resume-card">{resume}</Card>
      <Card className="interview-head">
        <h1>Interviewing</h1>
      </Card>
      <Card className="interview-card">{interview}</Card>
      <Card className="salary-head">
        <h1>Salary Negotiation</h1>
      </Card>
      <Card className="salary-card">{salary}</Card>
      <Card className="tech-head">
        <h1>Technical</h1>
      </Card>
      <Card className="tech-card">{tech}</Card>
    </div>
  );
};
export default ResourcesPage;
