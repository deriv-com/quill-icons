import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksMicrosoftIcon = (
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
    <g clipPath='url(#eb65d986b6daf64e__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path fill='#F05126' d='M15.742 8H8v7.742h7.742z' />
      <path fill='#7EBC42' d='M24 8h-7.742v7.742H24z' />
      <path fill='#2A9FDA' d='M15.742 16.258H8V24h7.742z' />
      <path fill='#FDB716' d='M24 16.258h-7.742V24H24z' />
    </g>
    <defs>
      <clipPath id='eb65d986b6daf64e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMicrosoftIcon);
export default ForwardRef;
