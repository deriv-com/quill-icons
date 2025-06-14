import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m4.875-3.75c.188 0 .375.188.375.375V6.5h1.5v-.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375V6.5h.375C8.485 6.5 9 7.016 9 7.625v3.75c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 3 11.375v-3.75c0-.61.492-1.125 1.125-1.125H4.5v-.375c0-.187.164-.375.375-.375M3.75 7.625V8h4.5v-.375a.4.4 0 0 0-.375-.375h-3.75a.385.385 0 0 0-.375.375m4.5 1.125h-4.5v2.625c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375z' />
    </g>
    <defs>
      <clipPath id='629b85495fae1edd115c64fb171ddbc2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarCaptionRegularIcon);
export default ForwardRef;
