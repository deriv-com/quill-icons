import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPauseMdFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M1.5 6h1c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 2.5 18h-1a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 0 16.5v-9c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 1.5 6Zm6 0h1c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v9a1.63 1.63 0 0 1-.438 1.063A1.63 1.63 0 0 1 8.5 18h-1a1.63 1.63 0 0 1-1.063-.438A1.63 1.63 0 0 1 6 16.5v-9c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 7.5 6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdFillIcon);
export default ForwardRef;
