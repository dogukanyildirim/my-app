import React from "react";
import Image from "next/image";

function Course({ image, title, description }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image src={image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              {/* <p className="subtitle is-6">this is subtitle</p> */}
            </div>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
