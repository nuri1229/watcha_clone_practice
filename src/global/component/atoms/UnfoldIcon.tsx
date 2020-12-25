import React from "react";

interface UnfoldIconProps {
  className?: string;
}

export const UnfoldIcon: React.FC<UnfoldIconProps> = ({ className }) => {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)" strokeWidth="2">
        <path d="M7.41 7.84L12 12.42L16.59 7.84L18 9.25L12 15.25L6 9.25L7.41 7.84Z" fill="#FFFFFF" fill-opacity="0.87" />
      </g>
      <defs>
        <filter id="filter0_d" x="-4" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
