import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={22}
    viewBox='0 0 15 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.137 10.094h6.836L2.277 6.375zm0 1.312-1.86 3.746 8.696-3.746zM1.703 4.707l12.25 5.25a.9.9 0 0 1 .547.82.89.89 0 0 1-.547.793l-12.25 5.25a.89.89 0 0 1-.984-.218c-.246-.247-.301-.657-.137-.985l2.434-4.867L.582 5.91a.92.92 0 0 1 .137-1.012.93.93 0 0 1 .984-.191' />
    </g>
    <defs>
      <clipPath id='74f84acaa41a8cd61ae3ef4e9b0cdf7d__a'>
        <path d='M0 0h15v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopSmBoldIcon);
export default ForwardRef;
