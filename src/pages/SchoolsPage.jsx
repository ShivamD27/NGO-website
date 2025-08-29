import React from "react";
import { Link } from "react-router-dom";
import schools from "../data/schools.js";
import "../styles/SchoolsPage.css";

const SchoolsPage = () => {
  return (
    <div className="schools-page">
      <h1>Our Schools</h1>
      <div className="schools-grid">
        {schools.map((school) => (
          <Link
            to={`/schools/${school.slug}`}
            key={school.id}
            className="school-card"
          >
            <img
              src={school.heroImage}
              alt={school.name}
              className="school-card-image"
            />
            <div className="school-card-content">
              <h2>{school.name}</h2>
              <p>{school.location}</p>
              <span>{school.intakeLabel}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SchoolsPage;
