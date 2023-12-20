import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksTevaIcon = (
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
        fill='#D2EBDB'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#204E77'
        d='M20.122 15.939v6.492l-2.517 3.274a.72.72 0 0 1-.844.245.815.815 0 0 1-.501-.773l.013-4.117z'
      />
      <path
        fill='#35786E'
        d='m23.98 10.804-.01 2.345c.04 1.203-.16 2.588-.634 3.992-.432 1.283-.997 2.41-1.666 3.275l-1.549 2.015V15.94z'
      />
      <path
        fill='#9FD142'
        d='m20.122 9.48 2.534-3.284a.718.718 0 0 1 .843-.245c.303.12.504.425.501.773l-.02 4.08-3.858 5.135z'
      />
      <path
        fill='#269E75'
        d='m16.273 21.06.008-2.763c.003-1.126.235-2.384.668-3.667.491-1.461 1.197-2.702 1.98-3.605l1.193-1.546v6.46z'
      />
      <path
        fill='#35786E'
        d='m8.02 10.804.01 2.345c-.04 1.203.16 2.588.634 3.992.432 1.283.997 2.41 1.666 3.275l1.548 2.015v-6.492z'
      />
      <path
        fill='#204E77'
        d='M11.878 15.939v6.492l2.517 3.274a.72.72 0 0 0 .844.245.814.814 0 0 0 .5-.773l-.012-4.117z'
      />
      <path
        fill='#269E75'
        d='m15.727 21.06-.008-2.763c-.002-1.126-.235-2.384-.668-3.667-.49-1.461-1.197-2.702-1.98-3.605L11.88 9.48l-.001 6.46z'
      />
      <path
        fill='#9FD142'
        d='M11.879 9.48 9.344 6.195a.718.718 0 0 0-.843-.245.814.814 0 0 0-.501.773l.02 4.08 3.858 5.135z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksTevaIcon);
export default ForwardRef;
