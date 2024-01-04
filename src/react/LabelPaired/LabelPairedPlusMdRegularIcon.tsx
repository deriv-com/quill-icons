import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 6v5.5H13c.313.02.48.188.5.5-.02.313-.188.48-.5.5H7.5V18c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-5.5H1c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h5.5V6c.02-.313.188-.48.5-.5.313.02.48.188.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdRegularIcon);
export default ForwardRef;
