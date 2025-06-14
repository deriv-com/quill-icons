import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMarketStocksIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M15.5 1.5a1.5 1.5 0 0 1-1.993 1.417l-2.233 2.79a1.5 1.5 0 1 1-2.628.145l-2-1.998a1.5 1.5 0 0 1-1.293 0l-2 2a1.5 1.5 0 1 1-.707-.707l2-2a1.5 1.5 0 1 1 2.708 0l2 2a1.5 1.5 0 0 1 1.14-.064l2.232-2.79A1.5 1.5 0 1 1 15.5 1.5m-5 5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 1 0m-8.114.318a.5.5 0 1 1-.77-.636.5.5 0 0 1 .77.636m11.2-5.598.024-.032a.5.5 0 1 1-.025.032M6 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1' />
      <path d='M12.5 6.5a1.5 1.5 0 0 1 3 0v8a1.5 1.5 0 0 1-3 0zM14 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0v-8A.5.5 0 0 0 14 6M.5 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-3 0zM2 10a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 2 10M8.5 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-3 0zM10 10a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5M4.5 7.5a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 1-3 0zM6 7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 6 7' />
    </g>
    <defs>
      <clipPath id='04ec7bd96b7bb097c161e9e0c4d77a1f__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyMarketStocksIcon);
export default ForwardRef;
