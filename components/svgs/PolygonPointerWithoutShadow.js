import * as React from "react";

const PolygonPointerWithoutShadow = ({ isDark }) => (
  <svg
    width={40}
    viewBox="0 0 40 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.0618 2.18071C18.6455 0.46632 21.3545 0.466315 22.9382 2.18071L38.0464 18.5358C40.413 21.0977 38.5959 25.25 35.1082 25.25H4.89182C1.40409 25.25 -0.412996 21.0977 1.95361 18.5358L17.0618 2.18071Z"
      fill={isDark ? "#2f2f2f" : "#fff"}
    />
  </svg>
);

export default PolygonPointerWithoutShadow;
