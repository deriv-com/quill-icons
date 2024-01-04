import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={22}
    viewBox='0 0 2 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.656 5.281v7.875c-.036.401-.255.62-.656.656-.401-.036-.62-.255-.656-.656V5.281c.036-.4.255-.62.656-.656.401.036.62.255.656.656ZM1 16.875a.852.852 0 0 1-.629-.246A.852.852 0 0 1 .125 16c0-.255.082-.465.246-.629A.852.852 0 0 1 1 15.125c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationSmBoldIcon);
export default ForwardRef;
