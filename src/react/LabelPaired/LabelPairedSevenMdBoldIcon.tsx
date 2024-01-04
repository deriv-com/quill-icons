import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.75c.042-.458.292-.708.75-.75h8.5c.292 0 .51.125.656.375.125.25.125.5 0 .75l-7.5 12.5c-.27.375-.614.469-1.031.281-.375-.27-.458-.614-.25-1.031L7.938 6.5H.75C.292 6.458.042 6.208 0 5.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdBoldIcon);
export default ForwardRef;
