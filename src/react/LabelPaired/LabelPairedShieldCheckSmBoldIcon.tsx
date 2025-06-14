import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.996 7.223c-.164.082-.246.218-.246.355 0 2.516 1.04 6.809 5.086 8.75a.3.3 0 0 0 .3 0c4.048-1.914 5.087-6.234 5.114-8.75 0-.137-.11-.273-.246-.355L7 5.117zm10.5-1.203c.602.273 1.066.847 1.066 1.558-.027 2.734-1.148 7.684-5.851 9.953a1.68 1.68 0 0 1-1.45 0C1.56 15.261.439 10.313.439 7.578.41 6.868.875 6.293 1.477 6.02l5.14-2.188a.87.87 0 0 1 .738 0zM8.531 9.438c0 .628-.383 1.148-.875 1.394v1.887c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-1.887a1.52 1.52 0 0 1-.875-1.395c0-.82.683-1.53 1.531-1.53.82 0 1.531.71 1.531 1.53' />
    </g>
    <defs>
      <clipPath id='b193f2b5209a7fad63d68e51f033f7b5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckSmBoldIcon);
export default ForwardRef;
