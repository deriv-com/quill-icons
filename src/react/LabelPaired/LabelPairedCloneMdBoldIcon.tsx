import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCloneMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M2 18.5h7c.313-.02.48-.188.5-.5v-2H11v2c-.02.563-.219 1.031-.594 1.406S9.562 19.98 9 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-7c.02-.563.219-1.031.594-1.406S1.438 9.02 2 9h2v1.5H2c-.313.02-.48.188-.5.5v7c.02.313.188.48.5.5Zm5-5h7c.313-.02.48-.188.5-.5V6c-.02-.313-.188-.48-.5-.5H7c-.313.02-.48.188-.5.5v7c.02.313.188.48.5.5ZM5 13V6c.02-.563.219-1.031.594-1.406S6.437 4.02 7 4h7c.563.02 1.031.219 1.406.594S15.98 5.437 16 6v7c-.02.563-.219 1.031-.594 1.406S14.562 14.98 14 15H7c-.563-.02-1.031-.219-1.406-.594S5.02 13.562 5 13Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdBoldIcon);
export default ForwardRef;
