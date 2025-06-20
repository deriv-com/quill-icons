import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightSmFillIcon = (
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
      <path d='M9 6.566c.383 0 .684.301.684.684v2.543a.76.76 0 0 1 .547-.219c.437 0 .792.328.82.766a.76.76 0 0 1 .547-.219c.437 0 .793.328.82.766a.76.76 0 0 1 .547-.219c.437 0 .82.383.82.82v1.64a2.194 2.194 0 0 1-2.187 2.188H9.574a2.75 2.75 0 0 1-1.75-.629l-.082-.082c-.52-.41-.793-1.039-.793-1.695v-.629c0-.328.137-.629.41-.847l.329-.274c.027-.027.054-.055.109-.055v.93c0 .164.11.274.273.274.137 0 .274-.11.274-.274V7.25a.66.66 0 0 1 .683-.684zm4.54 2.707 1.476-1.476c.164-.164.164-.41 0-.547l-1.559-1.586a.45.45 0 0 0-.574 0 .45.45 0 0 0 0 .574l.902.875h-2.652c-.219 0-.383.192-.383.41 0 .22.164.383.383.383h2.652l-.793.793a.396.396 0 0 0 0 .574c.164.137.41.137.547 0m-9.106 0-1.45-1.476c-.164-.164-.164-.41 0-.547l1.559-1.586c.164-.137.41-.137.547 0a.396.396 0 0 1 0 .574l-.875.875h2.652c.219 0 .383.192.383.41a.374.374 0 0 1-.383.383H4.215l.793.793a.45.45 0 0 1 0 .574.45.45 0 0 1-.574 0' />
    </g>
    <defs>
      <clipPath id='1c2c0233fffa3d54a287cef394303786__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightSmFillIcon);
export default ForwardRef;
