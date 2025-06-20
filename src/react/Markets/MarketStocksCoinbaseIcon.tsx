import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksCoinbaseIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#13df3573c01e5957d01681049c347bc9__a)'>
      <path
        fill='#0052FF'
        d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
      />
      <path
        fill='#fff'
        d='M16.134 11.307c1.884 0 3.378 1.162 3.946 2.89h3.795C23.188 10.503 20.14 8 16.165 8c-4.514 0-8.04 3.427-8.04 8.015 0 4.59 3.438 7.985 8.04 7.985 3.886 0 6.994-2.503 7.682-6.227H20.08c-.538 1.728-2.032 2.92-3.917 2.92-2.6 0-4.423-1.997-4.423-4.678 0-2.711 1.794-4.708 4.394-4.708'
      />
    </g>
    <defs>
      <clipPath id='13df3573c01e5957d01681049c347bc9__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksCoinbaseIcon);
export default ForwardRef;
