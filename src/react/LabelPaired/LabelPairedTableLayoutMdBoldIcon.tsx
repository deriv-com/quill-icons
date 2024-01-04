import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTableLayoutMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14 6.5H2c-.313.02-.48.188-.5.5v2h13V7c-.02-.313-.188-.48-.5-.5ZM1.5 17c.02.313.188.48.5.5h2.5v-7h-3V17Zm4.5.5h8c.313-.02.48-.188.5-.5v-6.5H6v7ZM2 5h12c.563.02 1.031.219 1.406.594S15.98 6.437 16 7v10c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutMdBoldIcon);
export default ForwardRef;
