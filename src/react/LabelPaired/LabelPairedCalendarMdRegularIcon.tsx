import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCalendarMdRegularIcon = (
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
        d='M3.5 4c.313.02.48.188.5.5V6h6V4.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V6h1c.563.02 1.031.219 1.406.594S13.98 7.437 14 8v10c-.02.563-.219 1.031-.594 1.406S12.562 19.98 12 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18V8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6h1V4.5c.02-.313.188-.48.5-.5Zm9.5 6H1v8c0 .292.094.531.281.719A.974.974 0 0 0 2 19h10a.974.974 0 0 0 .719-.281A.974.974 0 0 0 13 18v-8Zm-1-3H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8v1h12V8a.974.974 0 0 0-.281-.719A.974.974 0 0 0 12 7Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarMdRegularIcon);
export default ForwardRef;
