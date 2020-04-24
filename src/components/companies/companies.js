import React from "react";
import CompaniesForm from "./CompaniesForm"
import Description from "./Description"

export default function CompaniesApplications() {
  return (
    <div className="companies-background">
      <Description />
      <div className="companies-chevron">
        <CompaniesForm />
      </div>
    </div>
  );
};