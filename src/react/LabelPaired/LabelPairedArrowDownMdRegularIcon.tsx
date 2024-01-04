import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m5.656 18.844-5.5-5.5c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L5.5 17.281V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v11.781l4.656-4.625c.23-.208.459-.208.688 0 .208.23.208.459 0 .688l-5.5 5.5c-.23.208-.459.208-.688 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownMdRegularIcon);
export default ForwardRef;
