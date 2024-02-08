import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 14.375h6q.352-.023.375-.375V7.25H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5q-.352.023-.375.375v9q.023.352.375.375M1.5 3.5h3.89q.61 0 1.055.445l2.11 2.11Q9 6.5 9 7.133V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5m5.273 6.281-2.507 2.485a.54.54 0 0 1-.399.164.54.54 0 0 1-.398-.164l-1.242-1.243q-.33-.397 0-.796.397-.33.796 0l.844.843 2.11-2.086q.397-.327.796 0 .33.4 0 .797' />
    </g>
    <defs>
      <clipPath id='c1dcc7377f00482a23f4588e230d33cf__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckCaptionBoldIcon);
export default ForwardRef;
