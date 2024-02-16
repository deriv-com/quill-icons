import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSmRegularIcon = (
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
      <path d='M11.266 15.152a6.2 6.2 0 0 0 1.367-1.968 6 6 0 0 0 .492-2.434q-.027-1.722-.848-3.09a5.73 5.73 0 0 0-2.187-2.187Q8.722 4.653 7 4.625q-1.722.026-3.09.848A5.73 5.73 0 0 0 1.723 7.66q-.82 1.368-.848 3.09 0 1.312.492 2.434a6.2 6.2 0 0 0 1.367 1.968q.3-1.175 1.23-1.914.903-.711 2.161-.738h1.75q1.259.027 2.16.738.93.738 1.23 1.914m-.766.63q-.109-1.04-.848-1.696-.71-.684-1.777-.711h-1.75q-1.065.027-1.777.71-.739.657-.848 1.696 1.531 1.067 3.5 1.094 1.97-.027 3.5-1.094M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93m0-7q.738-.027 1.148-.656a1.4 1.4 0 0 0 0-1.313Q7.738 8.152 7 8.125q-.738.027-1.148.656a1.4 1.4 0 0 0 0 1.313q.41.629 1.148.656M4.813 9.438q.027-1.23 1.093-1.887 1.095-.601 2.188 0 1.065.656 1.094 1.886-.028 1.23-1.094 1.887-1.095.601-2.188 0-1.065-.656-1.093-1.886' />
    </g>
    <defs>
      <clipPath id='da18548dbc407f8a18d0400545cc2fa5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSmRegularIcon);
export default ForwardRef;
