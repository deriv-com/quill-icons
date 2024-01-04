import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrustpilotLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m17.07 19.602-4.57 1.21 6.484 4.688-1.914-5.898Zm5.938-6.446L12.5 20.812 5.977 25.5l2.5-7.617-6.524-4.727H10L12.5 5.5l2.46 7.656h8.048Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotLgIcon);
export default ForwardRef;
