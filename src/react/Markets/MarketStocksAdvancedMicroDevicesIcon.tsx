import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksAdvancedMicroDevicesIcon = (
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
        fill='#221F20'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M22.587 12.835H29v6.331L27.034 17.2v-2.546h-2.587zM22.653 16.491V19h2.437l1.7-1.797h-2.339v-2.355z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M7.694 18.647h1.452L6.743 13.24H5.181L3 18.647h1.428l.404-1.07H7.25zm-2.506-2.016.793-2.097.873 2.097z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M14.354 13.24h1.173v5.407H14.18V15.27l-1.46 1.697h-.205l-1.458-1.697v3.377H9.708V13.24h1.173l1.736 2.005z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M21.758 15.953c0-1.484-1.014-2.713-2.988-2.713h-2.388v5.407h2.237c2.16 0 3.14-1.14 3.14-2.694m-3.15 1.704h-.881v-3.426h.866c1.275 0 1.775.785 1.775 1.713 0 .793-.405 1.713-1.76 1.713'
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
const ForwardRef = forwardRef(MarketStocksAdvancedMicroDevicesIcon);
export default ForwardRef;
