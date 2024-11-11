import React from "react";

const CheckMarkIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#49A9AA" />
      <rect width="12" height="12" transform="translate(6 6)" fill="#49A9AA" />
      <path
        d="M16.5 9L10.3125 15L7.5 12.2727"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckMarkIcon;
