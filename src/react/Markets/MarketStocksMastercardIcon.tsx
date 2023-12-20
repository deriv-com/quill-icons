import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksMastercardIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path fill='#EB001B' d='M19 16a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0' />
      <path fill='#F79E1B' d='M28 16a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0' />
      <path
        fill='#FF5F00'
        d='M16 22a7.488 7.488 0 0 0 3-6 7.489 7.489 0 0 0-3-6 7.489 7.489 0 0 0-3 6 7.488 7.488 0 0 0 3 6'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMastercardIcon);
export default ForwardRef;
