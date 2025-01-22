import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelCaptionFillIcon = (
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
      <path d='M3.75 3.5h1.5A3.76 3.76 0 0 1 9 7.25v4.5a3.746 3.746 0 0 1-3.75 3.75h-1.5A3.73 3.73 0 0 1 0 11.75v-4.5A3.746 3.746 0 0 1 3.75 3.5m1.5 3a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75v.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75z' />
    </g>
    <defs>
      <clipPath id='a78abc0ff2e8076c2655ff92274c1a45__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelCaptionFillIcon);
export default ForwardRef;
