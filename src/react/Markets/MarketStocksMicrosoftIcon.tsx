import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksMicrosoftIcon = (
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
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path fill='#F05126' d='M15.742 8H8v7.742h7.742V8Z' />
      <path fill='#7EBC42' d='M24 8h-7.742v7.742H24V8Z' />
      <path fill='#2A9FDA' d='M15.742 16.258H8V24h7.742v-7.742Z' />
      <path fill='#FDB716' d='M24 16.258h-7.742V24H24v-7.742Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMicrosoftIcon);
export default ForwardRef;
