import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedInfoSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={22}
    viewBox='0 0 6 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 5.5c0-.255.082-.465.246-.629A.852.852 0 0 1 3 4.625c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629ZM.812 8.563c.019-.274.165-.42.438-.438H3c.273.018.42.164.438.438V16h1.75c.273.018.419.164.437.438-.018.273-.164.419-.438.437H.813c-.273-.018-.419-.164-.437-.438.018-.273.164-.419.438-.437h1.75V9H1.25c-.273-.018-.42-.164-.438-.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmRegularIcon);
export default ForwardRef;
