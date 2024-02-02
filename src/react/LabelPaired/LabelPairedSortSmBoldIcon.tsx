import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortSmBoldIcon = (
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
      <path d='M2.066 8.563h4.868L4.5 6.129zM5.13 4.87l3.5 3.5q.383.437.191.957a.9.9 0 0 1-.82.547H1a.9.9 0 0 1-.82-.547q-.192-.519.191-.957l3.5-3.5a.91.91 0 0 1 .629-.246q.356 0 .629.246m-3.063 8.067L4.5 15.37l2.434-2.434zm3.063 3.69a.9.9 0 0 1-.629.247.9.9 0 0 1-.629-.246l-3.5-3.5q-.383-.437-.191-.957a.9.9 0 0 1 .82-.547h7q.574.027.82.547.192.519-.191.957z' />
    </g>
    <defs>
      <clipPath id='8d620bb24cfcf857__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortSmBoldIcon);
export default ForwardRef;
