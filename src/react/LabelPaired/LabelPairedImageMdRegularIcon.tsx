import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedImageMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M2 6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v7.281l2.125-2.094A1.2 1.2 0 0 1 4 11.813a1.2 1.2 0 0 1 .875.374L7 14.281l4.125-4.094A1.2 1.2 0 0 1 12 9.813a1.2 1.2 0 0 1 .875.374L15 12.281V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 6H2Zm-1 9.719V17c0 .292.094.531.281.719A.974.974 0 0 0 2 18h1.281l3-3-2.093-2.125a.313.313 0 0 0-.375 0L1 15.719Zm11.188-4.844a.313.313 0 0 0-.376 0L4.72 18H14a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 17v-3.281l-2.813-2.844ZM0 7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5h12c.563.02 1.031.219 1.406.594S15.98 6.437 16 7v10c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7Zm5 1.5c-.02-.313-.188-.48-.5-.5-.313.02-.48.188-.5.5.02.313.188.48.5.5.313-.02.48-.188.5-.5Zm-2 0c.02-.563.27-1 .75-1.313.5-.25 1-.25 1.5 0 .48.313.73.75.75 1.313-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C3.27 9.5 3.02 9.063 3 8.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdRegularIcon);
export default ForwardRef;
