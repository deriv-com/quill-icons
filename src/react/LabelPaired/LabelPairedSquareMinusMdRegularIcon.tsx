import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareMinusMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M2 6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v10c0 .292.094.531.281.719A.974.974 0 0 0 2 18h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 17V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 12 6H2ZM0 7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7v10c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7Zm4 4.5h6c.313.02.48.188.5.5-.02.313-.188.48-.5.5H4c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusMdRegularIcon);
export default ForwardRef;
