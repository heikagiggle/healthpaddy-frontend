import { IconProps } from "./types";

export function CheckIcon({ className, primaryColor = "#43A5AE" }: IconProps) {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 1.5L4.75 9.5L1 5.86364"
        stroke={primaryColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
