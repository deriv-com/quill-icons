import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksPalantirTechnologiesIcon = (
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
    <g clipPath='url(#1172bd9aaa7682cd65f5491577013a6d__a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#F6F7F8'
        fillRule='evenodd'
        d='M23.29 13.678c0 4.075-3.287 7.414-7.296 7.414s-7.297-3.34-7.297-7.414 3.288-7.414 7.297-7.414 7.296 3.34 7.296 7.414m-2.245 0c0-2.852-2.245-5.133-5.051-5.133s-5.052 2.281-5.052 5.133 2.245 5.133 5.052 5.133c2.726 0 4.97-2.282 5.051-5.133m1.443 6.763 1.123 2.037-7.617 3.258-7.618-3.258L9.5 20.44l6.495 2.85z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='1172bd9aaa7682cd65f5491577013a6d__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksPalantirTechnologiesIcon);
export default ForwardRef;
