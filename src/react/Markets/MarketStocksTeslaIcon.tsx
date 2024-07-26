import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksTeslaIcon = (
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
    <g clipPath='url(#0f8b59138e7daff818545168b1cdaab2__a)'>
      <path
        fill='#E31937'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M6.56 10.111A23 23 0 0 1 16 8.245c3.243-.052 6.46.585 9.44 1.866q.319-.563.56-1.163A27.4 27.4 0 0 0 16 7 27.4 27.4 0 0 0 6 8.954q.234.601.56 1.157'
      />
      <path
        fill='#fff'
        d='M13.2 11.176 16 26.913l2.819-15.737c2.65 0 3.49.292 3.61 1.487a6.3 6.3 0 0 0 2.694-2.023 19.8 19.8 0 0 0-7.05-1.705l-2.067 2.49-2.066-2.49a19.8 19.8 0 0 0-7.056 1.705 6.3 6.3 0 0 0 2.688 2.023c.124-1.195.964-1.488 3.628-1.488'
      />
    </g>
    <defs>
      <clipPath id='0f8b59138e7daff818545168b1cdaab2__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksTeslaIcon);
export default ForwardRef;
