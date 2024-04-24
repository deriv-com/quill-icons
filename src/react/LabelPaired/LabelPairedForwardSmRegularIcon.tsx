import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardSmRegularIcon = (
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
      <path d='M12.96 10.75 7 6.43v8.668zM6.946 5.5c.164 0 .328.055.465.164l6.317 4.567c.164.136.273.328.273.519 0 .219-.11.41-.273.547L7.41 15.863a.9.9 0 0 1-.465.137.806.806 0 0 1-.82-.82v-2.817l-4.84 3.5A.9.9 0 0 1 .82 16a.806.806 0 0 1-.82-.82V6.32c0-.437.355-.82.82-.82.164 0 .328.055.465.164l4.84 3.5V6.32c0-.437.355-.82.82-.82m-.82 5.797V10.23l-5.25-3.8v8.668z' />
    </g>
    <defs>
      <clipPath id='51e98528f3e71a00fe14c1aa4e54f3cc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmRegularIcon);
export default ForwardRef;
