import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeMdBoldIcon = (
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
      <path d='M4.75 4.75V6h4.5V4.75A.74.74 0 0 1 10 4a.76.76 0 0 1 .75.75V6H12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2h1.25V4.75A.74.74 0 0 1 4 4a.76.76 0 0 1 .75.75M1.5 10v8c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5v-8zM3 13c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1m7 2c.531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1m-4-2a.74.74 0 0 1 .75-.75h3.5A.76.76 0 0 1 11 13a.74.74 0 0 1-.75.75h-3.5A.72.72 0 0 1 6 13m1.25 2.25A.76.76 0 0 1 8 16a.74.74 0 0 1-.75.75h-3.5A.72.72 0 0 1 3 16a.74.74 0 0 1 .75-.75z' />
    </g>
    <defs>
      <clipPath id='c137304108c17df0ba62eb9e101dd7ba__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeMdBoldIcon);
export default ForwardRef;
