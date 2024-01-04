import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksTeslaIcon = (
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
        fill='#E31937'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M6.56 10.111A22.968 22.968 0 0 1 16 8.245c3.243-.052 6.46.585 9.44 1.866.212-.375.4-.763.56-1.163A27.38 27.38 0 0 0 16 7 27.38 27.38 0 0 0 6 8.954c.156.4.343.787.56 1.157Z'
      />
      <path
        fill='#fff'
        d='M13.2 11.175 16 26.913l2.819-15.738c2.65 0 3.49.293 3.61 1.488a6.28 6.28 0 0 0 2.694-2.023 19.796 19.796 0 0 0-7.05-1.705l-2.067 2.49-2.066-2.49a19.77 19.77 0 0 0-7.056 1.705 6.278 6.278 0 0 0 2.688 2.023c.124-1.195.964-1.488 3.628-1.488Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksTeslaIcon);
export default ForwardRef;
