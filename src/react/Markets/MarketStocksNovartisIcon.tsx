import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksNovartisIcon = (
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
    <g clipPath='url(#4132da7f1816d0f2184e24704124f269__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='url(#4132da7f1816d0f2184e24704124f269__b)'
        d='m18.667 15.204-.038.097c.632.278 2.05 1.381 2.05 3.602 0 2.092-1.763 4.2-4.534 4.2-3.447 0-4.635-2.016-4.635-3.868 0-2.373 1.659-3.952 1.659-6.114a3.38 3.38 0 0 0-2.66-3.26l-.057.098a2.8 2.8 0 0 1 .85 2.025c0 2.335-1.969 3.994-1.969 6.673 0 2.468 1.726 4.983 6.72 4.983 4.453 0 6.8-2.18 6.8-4.5-.003-1.99-1.428-3.674-4.186-3.937'
      />
      <path fill='#0460A9' d='m16.113 20.297 1.264-11.94h-2.622l1.264 11.94z' />
    </g>
    <defs>
      <linearGradient
        id='4132da7f1816d0f2184e24704124f269__b'
        x1={-0.007}
        x2={31.992}
        y1={15.996}
        y2={15.996}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.3} stopColor='#E74A21' />
        <stop offset={0.7} stopColor='#EC9A1E' />
      </linearGradient>
      <clipPath id='4132da7f1816d0f2184e24704124f269__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNovartisIcon);
export default ForwardRef;
