import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeMdFillIcon = (
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
      <path d='M3 5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1h4V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1h1.5c.813 0 1.5.688 1.5 1.5V9H0V7.5A1.5 1.5 0 0 1 1.5 6H3zm11 5v8.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.48 1.48 0 0 1 0 18.5V10zM4 13c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1m7 5c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m-5-5c0 .438.313.75.75.75h4.5A.74.74 0 0 0 12 13a.76.76 0 0 0-.75-.75h-4.5A.74.74 0 0 0 6 13m1.25 3.25h-4.5A.74.74 0 0 0 2 17c0 .438.313.75.75.75h4.5A.74.74 0 0 0 8 17a.76.76 0 0 0-.75-.75' />
    </g>
    <defs>
      <clipPath id='ee432fcd08c633148894bd3cb99310f5__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeMdFillIcon);
export default ForwardRef;
