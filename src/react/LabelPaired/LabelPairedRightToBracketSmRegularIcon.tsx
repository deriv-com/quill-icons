import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketSmRegularIcon = (
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
      <path d='M8.723 10.805s.027-.028.027-.055l-.027-.027-3.61-3.418a.2.2 0 0 0-.136-.055c-.082 0-.165.082-.165.191V9a.45.45 0 0 1-.437.438H1.094a.216.216 0 0 0-.219.218v2.188c0 .136.082.219.219.219h3.281a.47.47 0 0 1 .438.437v1.586c0 .082.082.164.164.164.054 0 .109 0 .136-.027zm.902-.055c0 .273-.11.52-.3.71l-3.61 3.392c-.192.191-.465.273-.738.273-.575 0-1.04-.465-1.04-1.04v-1.148H1.095A1.063 1.063 0 0 1 0 11.845V9.656a1.08 1.08 0 0 1 1.094-1.094h2.843v-1.12c0-.575.465-1.067 1.04-1.067.273 0 .546.11.738.3l3.61 3.391a.98.98 0 0 1 .3.684M9.188 16h2.624c.711 0 1.313-.574 1.313-1.312V6.812A1.33 1.33 0 0 0 11.813 5.5H9.187a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438h2.624c1.204 0 2.188.984 2.188 2.188v7.875c0 1.23-.984 2.187-2.187 2.187H9.187a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='05254c71d60ac5d13b0196ee610150e9__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketSmRegularIcon);
export default ForwardRef;
