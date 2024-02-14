import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarSmBoldIcon = (
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
      <path d='M7 5.063q-1.56 0-2.844.765a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765 1.56 0 2.844-.765 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93M7 7.059q.273 0 .383.246l.875 1.722 1.914.274a.43.43 0 0 1 .328.3.44.44 0 0 1-.11.465l-1.367 1.34.329 1.914q.027.246-.192.41-.22.165-.437.055L7 12.883l-1.695.875a.4.4 0 0 1-.465-.027q-.219-.165-.192-.41l.329-1.915-1.368-1.34a.44.44 0 0 1-.109-.464.44.44 0 0 1 .355-.301l1.887-.274.875-1.722A.39.39 0 0 1 7 7.059' />
    </g>
    <defs>
      <clipPath id='9e0d527501fee33ca4ee5728fad25b74__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmBoldIcon);
export default ForwardRef;
