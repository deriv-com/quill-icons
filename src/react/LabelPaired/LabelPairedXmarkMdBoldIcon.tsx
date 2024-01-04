import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedXmarkMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.781 8.281 7.062 12l3.72 3.719c.29.354.29.708 0 1.062-.355.292-.71.292-1.063 0L6 13.063 2.281 16.78c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062L4.937 12 1.22 8.281c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L6 10.937 9.719 7.22c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkMdBoldIcon);
export default ForwardRef;
