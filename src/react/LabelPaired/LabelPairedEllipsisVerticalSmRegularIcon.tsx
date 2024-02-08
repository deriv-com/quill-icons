import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={22}
    viewBox='0 0 4 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 14.25q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629A.85.85 0 0 1 2 16a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629A.85.85 0 0 1 2 14.25m0-4.375q.383 0 .629.246a.85.85 0 0 1 .246.629.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629A.85.85 0 0 1 2 9.875m.875-3.5a.85.85 0 0 1-.246.629A.85.85 0 0 1 2 7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629A.85.85 0 0 1 2 5.5q.383 0 .629.246a.85.85 0 0 1 .246.629' />
    </g>
    <defs>
      <clipPath id='d0ea9eb22fe10027bf9b5012844a627c__a'>
        <path d='M0 0h4v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalSmRegularIcon);
export default ForwardRef;
