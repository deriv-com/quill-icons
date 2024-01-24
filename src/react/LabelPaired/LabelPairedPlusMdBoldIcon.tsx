import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M7.75 6.25v5h5q.687.063.75.75-.063.687-.75.75h-5v5q-.063.687-.75.75-.687-.063-.75-.75v-5h-5Q.563 12.687.5 12q.063-.687.75-.75h5v-5q.063-.687.75-.75.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='5aabbca0332258430f6740d205f6fb83__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdBoldIcon);
export default ForwardRef;
