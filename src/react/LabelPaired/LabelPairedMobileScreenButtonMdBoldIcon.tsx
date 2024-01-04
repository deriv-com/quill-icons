import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMobileScreenButtonMdBoldIcon = (
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
        d='M2 18c.02.313.188.48.5.5h7c.313-.02.48-.188.5-.5v-2.5H2V18Zm0-4h8V6c-.02-.313-.188-.48-.5-.5h-7c-.313.02-.48.188-.5.5v8ZM.5 6c.02-.563.219-1.031.594-1.406S1.937 4.02 2.5 4h7c.563.02 1.031.219 1.406.594s.573.843.594 1.406v12c-.02.563-.219 1.031-.594 1.406s-.844.573-1.406.594h-7c-.563-.02-1.031-.219-1.406-.594S.52 18.563.5 18V6ZM5 16.5h2c.313.02.48.188.5.5-.02.313-.188.48-.5.5H5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdBoldIcon);
export default ForwardRef;
