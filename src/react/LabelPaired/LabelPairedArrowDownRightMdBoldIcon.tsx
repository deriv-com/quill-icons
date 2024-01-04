import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M10.25 17h-7.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h5.688l-7.22-7.219c-.29-.354-.29-.708 0-1.062.355-.292.71-.292 1.063 0L9.5 14.437V8.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v7.5c-.042.458-.292.708-.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdBoldIcon);
export default ForwardRef;
