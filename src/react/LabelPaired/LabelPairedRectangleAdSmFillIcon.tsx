import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdSmFillIcon = (
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
      <path d='M1.875 4.625h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75m4.512 3.883a.62.62 0 0 0-.574-.383.67.67 0 0 0-.602.383l-1.969 3.937a.647.647 0 0 0 .301.875c.328.164.71.028.875-.3l.137-.301h2.488l.137.3c.164.329.574.465.875.301a.647.647 0 0 0 .3-.875zm-.574 1.75.574 1.148H5.21zm5.03.492c.356 0 .657.3.657.656 0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656m.657-1.176a1.9 1.9 0 0 0-.656-.136 1.98 1.98 0 0 0-1.969 1.968 1.96 1.96 0 0 0 1.969 1.969c.3 0 .574-.055.847-.191.11.136.274.191.465.191a.65.65 0 0 0 .656-.656V8.78c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656z' />
    </g>
    <defs>
      <clipPath id='a2c890aa043c4900852cfbed0ec54df5__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmFillIcon);
export default ForwardRef;
