import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTabletMdRegularIcon = (
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
        d='M2 5a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 6v12c0 .292.094.531.281.719A.974.974 0 0 0 2 19h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 18V6a.974.974 0 0 0-.281-.719A.974.974 0 0 0 12 5H2ZM0 6c.02-.563.219-1.031.594-1.406S1.438 4.02 2 4h10c.563.02 1.031.219 1.406.594S13.98 5.437 14 6v12c-.02.563-.219 1.031-.594 1.406S12.562 19.98 12 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6Zm6 10.5h2c.313.02.48.188.5.5-.02.313-.188.48-.5.5H6c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletMdRegularIcon);
export default ForwardRef;
