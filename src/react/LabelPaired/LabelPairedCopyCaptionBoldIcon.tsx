import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyCaptionBoldIcon = (
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
      <path d='M9.25 11.375q.352-.023.375-.375V6.219L8.031 4.625H4.75q-.352.023-.375.375v6q.023.352.375.375zM4.75 12.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 3.25 11V5q.024-.632.445-1.055.423-.421 1.055-.445h3.281q.469 0 .797.328l1.594 1.594q.328.328.328.797V11a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445zm-3-6h.75v1.125h-.75q-.352.023-.375.375v6q.023.352.375.375h4.5q.352-.023.375-.375v-.75H7.75V14a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445h-4.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V8q.024-.632.445-1.055.422-.421 1.055-.445' />
    </g>
    <defs>
      <clipPath id='9769c1449e1012e47b5ed7b3c6cf11be__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionBoldIcon);
export default ForwardRef;
