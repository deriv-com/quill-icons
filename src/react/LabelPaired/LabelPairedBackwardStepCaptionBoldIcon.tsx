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
      <path d='M2.125 5.563v2.46l4.148-2.906A.67.67 0 0 1 6.672 5q.305 0 .492.21.21.189.211.493v7.594q0 .305-.21.492a.63.63 0 0 1-.493.211.74.74 0 0 1-.399-.117l-4.148-2.906v2.46q-.047.516-.562.563-.516-.047-.563-.562V5.562q.047-.514.563-.562.514.047.562.563m0 4.03L6.25 12.5V6.523L2.125 9.406z' />
    </g>
    <defs>
      <clipPath id='50e13cde0fb87f116520ccfcd157d73e__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepCaptionBoldIcon);
export default ForwardRef;
