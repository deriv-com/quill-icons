import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlaySmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m1.563 15.563 7.875-4.813-7.876-4.813v9.625ZM.932 4.789c.438-.237.876-.228 1.313.027l7.875 4.813c.401.255.61.629.629 1.121-.018.492-.228.866-.629 1.121l-7.875 4.813c-.437.255-.875.264-1.312.027-.438-.255-.666-.638-.684-1.148V5.937c.018-.51.246-.893.684-1.148Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmBoldIcon);
export default ForwardRef;
