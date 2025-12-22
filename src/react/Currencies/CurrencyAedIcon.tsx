import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyAedIcon = (
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
    <g clipPath='url(#b3a0015339a600a66ff9ce9485f15baa__a)'>
      <path
        fill='#FF323E'
        d='M10.438 31.007V.993C4.343 3.253 0 9.12 0 16c0 6.88 4.343 12.747 10.438 15.007'
      />
      <path
        fill='#333'
        d='M31.007 21.563C28.747 27.657 22.88 32 16 32c-1.956 0-3.83-.351-5.562-.993v-9.445z'
      />
      <path
        fill='#fff'
        d='M31.007 10.438h-20.57v11.125h20.57C31.649 19.83 32 17.956 32 16s-.351-3.83-.993-5.562'
      />
      <path
        fill='#12833B'
        d='M10.438.993v9.445h20.569C28.747 4.343 22.88 0 16 0c-1.956 0-3.83.351-5.562.993'
      />
    </g>
    <defs>
      <clipPath id='b3a0015339a600a66ff9ce9485f15baa__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyAedIcon);
export default ForwardRef;
