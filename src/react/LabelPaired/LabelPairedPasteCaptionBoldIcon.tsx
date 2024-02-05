import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteCaptionBoldIcon = (
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
      <path d='M1.875 5.75H1.5q-.352.023-.375.375V12.5q.023.352.375.375h2.25V14H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 12.5V6.125q.024-.632.445-1.055.423-.421 1.055-.445h.96a1.25 1.25 0 0 1 .423-.797q.351-.328.867-.328t.867.328q.352.305.422.797H6q.54 0 .938.328.375.305.515.797H6q-.633 0-1.148.305a2.36 2.36 0 0 0-.797.82h-1.43a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54zm1.5-.937q.023.351.375.375.352-.024.375-.375-.023-.353-.375-.375-.352.022-.375.375M6 14.375h4.5q.352-.023.375-.375V9.5H9.75a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V7.625H6q-.352.023-.375.375v6q.023.352.375.375m4.5 1.125H6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 4.5 14V8q.024-.632.445-1.055Q5.368 6.524 6 6.5h3.656q.469 0 .797.328l1.219 1.219q.328.328.328.797V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445' />
    </g>
    <defs>
      <clipPath id='3735601c787a8411cfe1b4ae95b8fed0__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteCaptionBoldIcon);
export default ForwardRef;
