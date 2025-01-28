import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareSmRegularIcon = (
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
      <path d='M11.063 11.406c0 .137.082.219.218.219.055 0 .11 0 .137-.055l3.527-3.336c.028-.027.028-.054.028-.109 0-.027 0-.055-.028-.082l-3.527-3.336a.15.15 0 0 0-.137-.082.216.216 0 0 0-.219.219v1.531a.45.45 0 0 1-.437.438H8a3.507 3.507 0 0 0-3.5 3.5c0 .984.41 1.695.902 2.214-.027-.136-.027-.273-.027-.41 0-1.476 1.176-2.68 2.652-2.68h2.598a.47.47 0 0 1 .438.438v1.531m-.876-1.094h-2.16c-.984 0-1.777.82-1.777 1.805 0 .41.383.848.629 1.094a.61.61 0 0 1 .246.465v.027c0 .3-.273.547-.574.547-.055 0-.137 0-.192-.027-.492-.22-2.734-1.34-2.734-3.91A4.37 4.37 0 0 1 8 5.937h2.187V4.845c0-.602.493-1.094 1.094-1.094.274 0 .547.11.739.3l3.527 3.337c.191.191.328.465.328.738 0 .3-.137.547-.328.738L12.02 12.2c-.192.219-.465.301-.739.301a1.08 1.08 0 0 1-1.094-1.094v-1.093M1.876 4.626h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H1.875A.88.88 0 0 0 1 6.375V16c0 .492.383.875.875.875H11.5a.88.88 0 0 0 .875-.875v-1.312a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V16c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75V6.375c0-.957.766-1.75 1.75-1.75' />
    </g>
    <defs>
      <clipPath id='2e16af72fa10a737eea8d98e956ada03__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareSmRegularIcon);
export default ForwardRef;
