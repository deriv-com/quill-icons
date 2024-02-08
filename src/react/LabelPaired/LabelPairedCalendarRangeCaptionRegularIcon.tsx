import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeCaptionRegularIcon = (
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
      <path d='M3.375 3.5q.352.023.375.375V5h4.5V3.875q.023-.352.375-.375.352.023.375.375V5h.75q.633.024 1.055.445.421.423.445 1.055V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .75 14V6.5q.024-.632.445-1.055Q1.618 5.024 2.25 5H3V3.875q.023-.352.375-.375M10.5 8h-9v6q0 .328.21.54.212.21.54.21h7.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54zm-.75-2.25h-7.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.75h9V6.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21m0 4.125q-.023.352-.375.375h-3.75q-.352-.023-.375-.375.023-.352.375-.375h3.75q.352.023.375.375M6.375 13.25h-3.75q-.352-.023-.375-.375.023-.352.375-.375h3.75q.352.023.375.375-.023.352-.375.375M3 9.875q.023.352.375.375.352-.023.375-.375-.023-.352-.375-.375-.352.023-.375.375M3.375 11a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562.633.024.984.563.282.562 0 1.124-.351.54-.984.563m5.25 2.25q.352-.023.375-.375-.023-.352-.375-.375-.352.023-.375.375.023.352.375.375m1.125-.375q-.024.633-.562.984-.563.282-1.126 0a1.17 1.17 0 0 1-.562-.984q.024-.633.563-.984.562-.282 1.124 0 .54.351.563.984' />
    </g>
    <defs>
      <clipPath id='4471dbd117b20e7dd6186f50c9468111__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeCaptionRegularIcon);
export default ForwardRef;
