import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareListMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6.5c-.281 0-.5.25-.5.5v10c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5V7c0-.25-.25-.5-.5-.5zM0 7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm3 2c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1m3.25 0A.74.74 0 0 1 7 8.25h3a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H7A.72.72 0 0 1 6.25 9m0 3a.74.74 0 0 1 .75-.75h3a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H7a.72.72 0 0 1-.75-.75m0 3a.74.74 0 0 1 .75-.75h3a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H7a.72.72 0 0 1-.75-.75M4 13c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1m-1 2c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='d7f1a979ddbaa1288841d702ba3cf2f8__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareListMdBoldIcon);
export default ForwardRef;
