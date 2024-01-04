import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpAZMdBoldIcon = (
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
        d='M13 5c.313 0 .542.135.688.406l2.5 5c.145.438.03.781-.344 1.031-.438.146-.771.032-1-.343l-.438-.844H11.594l-.438.844c-.229.396-.562.51-1 .344-.396-.25-.51-.594-.344-1.032l2.5-5A.864.864 0 0 1 13 5Zm-.656 3.75h1.312L13 7.437l-.656 1.313ZM4.469 5.219c.354-.292.708-.292 1.062 0l3 3c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0L5.75 7.562V18.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V7.562l-1.719 1.72c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l3-3ZM11 13h4c.313.02.542.167.688.438.124.291.083.562-.126.812l-2.906 3.25H15c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-4a.793.793 0 0 1-.688-.438c-.124-.291-.083-.562.126-.812l2.906-3.25H11c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdBoldIcon);
export default ForwardRef;
