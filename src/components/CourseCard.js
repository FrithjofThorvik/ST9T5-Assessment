import React from "react";
import "../css/CourseCard.css";

function CourseCard({ title, description, img, link }) {
  return (
    <div className="courseCard">
      <a
        className="courseCard-img"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt={title} />
      </a>
      <div className="courseCard-title">
        <h4>{title}</h4>
      </div>
      <div className="courseCard-description">
        <p>{description}</p>
      </div>
      <a
        className="courseCard-button"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        Watch
      </a>
    </div>
  );
}

export default CourseCard;
