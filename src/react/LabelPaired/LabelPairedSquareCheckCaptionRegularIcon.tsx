import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v7.5q0 .328.21.54.212.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-7.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-1.5.75q.024-.632.445-1.055.422-.421 1.055-.445h7.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm7.758 2.508-3 3q-.258.234-.516 0l-1.5-1.5q-.234-.258 0-.516.258-.234.516 0l1.242 1.219 2.742-2.719q.258-.234.516 0 .234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='685957ba4d3d71496edaf78287f11a62__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckCaptionRegularIcon);
export default ForwardRef;
