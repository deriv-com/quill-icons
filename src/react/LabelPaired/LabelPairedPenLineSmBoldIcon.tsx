import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineSmBoldIcon = (
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
      <path d='m.48 15.754.63-2.133q.191-.6.628-1.012l8.313-8.34a1.73 1.73 0 0 1 1.23-.492q.684 0 1.23.493l1.095 1.093q.108.11.218.274.328.52.274 1.12-.055.603-.493 1.067l-8.312 8.313-.11.11a2.6 2.6 0 0 1-.93.519l-2.132.629-1.148.328a.63.63 0 0 1-.657-.164q-.245-.274-.164-.657zm1.723-1.121-.465 1.504 1.504-.438.656-.191q.247-.082.465-.274l6.235-6.261-1.696-1.696-6.234 6.235-.055.054q-.164.192-.246.41zm4.703 1.805h8.313q.601.054.656.656-.055.601-.656.656H6.906q-.601-.055-.656-.656.054-.602.656-.657' />
    </g>
    <defs>
      <clipPath id='3ac1a6cce1ecf953897cc07c012df34d__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineSmBoldIcon);
export default ForwardRef;
