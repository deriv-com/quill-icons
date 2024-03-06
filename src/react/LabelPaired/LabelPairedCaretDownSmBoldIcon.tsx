import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownSmBoldIcon = (
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
      <path d='m4.5 12.746 2.434-2.434H2.066zm.629 1.258a.9.9 0 0 1-.629.246.9.9 0 0 1-.629-.246l-3.5-3.5q-.383-.437-.191-.957A.9.9 0 0 1 1 9h7q.574.027.82.547.192.519-.191.957z' />
    </g>
    <defs>
      <clipPath id='5d36dda45eca404c077f0c4a07b3e6d6__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmBoldIcon);
export default ForwardRef;
