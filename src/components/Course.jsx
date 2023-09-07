import React from "react";

import Image from "next/image";

function Course({ image, title, description }) {
  return (
    <div>
      <Image 
      src={image}
      width={250}
      height={250}/>
      <div> {title} </div>
      <div> {description} </div>
    </div>
  );
}

export default Course;
