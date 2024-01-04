import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCheckMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.781 7.219c.292.354.292.708 0 1.062l-8.25 8.25c-.354.292-.708.292-1.062 0l-4.25-4.25c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L5 14.938l7.719-7.72c.354-.29.708-.29 1.062 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckMdBoldIcon);
export default ForwardRef;
