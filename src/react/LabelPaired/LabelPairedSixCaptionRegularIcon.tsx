import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 11c0-1.64-1.36-3-3-3s-2.977 1.313-3 2.93V11c0 1.664 1.336 3 3 3 1.64 0 3-1.336 3-3M3.203 7.344c.258-.047.516-.094.797-.094A3.76 3.76 0 0 1 7.75 11 3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11v-.117c.023-.89.375-1.758.96-2.414L4.845 4.39c.117-.164.375-.164.515-.024.164.117.164.375.024.516z' />
    </g>
    <defs>
      <clipPath id='808efbfc045b5310bb3659863d649957__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixCaptionRegularIcon);
export default ForwardRef;
