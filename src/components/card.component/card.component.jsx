import React, { useState } from "react";
import "./card.component.css";

function CardComponent({ title, text, buttonUrl, buttonText, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`custom-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpanded}
    >
      <h2>{title}</h2>
      {isExpanded && (
        <div className="expanded-content">
          <div dangerouslySetInnerHTML={{ __html: text }} />
          <a href={buttonUrl}>{buttonText}</a>
        </div>
      )}
    </div>
  );
}

export default CardComponent;
