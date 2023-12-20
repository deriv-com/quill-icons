import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksAmericanInternationalGroupIcon = (
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
        fill='#1BA3DD'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M21.715 16.142h3v.233c.012.477-.051.953-.187 1.41-.135.392-.35.752-.63 1.058a3.369 3.369 0 0 1-2.588 1.102 3.6 3.6 0 0 1-2.617-1.065 3.605 3.605 0 0 1 0-5.182 3.75 3.75 0 0 1 2.7-1.08 3.75 3.75 0 0 1 1.59.337 4.63 4.63 0 0 1 1.417 1.08l-.787.75a2.663 2.663 0 0 0-2.183-1.155 2.624 2.624 0 0 0-1.935.75 2.52 2.52 0 0 0-.788 1.905 2.475 2.475 0 0 0 .878 1.95c.48.446 1.108.697 1.762.705a2.25 2.25 0 0 0 1.463-.525 1.906 1.906 0 0 0 .75-1.282h-1.845z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M6.617 19.818 10 12.76h.428l3.262 7.057h-1.207l-.75-1.717h-3.12l-.81 1.717zm4.666-2.716-1.08-2.4h-.038l-1.133 2.4z'
        clipRule='evenodd'
      />
      <path fill='#fff' d='M14.845 19.818h1.102V12.76h-1.102z' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M28 22.57H4V10h24zm-.997-11.603H4.998v10.635h22.005z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAmericanInternationalGroupIcon);
export default ForwardRef;
