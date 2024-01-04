import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlaySmFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='m2.246 4.816 7.875 4.813c.401.273.61.647.629 1.121-.018.492-.228.866-.629 1.121l-7.875 4.813c-.437.255-.875.264-1.312.027-.438-.255-.666-.638-.684-1.148V5.937c.018-.51.246-.893.684-1.148.437-.237.875-.228 1.312.027Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaySmFillIcon);
export default ForwardRef;
