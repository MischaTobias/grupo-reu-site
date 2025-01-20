import React from "react";
import sections from "../../data/practice-areas.json";
import { InfoListAndImageSection, PageLayout } from "../../components";

export const PracticeAreas = () => {
  return (
    <PageLayout>
      <div className="container mt-3 align-items-center justify-content-center animate__animated animate__faster animate__fadeInUp">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <InfoListAndImageSection
              key={index}
              {...section}
              leftSide={index % 2 === 0}
            />
            {index !== sections.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </PageLayout>
  );
};
