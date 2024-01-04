import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 5H3a.973.973 0 0 0-.719.281A.973.973 0 0 0 2 6v8h8V6a.973.973 0 0 0-.281-.719A.973.973 0 0 0 9 5Zm1 10H2v3c0 .292.094.531.281.719A.974.974 0 0 0 3 19h6a.974.974 0 0 0 .719-.281A.974.974 0 0 0 10 18v-3ZM3 4h6c.563.02 1.031.219 1.406.594S10.98 5.437 11 6v12c-.02.563-.219 1.031-.594 1.406S9.562 19.98 9 20H3c-.563-.02-1.031-.219-1.406-.594S1.02 18.563 1 18V6c.02-.563.219-1.031.594-1.406S2.437 4.02 3 4Zm1.5 13c.02-.313.188-.48.5-.5h2c.313.02.48.188.5.5-.02.313-.188.48-.5.5H5c-.313-.02-.48-.188-.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdRegularIcon);
export default ForwardRef;
