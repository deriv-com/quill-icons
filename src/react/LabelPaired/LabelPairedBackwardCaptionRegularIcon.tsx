import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.89 9.5 6 13.203V5.797zM6.048 5q.305 0 .492.21.21.189.211.493v2.414l4.125-2.976A.7.7 0 0 1 11.297 5q.305 0 .492.21.21.189.211.493v7.594q0 .305-.21.492a.63.63 0 0 1-.493.211.7.7 0 0 1-.422-.14L6.75 10.882v2.414q0 .305-.21.492a.63.63 0 0 1-.493.211.7.7 0 0 1-.422-.14L.235 9.944A.52.52 0 0 1 0 9.5q0-.281.234-.445L5.625 5.14A.7.7 0 0 1 6.047 5m.703 4.945 4.5 3.258V5.797l-4.5 3.258z' />
    </g>
    <defs>
      <clipPath id='874b16e265a0a97b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionRegularIcon);
export default ForwardRef;
