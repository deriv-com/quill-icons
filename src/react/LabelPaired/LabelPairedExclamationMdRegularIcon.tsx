import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={24}
    viewBox='0 0 2 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 5.5V15c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM1 18.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75.458.042.708.292.75.75-.042.458-.292.708-.75.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationMdRegularIcon);
export default ForwardRef;
