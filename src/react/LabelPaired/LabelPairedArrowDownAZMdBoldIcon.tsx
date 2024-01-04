import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownAZMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.469 15.781c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l1.719 1.719V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.688l1.719-1.72c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063l-3 3c-.354.292-.708.292-1.062 0l-3-3ZM11 13h4c.313.02.542.167.688.438a.82.82 0 0 1-.126.812l-2.906 3.25H15c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-4a.793.793 0 0 1-.688-.438.82.82 0 0 1 .126-.812l2.906-3.25H11c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75Zm2-8c.313.02.531.156.656.406l2.5 5c.167.438.063.771-.312 1-.438.167-.771.063-1-.312l-.438-.844H11.594l-.438.844c-.229.375-.562.49-1 .344-.375-.25-.479-.594-.312-1.032l2.5-5C12.49 5.136 12.708 5 13 5Zm-.656 3.75h1.312L13 7.437l-.656 1.313Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZMdBoldIcon);
export default ForwardRef;
