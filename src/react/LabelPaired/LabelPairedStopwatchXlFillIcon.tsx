import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 6h4.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H12v1.64c1.734.282 3.328.985 4.64 2.063l1.032-.984a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11l-1.126 1.124c.985 1.547 1.594 3.375 1.594 5.297 0 5.39-4.406 9.75-9.75 9.75-5.39 0-9.75-4.36-9.75-9.75A9.7 9.7 0 0 1 9 10.64V9h-.75a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5m3.375 9a1.14 1.14 0 0 0-1.125-1.125A1.11 1.11 0 0 0 9.375 15v6c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 11.625 21z' />
    </g>
    <defs>
      <clipPath id='8ed0d859541a8d70aedae043d210c6b6__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchXlFillIcon);
export default ForwardRef;
