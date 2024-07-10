import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepCaptionBoldIcon = (
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
      <path d='M2.125 5.563v2.484L6.25 5.14A.64.64 0 0 1 6.648 5a.73.73 0 0 1 .727.727v7.57a.705.705 0 0 1-.703.703c-.164 0-.305-.023-.422-.117l-4.125-2.906v2.46a.555.555 0 0 1-.562.563.54.54 0 0 1-.563-.562V5.562C1 5.259 1.234 5 1.563 5a.57.57 0 0 1 .562.563m0 4.054L6.25 12.5V6.523L2.125 9.406z' />
    </g>
    <defs>
      <clipPath id='85b2b90dbe1778418e6fe78c35d49a3f__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionBoldIcon);
export default ForwardRef;
