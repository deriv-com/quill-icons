import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCopyMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M12 14.5c.313-.02.48-.188.5-.5V7.625L10.375 5.5H6c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5h6ZM6 16c-.563-.02-1.031-.219-1.406-.594S4.02 14.562 4 14V6c.02-.563.219-1.031.594-1.406S5.437 4.02 6 4h4.375c.417 0 .77.146 1.063.438l2.124 2.125c.292.291.438.645.438 1.062V14c-.02.563-.219 1.031-.594 1.406S12.562 15.98 12 16H6ZM2 8h1v1.5H2c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5h6c.313-.02.48-.188.5-.5v-1H10v1c-.02.563-.219 1.031-.594 1.406S8.562 19.98 8 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-8c.02-.563.219-1.031.594-1.406S1.438 8.02 2 8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyMdBoldIcon);
export default ForwardRef;
