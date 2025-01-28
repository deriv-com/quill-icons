import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarCaptionFillIcon = (
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
      <path d='M2.5 4.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75V5h3v-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75V5h1.125c.61 0 1.125.516 1.125 1.125V7.25H.25V6.125C.25 5.515.742 5 1.375 5H2.5zM10.75 8v6.375c0 .633-.516 1.125-1.125 1.125h-8.25A1.11 1.11 0 0 1 .25 14.375V8z' />
    </g>
    <defs>
      <clipPath id='e7749c69fb088ad5266f282aa929add0__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarCaptionFillIcon);
export default ForwardRef;
