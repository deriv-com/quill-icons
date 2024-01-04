import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencySingleCollateralDaiIcon = (
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
        fill='#F5AC37'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M31 16c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15Z'
      />
      <path fill='#FFCC80' d='M6 16h10v10L6 16Z' />
      <path fill='#F7B14A' d='M16 9V6L6 16l10 3v-6l-3 3H9l7-7Z' />
      <path fill='#F7C57B' d='M26 16H16v10l10-10Z' />
      <path fill='#F7B14A' d='M16 9V6l10 10-10 3v-6l3 3h4l-7-7Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencySingleCollateralDaiIcon);
export default ForwardRef;
