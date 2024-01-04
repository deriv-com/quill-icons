import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.469 11.469 6-6c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062L3.062 12l5.47 5.469c.29.354.29.708 0 1.062-.355.292-.71.292-1.063 0l-6-6c-.292-.354-.292-.708 0-1.062Zm12-6c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062L9.062 12l5.47 5.469c.29.354.29.708 0 1.062-.355.292-.71.292-1.063 0l-6-6c-.292-.354-.292-.708 0-1.062l6-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdBoldIcon);
export default ForwardRef;
