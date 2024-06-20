import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksWalmartIcon = (
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
    <g clipPath='url(#1b5bcd0e814dc2c75a0c74404f09a3ec__a)'>
      <path
        fill='#337DBE'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FDB71B'
        d='M16.615 12.221a.97.97 0 0 1-.617.137.96.96 0 0 1-1.018-.624l-.519-5.874c0-.583.68-1.06 1.537-1.06s1.537.477 1.537 1.06l-.52 5.874a.97.97 0 0 1-.4.487M13.013 13.594a.95.95 0 0 1-.194.603l.014-.007a.97.97 0 0 1-1.046.575l-5.361-2.49c-.506-.296-.569-1.159-.148-1.86s1.18-1.088 1.677-.8l4.829 3.389a.95.95 0 0 1 .229.59M19.177 14.19a.955.955 0 0 0 1.046.568l5.347-2.484c.506-.295.576-1.116.155-1.86s-1.186-1.087-1.685-.8l-4.828 3.39a.95.95 0 0 0 0 1.193zM16.615 19.836a.97.97 0 0 0-.617-.137.96.96 0 0 0-1.018.625l-.519 5.874c0 .582.702 1.06 1.537 1.06s1.537-.478 1.537-1.06l-.52-5.874a.97.97 0 0 0-.4-.488M19.177 17.867a.954.954 0 0 1 1.032-.568l5.347 2.484c.506.295.576 1.123.155 1.86s-1.186 1.088-1.685.8l-4.828-3.383a.96.96 0 0 1 0-1.2zM13.012 18.467a.96.96 0 0 0-.193-.607l.014.007a.954.954 0 0 0-1.046-.568l-5.361 2.484c-.506.295-.569 1.123-.148 1.86s1.18 1.088 1.677.8l4.829-3.383a.96.96 0 0 0 .228-.593'
      />
    </g>
    <defs>
      <clipPath id='1b5bcd0e814dc2c75a0c74404f09a3ec__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksWalmartIcon);
export default ForwardRef;
