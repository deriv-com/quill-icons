import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightFromSquareMdRegularIcon = (
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
        d='M10.5 4h5c.313.02.48.188.5.5v5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V5.719l-7.656 7.625c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L14.281 5H10.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5ZM2 5h4.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v11c0 .292.094.531.281.719A.974.974 0 0 0 2 19h11a.974.974 0 0 0 .719-.281A.974.974 0 0 0 14 18v-4.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V18c-.02.563-.219 1.031-.594 1.406S13.562 19.98 13 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareMdRegularIcon);
export default ForwardRef;
