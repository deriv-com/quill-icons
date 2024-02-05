import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleChevronDownSmRegularIcon = (
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
      <path d='M7 16.875a6.3 6.3 0 0 0 3.063-.82 6.3 6.3 0 0 0 2.242-2.242 6.12 6.12 0 0 0 0-6.126 6.3 6.3 0 0 0-2.242-2.242A6.3 6.3 0 0 0 7 4.625a6.3 6.3 0 0 0-3.062.82 6.3 6.3 0 0 0-2.243 2.242 6.12 6.12 0 0 0 0 6.126 6.3 6.3 0 0 0 2.242 2.242q1.395.792 3.063.82M7 3.75q1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93m-3.363 6.426q-.275-.3 0-.602.3-.273.601 0L7 12.31l2.762-2.735q.3-.273.601 0 .274.3 0 .602l-3.062 3.062q-.3.274-.602 0z' />
    </g>
    <defs>
      <clipPath id='09d64fec2b079a2c910469278ad257ca__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronDownSmRegularIcon);
export default ForwardRef;
