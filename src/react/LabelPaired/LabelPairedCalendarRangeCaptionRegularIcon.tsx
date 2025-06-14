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
      <path d='M2.875 3.5c.188 0 .375.188.375.375V5h4.5V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375V5h.75c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V6.5c0-.82.656-1.5 1.5-1.5h.75V3.875c0-.187.164-.375.375-.375M10 8H1v6c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75zm-.75-2.25h-7.5A.755.755 0 0 0 1 6.5v.75h9V6.5a.77.77 0 0 0-.75-.75m0 4.125c0 .21-.187.375-.375.375h-3.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375M5.875 13.25h-3.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375M2.5 9.875c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375M2.875 11c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563m5.25 2.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375c0 .21.164.375.375.375m1.125-.375c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.126 0 1.122 1.122 0 0 1 0-1.945 1.08 1.08 0 0 1 1.125 0c.329.211.563.563.563.961' />
    </g>
    <defs>
      <clipPath id='de94b65cb575b4eb720a36796c595680__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeCaptionRegularIcon);
export default ForwardRef;
