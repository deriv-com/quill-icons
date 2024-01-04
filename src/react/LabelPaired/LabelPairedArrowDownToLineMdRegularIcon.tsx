import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineMdRegularIcon = (
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
        d='M.5 19c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h11c.313.02.48.188.5.5-.02.313-.188.48-.5.5H.5Zm5.844-3.156c-.23.208-.459.208-.688 0l-4-4c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L5.5 14.281V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v8.781l3.156-3.125c.23-.208.459-.208.688 0 .208.23.208.459 0 .688l-4 4Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdRegularIcon);
export default ForwardRef;
