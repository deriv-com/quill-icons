import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceSmFillIcon = (
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
      <path d='M11.594 11.133c.52.52.52 1.34 0 1.86L9.133 15.48c-.52.493-1.34.493-1.86 0l-4.949-4.949c-.52-.52-.52-1.34 0-1.86l2.461-2.487a1.355 1.355 0 0 1 1.86 0zM5.168 7.195c.246.22.246.602 0 .848l-.984.984a.61.61 0 0 1-.875 0l-.055-.054-.328.3c-.164.192-.164.465 0 .63l4.949 4.949c.191.164.465.164.629 0l2.488-2.461c.164-.192.164-.465 0-.63L6.043 6.814c-.191-.165-.465-.165-.629 0l-.3.3zm6.125-.547a4 4 0 0 0-.656-.546l-.219-.165a5 5 0 0 0-.848-.41l-.273-.082c-.082-.027-.137-.054-.219-.054l.656.629-.629.628-2.27-2.296h1.368c.328.027.656.082.957.136l.383.11.328.109c.356.137.684.3 1.012.492l.273.192c.246.164.52.382.739.629a5.65 5.65 0 0 1 1.668 4.02h-.876a4.78 4.78 0 0 0-1.394-3.392m-8.586 8.559c.219.191.438.383.656.547l.219.137c.273.164.547.3.848.41l.3.11c.055.026.137.026.192.054l-.629-.63.629-.628 2.242 2.297H6.125l-.328-.027c-.328 0-.629-.055-.957-.137l-.356-.082-.355-.137a4 4 0 0 1-.984-.465l-.274-.191a9 9 0 0 1-.766-.63 5.65 5.65 0 0 1-1.667-4.019h.875c0 1.23.464 2.461 1.421 3.391z' />
    </g>
    <defs>
      <clipPath id='8131fa38a4b4ed2f9ff0f79d27ff9ad7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceSmFillIcon);
export default ForwardRef;
