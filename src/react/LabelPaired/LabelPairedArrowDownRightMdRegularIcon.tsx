import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownRightMdRegularIcon = (
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
        d='M10.5 17h-7c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h5.781L1.156 7.844c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L10 15.281V9.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v7c-.02.313-.188.48-.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdRegularIcon);
export default ForwardRef;
