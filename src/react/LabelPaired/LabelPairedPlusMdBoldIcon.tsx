import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M7.75 6.25v5h5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-5v5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-5h-5C.792 12.708.542 12.458.5 12c.042-.458.292-.708.75-.75h5v-5c.042-.458.292-.708.75-.75.458.042.708.292.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdBoldIcon);
export default ForwardRef;
