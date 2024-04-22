import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksNikeIcon = (
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
    <g clipPath='url(#e4ca5773318002cccd277fc54d90a579__a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M7.077 12.382c-1.575 1.837-3.074 4.11-3.074 5.811a2 2 0 0 0 .69 1.62 3.33 3.33 0 0 0 2.25.825 8.7 8.7 0 0 0 3.133-.81c1.5-.585 17.824-7.686 17.824-7.686.157-.082.127-.18-.075-.127L10 16.836c-.334.095-.68.143-1.027.143-1.365 0-2.572-.75-2.564-2.34a5.25 5.25 0 0 1 .637-2.25z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='e4ca5773318002cccd277fc54d90a579__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksNikeIcon);
export default ForwardRef;
