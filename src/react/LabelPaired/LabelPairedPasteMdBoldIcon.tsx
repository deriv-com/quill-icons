import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPasteMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M2.5 7H2c-.313.02-.48.188-.5.5V16c.02.313.188.48.5.5h3V18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V7.5c.02-.563.219-1.031.594-1.406S1.438 5.52 2 5.5h1.281c.063-.438.25-.792.563-1.063C4.156 4.146 4.542 4 5 4c.458 0 .844.146 1.156.438.313.27.5.625.563 1.062H8c.48 0 .896.146 1.25.438.333.27.563.625.688 1.062H8c-.563 0-1.073.135-1.531.406-.438.271-.792.636-1.063 1.094H3.5a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2.5 7.5V7Zm2-1.25c.02.313.188.48.5.5.313-.02.48-.188.5-.5-.02-.313-.188-.48-.5-.5-.313.02-.48.188-.5.5ZM8 18.5h6c.313-.02.48-.188.5-.5v-6H13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 12 11V9.5H8c-.313.02-.48.188-.5.5v8c.02.313.188.48.5.5Zm6 1.5H8c-.563-.02-1.031-.219-1.406-.594S6.02 18.563 6 18v-8c.02-.563.219-1.031.594-1.406S7.437 8.02 8 8h4.875c.417 0 .77.146 1.063.438l1.624 1.624c.292.292.438.646.438 1.063V18c-.02.563-.219 1.031-.594 1.406S14.562 19.98 14 20Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdBoldIcon);
export default ForwardRef;
