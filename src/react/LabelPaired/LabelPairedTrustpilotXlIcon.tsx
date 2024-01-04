import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrustpilotXlIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M20.484 22.922 15 24.375 22.781 30l-2.297-7.078Zm7.125-7.735L15 24.376 7.172 30l3-9.14-7.828-5.672H12L15 6l2.953 9.188h9.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotXlIcon);
export default ForwardRef;
