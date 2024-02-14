import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarCaptionRegularIcon = (
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
      <path d='M2.875 3.5q.352.023.375.375V5h4.5V3.875q.023-.352.375-.375.352.023.375.375V5h.75q.633.024 1.055.445.421.423.445 1.055V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V6.5q.024-.632.445-1.055Q1.117 5.024 1.75 5h.75V3.875q.023-.352.375-.375M10 8H1v6q0 .328.21.54.212.21.54.21h7.5a.73.73 0 0 0 .54-.21A.73.73 0 0 0 10 14zm-.75-2.25h-7.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.75h9V6.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21' />
    </g>
    <defs>
      <clipPath id='d6f8aaeb2efe1d8b624c61897b655123__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarCaptionRegularIcon);
export default ForwardRef;
