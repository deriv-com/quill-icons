import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 7c-.313.02-.48.188-.5.5v9c.02.313.188.48.5.5H3c.313-.02.48-.188.5-.5v-9c-.02-.313-.188-.48-.5-.5H1.5ZM0 7.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 1.5 6H3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 3 18H1.5a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 0 16.5v-9ZM7 7c-.313.02-.48.188-.5.5v9c.02.313.188.48.5.5h1.5c.313-.02.48-.188.5-.5v-9c-.02-.313-.188-.48-.5-.5H7Zm-1.5.5c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 7 6h1.5c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 8.5 18H7a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 5.5 16.5v-9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdRegularIcon);
export default ForwardRef;
