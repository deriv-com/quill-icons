import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdMdRegularIcon = (
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
      <path d='M2 6c-.562 0-1 .469-1 1v10c0 .563.438 1 1 1h14c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1zM0 7c0-1.094.875-2 2-2h14c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm6.688 2.313 2.25 5c.124.25 0 .53-.25.656-.25.125-.532 0-.657-.25L7.72 14H4.75l-.312.719c-.125.25-.407.375-.657.25s-.375-.406-.25-.656l2.25-5A.47.47 0 0 1 6.22 9c.218 0 .375.125.468.313m-.438 1.406L5.219 13H7.25zm5.5.781c-.469 0-.875.25-1.094.625a1.27 1.27 0 0 0 0 1.25c.219.406.625.625 1.094.625.438 0 .844-.219 1.063-.625a1.27 1.27 0 0 0 0-1.25 1.25 1.25 0 0 0-1.063-.625m1.25-.594V9.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v5c0 .281-.25.5-.5.5a.51.51 0 0 1-.5-.375 2.2 2.2 0 0 1-1.25.375c-1.25 0-2.25-1-2.25-2.25 0-1.219 1-2.25 2.25-2.25.438 0 .875.156 1.25.406' />
    </g>
    <defs>
      <clipPath id='c4222f277341bf1cb15039c2a9ba49e7__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdMdRegularIcon);
export default ForwardRef;
