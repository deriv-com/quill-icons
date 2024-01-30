import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownSmBoldIcon = (
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
      <path d='m4.5 15.371 2.434-2.434H2.066zm-.629 1.258-3.5-3.5q-.383-.437-.191-.957a.9.9 0 0 1 .82-.547h7q.574.027.82.547.192.519-.191.957l-3.5 3.5a.9.9 0 0 1-.629.246.9.9 0 0 1-.629-.246' />
    </g>
    <defs>
      <clipPath id='0c8d65a8c3be55c6c9b5f88deb2d55dc__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmBoldIcon);
export default ForwardRef;
