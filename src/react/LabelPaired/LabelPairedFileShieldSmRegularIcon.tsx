import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.875 16.875h.11q.327.355.71.684-.355.19-.82.191h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23V5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93V9.41l-.875.356V9H6.688a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626h-3.5a.85.85 0 0 0-.629.246A.85.85 0 0 0 1 5.5V16q0 .383.246.629a.85.85 0 0 0 .629.246zm.875-8.75a.7.7 0 0 0-.137-.191L6.441 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437zm-.875 3.855q0 1.149.574 2.461.575 1.313 2.051 2.188V10.94zm6.125 0-2.625-1.039v5.688q1.476-.875 2.05-2.188.575-1.313.575-2.46m-2.816-2.05 3.28 1.312q.384.165.411.602.027.902-.3 2.023-.302 1.122-1.094 2.16-.82 1.04-2.297 1.668a.58.58 0 0 1-.493 0q-1.477-.628-2.296-1.668Q8.6 14.99 8.3 13.867 7.972 12.746 8 11.844q.027-.437.41-.602l3.281-1.312a.58.58 0 0 1 .493 0' />
    </g>
    <defs>
      <clipPath id='6c90ea5f0b4c7e8c1ea07753b3d236dc__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldSmRegularIcon);
export default ForwardRef;
