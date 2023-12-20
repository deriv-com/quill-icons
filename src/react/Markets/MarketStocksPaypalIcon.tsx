import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksPaypalIcon = (
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
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='url(#b)'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M22.431 7.508c.842.959 1.087 2.017.843 3.573a4.392 4.392 0 0 0-.857-.341 5.997 5.997 0 0 0-.798-.178c-.492-.079-1.03-.117-1.607-.117h-4.873a.777.777 0 0 0-.768.657l-2 12.679H8.534a.534.534 0 0 1-.527-.617l2.588-16.413A.89.89 0 0 1 11.474 6h6.216c2.141 0 3.815.452 4.741 1.508'
      />
      <path
        fill='#AED3EA'
        d='M23.274 11.081c-.018.119-.039.24-.063.364-.82 4.209-3.624 5.664-7.206 5.664H14.18a.886.886 0 0 0-.876.75l.03-.19-1.229 7.791a.467.467 0 0 0 .461.54h3.235a.778.778 0 0 0 .768-.657l.032-.164.61-3.864.039-.214a.778.778 0 0 1 .768-.657h.484c3.134 0 5.587-1.273 6.304-4.955.3-1.538.145-2.822-.647-3.725a3.08 3.08 0 0 0-.886-.683'
      />
      <path
        fill='#E7F1F8'
        d='M23.274 11.081c-.018.119-.039.24-.063.364-.82 4.209-3.624 5.664-7.206 5.664H14.18a.886.886 0 0 0-.876.75l.03-.19 1.036-6.567a.778.778 0 0 1 .768-.657h4.873c.577 0 1.115.038 1.607.117a7.099 7.099 0 0 1 .798.178 4.392 4.392 0 0 1 .858.342'
      />
    </g>
    <defs>
      <linearGradient id='b' x1={32} x2={0} y1={0} y2={32} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#004090' />
        <stop offset={1} stopColor='#009EDF' />
      </linearGradient>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksPaypalIcon);
export default ForwardRef;
