import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyLinkIcon = (
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
    <g clipPath='url(#1ced36ce2ff2c891__a)'>
      <path
        fill='#2A5ADA'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M16.004 6 14.17 7.055l-5 2.89L7.334 11v10l1.835 1.055 5.046 2.89L16.05 26l1.835-1.055 4.954-2.89L24.674 21V11l-1.835-1.055-5-2.89zm-5 12.89v-5.78l5-2.89 5 2.89v5.78l-5 2.89z'
      />
    </g>
    <defs>
      <clipPath id='1ced36ce2ff2c891__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyLinkIcon);
export default ForwardRef;
