import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeySmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.398 10.504a2.7 2.7 0 0 1-1.695-.574c-.11-.082-.191-.164-.3-.246a2.75 2.75 0 0 1-.821-1.996c0-.793.273-1.45.82-1.997a2.75 2.75 0 0 1 1.996-.82c.793 0 1.45.274 1.997.82.574.547.847 1.23.847 1.997 0 .765-.273 1.449-.848 1.996l-.246.246c-.109.082-.218.136-.328.218-.218.137-.465.22-.738.301a5 5 0 0 1-.684.055m1.067-1.75c.328-.3.465-.629.465-1.066 0-.41-.137-.739-.465-1.067-.3-.3-.63-.437-1.067-.437s-.765.136-1.066.437c-.3.3-.437.629-.437 1.066 0 .41.136.766.437 1.067.3.3.656.437 1.066.437.438 0 .766-.136 1.067-.437m-3.063 2.598.028-.028a9.2 9.2 0 0 1 1.941-.219h.164c.164 0 .328 0 .492.028.22 0 .438.027.657.055-.028.164-.028.3-.028.437.028.492.164.93.356 1.367.3.547.71 1.012 1.23 1.34v1.832H3.23v-2.16q0-.615.329-1.149c.246-.355.52-.628.902-.82a9.7 9.7 0 0 1 1.941-.71zm1.996 1.066a7 7 0 0 0-1.695.191 7.6 7.6 0 0 0-1.668.602 1.3 1.3 0 0 0-.355.328c-.082.164-.137.3-.137.465v.848h5.25c-.383-.356-.684-.793-.93-1.286a4.4 4.4 0 0 1-.41-1.148zm5.004 5.14-.984-.956v-2.98a2.25 2.25 0 0 1-1.148-.794c-.301-.41-.438-.848-.438-1.367 0-.629.219-1.149.656-1.586a2.15 2.15 0 0 1 1.586-.656c.63 0 1.149.219 1.586.656s.656.984.656 1.586c0 .492-.136.902-.382 1.285-.274.356-.602.629-1.04.793l.793.82-.984.957.985.957zm-.328-5.769c.246 0 .465-.11.574-.3a.62.62 0 0 0 0-.684.59.59 0 0 0-.574-.301c-.246-.027-.465.11-.601.3a.75.75 0 0 0 0 .684c.136.192.355.301.601.301' />
    </g>
    <defs>
      <clipPath id='80a51b7ee89b20798996c72b453c52ae__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeySmBoldIcon);
export default ForwardRef;
