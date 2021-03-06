import React from "react";

interface SearchIconProps {
  className?: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ className }) => {
  return (
    <svg className={className || ""} width="14px" height="14px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Icons / GNB / Search / Inactive</title>
      <desc>Created with Sketch.</desc>
      <g id="Icons-/-GNB-/-Search-/-Inactive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="0.88">
        <g id="search" transform="translate(1.000000, 1.000000)" fill="#FFFFFF" fillRule="nonzero">
          <path
            d="M13.9988333,12.8959444 L12.8959444,13.9988333 L8.72316667,9.82605556 C7.812,10.5081667 6.68461111,10.9172778 5.45883333,10.9172778 C2.44377778,10.9172778 0,8.4735 0,5.45883333 C0,2.44377778 2.44377778,0 5.45883333,0 C8.4735,0 10.9172778,2.44377778 10.9172778,5.45883333 C10.9172778,6.68461111 10.5081667,7.812 9.82605556,8.72316667 L13.9988333,12.8959444 L13.9988333,12.8959444 Z M5.45883333,1.55944444 C3.30516667,1.55944444 1.55944444,3.30516667 1.55944444,5.45883333 C1.55944444,7.61211111 3.30516667,9.35783333 5.45883333,9.35783333 C7.61211111,9.35783333 9.35783333,7.61211111 9.35783333,5.45883333 C9.35783333,3.30516667 7.61211111,1.55944444 5.45883333,1.55944444 L5.45883333,1.55944444 Z"
            id="Shape"></path>
        </g>
      </g>
    </svg>
  );
};
