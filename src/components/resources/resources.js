import React from "react";
import resourceSeed from "../SeedData/resourceSeed";
const resourcesPage = () => {
  let list = resourceSeed.map(item => {
    return (
      <div>
        <h1>Job Boards</h1>
        <p>
          {item.jobBoards.map(board => {
            return <ul>{board.name}</ul>;
          })}
        </p>
        <h1>Personal Branding</h1>
        <p>
          {item.personalBranding.map(brand => {
            return <ul>{brand.name}</ul>;
          })}
        </p>
      </div>
    );
  });
  return <div>{list}</div>;
};

export default resourcesPage;
