import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardCaptionBoldIcon = (
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
      <path d='M6.75 5.703v2.32l4.148-2.906A.67.67 0 0 1 11.297 5q.305 0 .492.21.21.189.211.493v7.594q0 .305-.21.492a.63.63 0 0 1-.493.211.74.74 0 0 1-.399-.117L6.75 10.977v2.32q0 .305-.21.492a.63.63 0 0 1-.493.211.7.7 0 0 1-.422-.14L.235 9.944A.52.52 0 0 1 0 9.5q0-.281.234-.445L5.625 5.14A.7.7 0 0 1 6.047 5q.305 0 .492.21.21.189.211.493m0 3.703v.188l4.125 2.906V6.523zM1.523 9.5l4.102 2.977V6.523z' />
    </g>
    <defs>
      <clipPath id='a761236e75e54b44ff5b8025b8ff40b6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardCaptionBoldIcon);
export default ForwardRef;
