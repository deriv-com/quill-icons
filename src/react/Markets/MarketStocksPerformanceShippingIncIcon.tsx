import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksPerformanceShippingIncIcon = (
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
    <g clipPath='url(#72482b31483ed87b2ae9c4bc9bbad506__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#28348A'
        d='M24.48 19.582c2.225.02 3.651-3.047 3.651-3.047L3.5 19.604s20.236-.03 20.98-.02'
      />
      <path
        fill='#00ABA8'
        d='M15.627 12.397c-2.224-.02-3.651 3.047-3.651 3.047l16.524-.835c0 .01-12.129-2.202-12.873-2.212'
      />
    </g>
    <defs>
      <clipPath id='72482b31483ed87b2ae9c4bc9bbad506__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksPerformanceShippingIncIcon);
export default ForwardRef;
