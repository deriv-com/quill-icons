import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketSmRegularIcon = (
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
      <path d='m13.098 10.723-3.61-3.418a.2.2 0 0 0-.136-.055c-.082 0-.165.082-.165.191V9a.45.45 0 0 1-.437.438H5.469a.216.216 0 0 0-.219.218v2.188c0 .136.082.219.219.219H8.75a.47.47 0 0 1 .438.437v1.586c0 .082.082.164.164.164.054 0 .109 0 .136-.027l3.61-3.418s.027-.028.027-.055zm.902.027c0 .273-.11.52-.3.71l-3.61 3.392c-.192.191-.465.273-.738.273-.575 0-1.04-.465-1.04-1.04v-1.148H5.47a1.063 1.063 0 0 1-1.094-1.093V9.656a1.08 1.08 0 0 1 1.094-1.094h2.843v-1.12c0-.575.465-1.067 1.04-1.067.273 0 .546.11.738.3l3.61 3.391a.98.98 0 0 1 .3.684M4.813 5.5H2.188c-.739 0-1.313.602-1.313 1.313v7.875c0 .738.574 1.312 1.313 1.312h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.188A2.16 2.16 0 0 1 0 14.688V6.812C0 5.61.957 4.626 2.188 4.626h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437' />
    </g>
    <defs>
      <clipPath id='0f43be22ec8602060aa7a6f3d7069226__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketSmRegularIcon);
export default ForwardRef;
