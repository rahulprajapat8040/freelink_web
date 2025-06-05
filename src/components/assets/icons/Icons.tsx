import * as React from "react";
export const LockComponent = () => (
    <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <mask
            id="mask0_14_60"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={60}
            height={60}
        >
            <rect width={60} height={60} fill="url(#pattern0_14_60)" />
        </mask>
        <g mask="url(#mask0_14_60)">
            <rect width={60} height={60} fill="#1E88E5" />
        </g>
        <defs>
            <pattern
                id="pattern0_14_60"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#image0_14_60" transform="scale(0.0078125)" />
            </pattern>
            <image
                id="image0_14_60"
                width={128}
                height={128}
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export const ListSearch = () => (
    <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <mask
            id="mask0_14_62"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={60}
            height={60}
        >
            <rect width={60} height={60} fill="url(#pattern0_14_62)" />
        </mask>
        <g mask="url(#mask0_14_62)">
            <rect x={2.8125} width={57.1875} height={60} fill="#1E88E5" />
        </g>
        <defs>
            <pattern
                id="pattern0_14_62"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#image0_14_62" transform="scale(0.0078125)" />
            </pattern>
            <image
                id="image0_14_62"
                width={128}
                height={128}
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export const SaveIcon = () => (
    <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <mask
            id="mask0_14_64"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={60}
            height={60}
        >
            <rect width={60} height={60} fill="url(#pattern0_14_64)" />
        </mask>
        <g mask="url(#mask0_14_64)">
            <rect x={-1.40625} width={61.4062} height={60} fill="#1E88E5" />
        </g>
        <defs>
            <pattern
                id="pattern0_14_64"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#image0_14_64" transform="scale(0.0078125)" />
            </pattern>
            <image
                id="image0_14_64"
                width={128}
                height={128}
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export const SearchIcon = () => (
    <svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width={25} height={25} fill="url(#pattern0_21_38)" />
        <defs>
            <pattern
                id="pattern0_21_38"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#image0_21_38" transform="scale(0.04)" />
            </pattern>
            <image
                id="image0_21_38"
                width={25}
                height={25}
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAABgklEQVRIDb1WCY0CQRBEwklAAhJOAhKQgAQcnISTgAQkIAEJSChSm6qh0zvfJoRJyM5uP9XVzwy73WAB2AP4BXAYqG4Ty+k/gCfW60r5No9BG8APADqZWTfqB/PxVgD35J1sTmJ2BPCX2FF/HigxYJSsBX9nAjlMBUNwr7tl3acitdGSBgDR0S07SPISRNYr74EFC83oXRemg+naF+WwAfBQZI/wub41BUV30Psw3wrA5tVAFkT2v7UAsLgXvR/rIb2/irXN222d6sGhY3qWwr/dtXdGYIM0tTJIU7EiUKcZp82EttbiHFR8NT8pvTYfgngI2S3Tw6W0EuTZjMSC1CVTbDSkZnGxr+4TgNnQsGuUADhbc+zVjvHUZerKIEruzjMD6nMEePQM52phKUeRkZ3VngYgsNccENHEwEeGHfhJ5xxYXgtkkNc8kMCYCg/o6nZMdYxg24B63SI2rfR+DWh1RfSC7soGjD73B6QD9DkQNQo7LtZo6vTopqkl1ICWS+wFb1Si7ucFVQIAAAAASUVORK5CYII="
            />
        </defs>
    </svg>
);

export const ArrowLeftIcon = ({ color = "#fff" }) => (
    <svg
        width={26}
        height={23}
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M25.8749 10.125H5.81916L13.097 2.84714L11.1528 0.902893L0.555664 11.5L11.1528 22.0971L13.097 20.1529L5.81916 12.875H25.8749V10.125Z"
            fill={color}
        />
    </svg>
);

export const ArrowRightIcon = ({ color = '#fff' }) => (
    <svg
        width={26}
        height={23}
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.125086 10.125H20.1808L12.903 2.84714L14.8472 0.902893L25.4443 11.5L14.8472 22.0971L12.903 20.1529L20.1808 12.875H0.125086V10.125Z"
            fill={color}
        />
    </svg>
);
