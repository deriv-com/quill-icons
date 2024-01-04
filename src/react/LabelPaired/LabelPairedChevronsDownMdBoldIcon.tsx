import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsDownMdBoldIcon = (
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
        d='m7.469 18.531-6-6c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L8 16.938l5.469-5.47c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063l-6 6c-.354.292-.708.292-1.062 0Zm-6-12c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L8 10.937l5.469-5.468c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062l-6 6c-.354.292-.708.292-1.062 0l-6-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownMdBoldIcon);
export default ForwardRef;
