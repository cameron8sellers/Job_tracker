import React from "react";
import resourceSeed from "../SeedData/resourceSeed";
import { Card } from "reactstrap";
import "./resources.css";
const resourcesPage = () => {
  let list = resourceSeed.map(item => {
    return (
      <div className="resources-main">
        <Card className="jobBoard-card">
          <h1>Job Boards</h1>
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
        <Card className="personalBranding-card">
          <h1>Personal Branding</h1>
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
        <Card className="resume-card">
          <h1>Resume and Cover Letter </h1>
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
        <Card className="interview-card">
          <h1>Interviewing</h1>
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
        <Card className="salary-card">
          <h1>Salary Negotiation</h1>
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
        <Card className="tech-card">
          <h1>Technical</h1>
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
