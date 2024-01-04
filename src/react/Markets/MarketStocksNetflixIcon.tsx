import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksNetflixIcon = (
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
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#B11D23'
        d='M17.714 15.675c.252-.043 3.941 11.384 4.282 11.325V5.227h-4.282c0 6.698-.138 10.042 0 10.448ZM14.286 16.984C14.034 17.027 10.34 5.168 10 5.227l.004 21.8c1.7-.204 2.551-.284 4.282-.363 0-8.364.138-9.274 0-9.68Z'
      />
      <path
        fill='#E61D25'
        d='M14.286 5.227h-4.282l7.582 21.438c2.13.053 4.41.362 4.41.362l-7.71-21.8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNetflixIcon);
export default ForwardRef;
