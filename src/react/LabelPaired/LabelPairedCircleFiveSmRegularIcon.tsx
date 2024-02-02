import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveSmRegularIcon = (
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
      <path d='M7 4.625a6.3 6.3 0 0 0-3.062.82 6.3 6.3 0 0 0-2.243 2.242 6.12 6.12 0 0 0 0 6.126 6.3 6.3 0 0 0 2.242 2.242q1.395.792 3.063.82a6.3 6.3 0 0 0 3.063-.82 6.3 6.3 0 0 0 2.242-2.242 6.12 6.12 0 0 0 0-6.126 6.3 6.3 0 0 0-2.242-2.242A6.3 6.3 0 0 0 7 4.625M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93M5.688 7.25H8.75q.41.027.438.438-.028.41-.438.437H6.043L5.578 9.93l2.188.218q.82.11 1.34.657.491.574.519 1.394-.027.876-.602 1.45-.573.573-1.449.601H6.371q-1.202-.027-1.887-.984l-.027-.082q-.192-.356.11-.602.355-.192.601.11l.055.081q.41.575 1.148.602h1.203q.492 0 .82-.355a1.07 1.07 0 0 0 .356-.82q0-.465-.3-.794a1.2 1.2 0 0 0-.766-.383l-2.707-.273a.42.42 0 0 1-.301-.191.41.41 0 0 1-.055-.356l.656-2.625q.083-.3.41-.328' />
    </g>
    <defs>
      <clipPath id='e67e388747dff597__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveSmRegularIcon);
export default ForwardRef;
