import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 16.438h7q.41-.028.438-.438V8.125H7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H2q-.41.027-.437.437V16q.027.41.437.438M2 3.75h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52m6.152 7.328-2.925 2.899a.63.63 0 0 1-.465.191.63.63 0 0 1-.465-.191l-1.45-1.45q-.382-.465 0-.93.465-.383.93 0l.985.985 2.46-2.434q.465-.383.93 0 .384.465 0 .93' />
    </g>
    <defs>
      <clipPath id='d55f5c9e9164f6397974619dae5d8050__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckSmBoldIcon);
export default ForwardRef;
