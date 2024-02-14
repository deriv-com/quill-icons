import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.75 4.625q.383 0 .629.246a.9.9 0 0 1 .246.629V16a.9.9 0 0 1-.246.629.85.85 0 0 1-.629.246H1.25a.85.85 0 0 1-.629-.246A.91.91 0 0 1 .375 16V5.5q0-.356.246-.629a.85.85 0 0 1 .629-.246zm-7.684 10.5h.028V9.273H2.262v5.852zM3.164 8.48q.465 0 .738-.3.3-.3.328-.739a1.14 1.14 0 0 0-.328-.765q-.273-.3-.738-.301-.438 0-.738.3-.3.302-.301.766 0 .438.3.739.301.3.74.3m7.711 6.645v-3.2q.055-1.202-.383-1.995-.438-.766-1.777-.793-.684 0-1.121.3-.437.274-.602.63h-.027v-.794h-1.75v5.852h1.832v-2.898q-.027-.602.164-1.04.22-.437.902-.464.684.055.82.52.165.491.137 1.038v2.844z' />
    </g>
    <defs>
      <clipPath id='f8877ba6ba69130e56b144a7edaefd29__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinSmIcon);
export default ForwardRef;
