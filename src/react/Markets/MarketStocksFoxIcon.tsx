import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksFoxIcon = (
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
        fill='#3681DA'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path fill='#fff' d='M6.915 13.657V15h2.84v2.809h-2.84v3.327H4V10.833h6.197l.199 2.824z' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M18.719 12.417c.967.987 1.45 2.179 1.45 3.575 0 1.406-.483 2.603-1.45 3.59-.968.987-2.134 1.48-3.5 1.48-1.377 0-2.549-.493-3.516-1.48-.967-.987-1.45-2.184-1.45-3.59 0-1.396.483-2.588 1.45-3.575.967-.987 2.14-1.481 3.516-1.481 1.366 0 2.532.494 3.5 1.48m-4.338 5.639c0 .23.084.429.254.598.17.17.374.255.613.255a.81.81 0 0 0 .606-.255.83.83 0 0 0 .247-.598v-4.173a.849.849 0 0 0-.247-.614.812.812 0 0 0-.606-.254.836.836 0 0 0-.613.254.835.835 0 0 0-.254.614z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='m23.253 18.557 1.465 2.61H28l-3.114-5.373 2.824-4.961h-3.19l-1.221 2.229-1.206-2.229h-3.297l2.885 4.991-3.053 5.343h3.206z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksFoxIcon);
export default ForwardRef;
