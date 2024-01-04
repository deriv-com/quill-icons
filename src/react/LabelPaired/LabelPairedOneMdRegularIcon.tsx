import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.5 5.5V18h3c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-7c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h3V6.437l-2.219 1.47c-.27.145-.5.103-.687-.126-.146-.27-.104-.5.125-.687l3-2a.536.536 0 0 1 .531-.032.49.49 0 0 1 .25.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneMdRegularIcon);
export default ForwardRef;
