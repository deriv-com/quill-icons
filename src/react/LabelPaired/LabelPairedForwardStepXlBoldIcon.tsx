import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 10.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v15.75A1.11 1.11 0 0 1 12.375 27c-.656 0-1.125-.469-1.125-1.125v-4.922l-8.297 5.813c-.234.187-.515.234-.797.234C1.36 27 .75 26.39.75 25.594v-15.14C.75 9.655 1.36 9 2.156 9c.281 0 .563.094.797.281l8.297 5.813zm0 8.11v-.422L3 12.047V24z' />
    </g>
    <defs>
      <clipPath id='1709a3b8e8548a45ffca4003889eea5b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlBoldIcon);
export default ForwardRef;
