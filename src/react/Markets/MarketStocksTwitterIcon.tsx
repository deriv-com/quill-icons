import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksTwitterIcon = (
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
    <g clipPath='url(#cb26d3edff998441975c8fbce362c262__a)'>
      <path
        fill='#60AADD'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M26 9.96a8.3 8.3 0 0 1-2.356.626 4.13 4.13 0 0 0 1.806-2.269 8.2 8.2 0 0 1-2.575 1.013 4.106 4.106 0 0 0-7.131 2.806c0 .315.035.63.106.937a11.66 11.66 0 0 1-8.456-4.287 4.1 4.1 0 0 0 1.25 5.475 4.04 4.04 0 0 1-1.875-.513v.057a4.1 4.1 0 0 0 3.287 4.018 4 4 0 0 1-1.081.144q-.388 0-.769-.069a4.1 4.1 0 0 0 3.832 2.844A8.2 8.2 0 0 1 6 22.442a11.6 11.6 0 0 0 6.288 1.844c7.55 0 11.674-6.25 11.674-11.675v-.531A8.3 8.3 0 0 0 26 9.96'
      />
    </g>
    <defs>
      <clipPath id='cb26d3edff998441975c8fbce362c262__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksTwitterIcon);
export default ForwardRef;
