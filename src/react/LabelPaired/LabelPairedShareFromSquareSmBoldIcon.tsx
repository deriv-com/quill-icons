import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareSmBoldIcon = (
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
      <path d='m11.063 10.75 2.898-2.625-2.899-2.598v1.285a.45.45 0 0 1-.437.438H8a3.075 3.075 0 0 0-3.062 3.063c0 .328.027.628.136.874A3.09 3.09 0 0 1 8.027 9h2.598a.47.47 0 0 1 .438.438v1.312m-1.75-.437H8.027c-.984 0-1.777.82-1.777 1.804 0 .246.027.438.11.602.054.082.081.164.136.246.027.027.055.055.055.082.027.027.054.027.082.055.054.054.082.082.137.109 0 .027.027.027.027.027.164.137.328.328.328.547 0 .246-.219.465-.492.465H6.55c-.055 0-.137 0-.192-.027-.054-.028-.136-.055-.218-.11a2 2 0 0 0-.328-.164c-.137-.11-.301-.191-.465-.328-.793-.574-1.723-1.64-1.723-3.309A4.37 4.37 0 0 1 8 5.939h1.75V4.707c0-.52.41-.957.93-.957.246 0 .465.11.629.246l3.8 3.418c.192.191.329.438.329.711 0 .3-.137.547-.329.738l-3.8 3.418c-.164.164-.383.219-.602.219h-.082a.864.864 0 0 1-.875-.875v-1.312zm-7.22-5.688h1.75c.356 0 .657.3.657.656 0 .383-.3.657-.656.657h-1.75c-.383 0-.656.3-.656.656v9.187c0 .383.273.656.656.656h9.187a.65.65 0 0 0 .656-.656v-1.75c0-.355.274-.656.657-.656.355 0 .656.3.656.656v1.75a1.98 1.98 0 0 1-1.969 1.969H2.094a1.96 1.96 0 0 1-1.969-1.969V6.594c0-1.067.875-1.969 1.969-1.969' />
    </g>
    <defs>
      <clipPath id='d6a77f3ea69c4ce06468fc912cff810e__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareSmBoldIcon);
export default ForwardRef;
