import * as React from "react";

const PolygonPointer = ({ isDark }) => (
  <svg
    width={80}
    height={66}
    viewBox="0 0 80 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_479_1025)">
      <path
        d="M37.0618 22.1807C38.6455 20.4663 41.3545 20.4663 42.9382 22.1807L58.0464 38.5358C60.413 41.0977 58.5959 45.25 55.1082 45.25H24.8918C21.4041 45.25 19.587 41.0977 21.9536 38.5358L37.0618 22.1807Z"
        fill={isDark ? "#2f2f2f" : "#fff"}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_479_1025"
        x={0.883789}
        y={0.89502}
        width={78.2324}
        height={64.355}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_479_1025"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_479_1025"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default PolygonPointer;
