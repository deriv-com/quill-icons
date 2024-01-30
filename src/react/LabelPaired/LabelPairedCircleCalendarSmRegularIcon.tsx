import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m5.688-4.375q.41.027.437.438v.437h1.75v-.437q.027-.411.438-.438.41.027.437.438v.437h.438q.546.027.93.383.355.382.382.93v4.375a1.43 1.43 0 0 1-.383.93 1.43 1.43 0 0 1-.93.382H4.814a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V8.564q.027-.547.383-.93.383-.356.93-.383h.437v-.437q.027-.411.438-.438M4.375 8.563V9h5.25v-.437q-.027-.411-.437-.438H4.813q-.411.027-.438.438m5.25 1.312h-5.25v3.063q.027.41.438.437h4.375q.41-.027.437-.437z' />
    </g>
    <defs>
      <clipPath id='6880ad0f440204151b41491e292532c8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarSmRegularIcon);
export default ForwardRef;
