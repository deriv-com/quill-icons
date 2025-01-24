import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksMicroStrategyIcon = (
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
    <g clipPath='url(#19f7e6b91c0f3742a511f17207931f4a__a)'>
      <path
        fill='#D9232E'
        d='M15.992 31.998c-8.843 0-15.99-7.147-15.99-15.99 0-8.84 7.147-15.99 15.99-15.99 8.841 0 15.99 7.15 15.99 15.99 0 8.843-7.149 15.99-15.99 15.99'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m19.982 9.734 4.016 3.987v8.545h-4.016zM13.99 9.734h4.017v12.532h-4.016zM8.002 9.734h4.017v12.532H8.002z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='19f7e6b91c0f3742a511f17207931f4a__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMicroStrategyIcon);
export default ForwardRef;
