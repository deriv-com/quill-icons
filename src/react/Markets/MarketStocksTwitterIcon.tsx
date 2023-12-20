import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksTwitterIcon = (
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
        fill='#60AADD'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M26 9.96a8.267 8.267 0 0 1-2.356.626 4.131 4.131 0 0 0 1.806-2.269 8.226 8.226 0 0 1-2.575 1.013 4.106 4.106 0 0 0-7.131 2.806c0 .315.035.63.106.937a11.664 11.664 0 0 1-8.456-4.287 4.1 4.1 0 0 0 1.25 5.475 4.037 4.037 0 0 1-1.875-.513v.057a4.1 4.1 0 0 0 3.287 4.018 4.104 4.104 0 0 1-1.081.144c-.258 0-.515-.023-.769-.069a4.1 4.1 0 0 0 3.832 2.844A8.206 8.206 0 0 1 6 22.442a11.587 11.587 0 0 0 6.288 1.844c7.55 0 11.674-6.25 11.674-11.675v-.531A8.257 8.257 0 0 0 26 9.96'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksTwitterIcon);
export default ForwardRef;
