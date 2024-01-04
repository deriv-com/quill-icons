import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedWindowMaximizeMdBoldIcon = (
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
        d='M0 6.813c.042-.271.125-.521.25-.75.167-.334.417-.594.75-.782.25-.146.52-.24.813-.281H14c.563.02 1.031.219 1.406.594S15.98 6.437 16 7v10c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V6.812ZM1.5 11v6c.02.313.188.48.5.5h12c.313-.02.48-.188.5-.5v-6h-13Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeMdBoldIcon);
export default ForwardRef;
