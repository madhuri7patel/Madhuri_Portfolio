import * as React from "react";
const TechStackBox = ({ background }) => (
  <svg
    width={172}
    height={108}
    viewBox="0 0 172 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M80.1911 1.69923C83.6284 -0.330522 87.6998 -0.330522 91.1371 1.69923L164.507 45.0242C173.581 50.3822 173.142 65.5366 163.779 70.1811L90.4083 106.574C87.3791 108.077 83.9491 108.077 80.9199 106.574L7.54959 70.1811C-1.81398 65.5366 -2.25303 50.3822 6.82074 45.0242L80.1911 1.69923Z"
      fill={background ? background : "#944949"}
    />
  </svg>
);
export default TechStackBox;
