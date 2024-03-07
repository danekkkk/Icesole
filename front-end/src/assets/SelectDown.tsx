export default function SELECT_DOWN({ rotate = 0, top = 0 }: { rotate?: number, top?: number }) {
  return (
    <svg
      style={{ rotate: `${rotate}deg`, transition: "all 0.45s", top: `${rotate == 180 ? top + 5 : top}`, position: "relative" }}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_199_1241)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7064 19.1263C12.5188 19.3138 12.2645 19.4191 11.9994 19.4191C11.7342 19.4191 11.4799 19.3138 11.2924 19.1263L5.63537 13.4693C5.53986 13.377 5.46367 13.2667 5.41126 13.1447C5.35886 13.0227 5.33127 12.8915 5.33012 12.7587C5.32896 12.6259 5.35426 12.4942 5.40454 12.3713C5.45483 12.2484 5.52908 12.1368 5.62297 12.0429C5.71686 11.949 5.82852 11.8747 5.95141 11.8245C6.07431 11.7742 6.20599 11.7489 6.33877 11.75C6.47155 11.7512 6.60277 11.7788 6.72477 11.8312C6.84677 11.8836 6.95712 11.9598 7.04937 12.0553L11.9994 17.0053L16.9494 12.0553C17.138 11.8731 17.3906 11.7723 17.6528 11.7746C17.915 11.7769 18.1658 11.8821 18.3512 12.0675C18.5366 12.2529 18.6418 12.5037 18.644 12.7659C18.6463 13.0281 18.5455 13.2807 18.3634 13.4693L12.7064 19.1263Z"
          fill="var(--color-grey-700)"
        />
      </g>
      <defs>
        <clipPath id="clip0_199_1241">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
