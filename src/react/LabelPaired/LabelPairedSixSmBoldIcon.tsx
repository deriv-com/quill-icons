import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.563 12.5q-.029-1.312-.903-2.16-.848-.875-2.16-.902-1.367.027-2.242.984l-.137.164a2.97 2.97 0 0 0-.683 1.914q.027 1.313.902 2.16.847.875 2.16.902 1.313-.027 2.16-.902.875-.848.902-2.16M4.117 8.152q.191-.027.383-.027 1.86.054 3.09 1.285t1.285 3.09q-.054 1.86-1.285 3.09T4.5 16.875q-1.86-.055-3.09-1.285T.125 12.5q.027-1.75 1.148-2.953L5.074 4.87q.438-.437.93-.11.438.438.11.93z' />
    </g>
    <defs>
      <clipPath id='8d3ecde3e4839865__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmBoldIcon);
export default ForwardRef;
