import * as React from "react";
const TechStackBoxMobile = ({ background }) => (
  <svg
    width={106}
    height={67}
    viewBox="0 0 106 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.3943 1.47715C51.5166 0.223939 54.0303 0.223936 56.1526 1.47715L101.453 28.227C107.056 31.5352 106.784 40.8919 101.003 43.7595L55.7026 66.2294C53.8323 67.1571 51.7146 67.1571 49.8443 66.2294L4.54368 43.7595C-1.23761 40.8919 -1.50869 31.5352 4.09367 28.227L49.3943 1.47715Z"
      fill={background ? background : "#944949"}
    />
  </svg>
);
export default TechStackBoxMobile;
