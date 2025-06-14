import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6.5c-.281 0-.5.25-.5.5v10c0 .281.219.5.5.5h14c.25 0 .5-.219.5-.5V7c0-.25-.25-.5-.5-.5zM0 7c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm7.156 2.438 2.25 4.5a.74.74 0 0 1-.344 1c-.343.187-.812.03-1-.344l-.156-.344H5.063l-.157.344a.74.74 0 0 1-1 .344.74.74 0 0 1-.344-1l2.25-4.5A.77.77 0 0 1 6.5 9c.281 0 .531.156.656.438m-.656 2-.687 1.312h1.343zm5.75.562a.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75m.75-1.344V9.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v4.5a.74.74 0 0 1-.75.75c-.219 0-.406-.062-.531-.219a2.1 2.1 0 0 1-.969.219C11 15 10 14 10 12.75c0-1.219 1-2.25 2.25-2.25.25 0 .5.063.75.156' />
    </g>
    <defs>
      <clipPath id='03bda3068b070c2051632a958c3659cd__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdMdBoldIcon);
export default ForwardRef;
