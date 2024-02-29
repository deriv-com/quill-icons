import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightSmBoldIcon = (
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
      <path d='M12.688 10.75q0-1.56-.766-2.844a5.7 5.7 0 0 0-2.078-2.078A5.64 5.64 0 0 0 7 5.062q-1.504 0-2.844.766a5.7 5.7 0 0 0-2.078 2.078 5.45 5.45 0 0 0-.765 2.844q0 1.56.765 2.844.738 1.286 2.078 2.078 1.34.765 2.844.765t2.844-.765q1.34-.794 2.078-2.078.765-1.286.765-2.844M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m7.219-3.5q.848.027 1.394.574.547.547.575 1.395 0 .656-.356 1.148.765.63.793 1.695-.027.93-.629 1.56-.63.6-1.559.628h-.875q-.93-.027-1.558-.629-.601-.63-.629-1.559.027-1.065.82-1.695a1.82 1.82 0 0 1-.383-1.148q.028-.848.575-1.395.547-.546 1.394-.574zM6.78 9.875h.438q.601-.054.656-.656-.054-.602-.656-.656H6.78q-.601.054-.656.656.054.601.656.656m.438 1.313h-.656a.85.85 0 0 0-.63.246.85.85 0 0 0-.245.629q0 .382.246.628a.85.85 0 0 0 .628.246h.875a.85.85 0 0 0 .63-.246.85.85 0 0 0 .245-.629.85.85 0 0 0-.246-.628.85.85 0 0 0-.629-.246z' />
    </g>
    <defs>
      <clipPath id='c9324e3d36b66b0cd64c5af4192f87f1__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightSmBoldIcon);
export default ForwardRef;
