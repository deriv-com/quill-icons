import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiSmFillIcon = (
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
      <path d='M1.727 9.3c-.356.356-.903.329-1.258-.027-.328-.328-.301-.902.027-1.23C2.711 5.938 5.691 4.625 9 4.625c3.281 0 6.262 1.313 8.477 3.418.328.328.355.902.027 1.23-.356.356-.902.383-1.258.028C14.36 7.496 11.816 6.375 9 6.375a10.46 10.46 0 0 0-7.273 2.926M9 10.75c-1.559 0-2.98.602-4.074 1.531a.867.867 0 0 1-1.23-.054.93.93 0 0 1 .081-1.258C5.172 9.766 7.004 9 9 9s3.8.766 5.195 1.969a.9.9 0 0 1 .082 1.258.867.867 0 0 1-1.23.054C11.953 11.351 10.53 10.75 9 10.75m1.75 4.375c0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0a1.78 1.78 0 0 1-.875-1.531c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504' />
    </g>
    <defs>
      <clipPath id='966950959e71b08f00344c3d755f9c19__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiSmFillIcon);
export default ForwardRef;
