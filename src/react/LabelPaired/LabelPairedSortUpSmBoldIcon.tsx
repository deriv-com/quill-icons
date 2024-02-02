import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpSmBoldIcon = (
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
      <path d='M4.5 6.129 2.066 8.563h4.868zM3.871 4.87a.91.91 0 0 1 .629-.246q.356 0 .629.246l3.5 3.5q.383.437.191.957a.9.9 0 0 1-.82.547H1a.9.9 0 0 1-.82-.547q-.192-.519.191-.957z' />
    </g>
    <defs>
      <clipPath id='6cf872dc9fbe0f8e8a53598619a0723b__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpSmBoldIcon);
export default ForwardRef;
