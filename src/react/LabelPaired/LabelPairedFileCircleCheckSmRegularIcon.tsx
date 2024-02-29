import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckSmRegularIcon = (
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
      <path d='M9 16.875a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V9H6.813a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626H2a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246zm-2.187-8.75h3.062a.7.7 0 0 0-.137-.191L6.566 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437M2 3.75h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52m5.988 8.04L5.09 14.714q-.329.246-.63 0l-1.448-1.477q-.275-.3 0-.601.3-.246.601 0l1.149 1.148 2.625-2.625q.3-.246.601 0 .274.328 0 .63' />
    </g>
    <defs>
      <clipPath id='5279836a375b9ec7c1aaf4dfa71f1fa4__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckSmRegularIcon);
export default ForwardRef;
