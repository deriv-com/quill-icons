import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardSmBoldIcon = (
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
      <path d='M6.125 6.32c0-.437.355-.82.82-.82.164 0 .328.055.465.164l6.317 4.567c.164.136.273.328.273.519 0 .219-.11.41-.273.547L7.41 15.863a.9.9 0 0 1-.465.137.806.806 0 0 1-.82-.82v-2.707l-4.84 3.39c-.137.11-.3.137-.465.137a.806.806 0 0 1-.82-.82V6.348C0 5.883.355 5.5.82 5.5c.164 0 .328.055.465.164l4.84 3.39zm0 4.32L1.313 7.278v6.973l4.812-3.363zm6.098.11L7.437 7.305v6.918z' />
    </g>
    <defs>
      <clipPath id='b361ee2d6c15b5c2e74fe24b39d9fd90__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmBoldIcon);
export default ForwardRef;
