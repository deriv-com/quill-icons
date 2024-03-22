import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3M4.875 5.75a.385.385 0 0 0-.375.375V6.5h-.75a.755.755 0 0 0-.75.75V8h6v-.75a.77.77 0 0 0-.75-.75H7.5v-.375a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375V6.5h-1.5v-.375a.4.4 0 0 0-.375-.375M3 11.75c0 .422.328.75.75.75h4.5c.398 0 .75-.328.75-.75v-3H3z' />
    </g>
    <defs>
      <clipPath id='f35d10f0dcd9bde17fc869dac1bd1e81__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarCaptionFillIcon);
export default ForwardRef;
