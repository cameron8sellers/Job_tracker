import React from "react";
import resourceSeed from "../SeedData/resourceSeed";
import { Card } from "reactstrap";
import "./resources.css";

const resourcesPage = () => {
  let list = resourceSeed.map(item => {
    return (
      <div className="resources-main">
        <Card className="job-head">
          <h1>Job Boards</h1>
        </Card>
        <Card className="jobBoard-card">
          <p>
            {item.jobBoards.map(board => {
              return (
                <ul>
                  <li>
                    <a href={board.url}>{board.name}</a>
                  </li>
                </ul>
              );
            })}
          </p>
        </Card>
        <Card className="personal-head">
          <h1>Personal Branding</h1>
        </Card>
        <Card className="personalBranding-card">
          <p>
            {item.personalBranding.map(brand => {
              return (
                <ul>
                  <li>
                    <a href={brand.url}>{brand.name}</a>
                  </li>
                </ul>
              );
            })}
          </p>
        </Card>
        <Card className="resume-head">
          <h1>Resume and Cover Letter </h1>
        </Card>
        <Card className="resume-card">
          <p>
            {item.resumeAndCoverLetter.map(item => {
              return (
                <ul>
                  <li>
                    <a href={item.url}>{item.name}</a>
                  </li>
                </ul>
              );
            })}
          </p>
        </Card>
        <Card className="interview-head">
          <h1>Interviewing</h1>
        </Card>
        <Card className="interview-card">
          <p>
            {item.interviewing.map(item => {
              return (
                <ul>
                  <li>
                    <a href={item.url}>{item.name}</a>
                  </li>
                </ul>
              );
            })}
          </p>
        </Card>
        <Card className="salary-head">
          <h1>Salary Negotiation</h1>
        </Card>
        <Card className="salary-card">
          <p>
            {item.salaryNegotiation.map(item => {
              return (
                <ul>
                  <li>
                    <a href={item.url}>{item.name}</a>
                  </li>
                </ul>
              );
            })}
          </p>
        </Card>
        <Card className="tech-head">
          <h1>Technical</h1>
        </Card>
        <Card className="tech-card">
          <p>
            {item.technical.map(item => {
              return (
                <ul>
                  <li>
                    <a href={item.url}>{item.name}</a>
                  </li>
                </ul>
              );
            })}
          </p>
        </Card>
      </div>
    );
  });
  return <Card>{list}</Card>;
};

export default resourcesPage;
