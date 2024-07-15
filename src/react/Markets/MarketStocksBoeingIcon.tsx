import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksBoeingIcon = (
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
    <g clipPath='url(#e2c452701dd9f143fce5a79661555620__a)'>
      <path
        fill='#0033A1'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M17.155 18.008a6.904 6.904 0 0 0-2.442-8.668A52 52 0 0 1 18.282 6a31 31 0 0 0-4.186 2.983 6.904 6.904 0 0 0-8.429 10.62c-1.32 2.86-1.53 5.155-.387 5.93 1.25.831 3.962-.678 5.609-3.13 0 0-2.52 2.269-3.901 1.749-.851-.322-.851-1.627-.153-3.493a6.904 6.904 0 0 0 8.933-.653l.245.46C19.02 20.22 28 19.98 28 19.98c-.02-.423-5.966-.016-10.845-1.973M4.826 15.096a6.078 6.078 0 0 1 8.592-5.527 33.1 33.1 0 0 0-7.348 9.214 6.05 6.05 0 0 1-1.244-3.687M10.9 21.17a6.05 6.05 0 0 1-3.758-1.3c1.203-2.713 3.65-6.353 6.99-9.912a6.073 6.073 0 0 1 2.26 7.724 11.1 11.1 0 0 1-2.887-1.881l1.83 3.436A6.05 6.05 0 0 1 10.9 21.17'
      />
    </g>
    <defs>
      <clipPath id='e2c452701dd9f143fce5a79661555620__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBoeingIcon);
export default ForwardRef;
