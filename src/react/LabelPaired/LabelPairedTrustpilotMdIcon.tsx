import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrustpilotMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.656 15.281 10 16.25 15.188 20l-1.532-4.719Zm4.75-5.156L10 16.25 4.781 20l2-6.094-5.218-3.781H8L10 4l1.969 6.125h6.437Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotMdIcon);
export default ForwardRef;
