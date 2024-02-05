import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdSmBoldIcon = (
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
      <path d='M1.875 5.938q-.41.027-.437.437v8.75q.027.41.437.438h12.25q.41-.028.438-.438v-8.75q-.028-.41-.438-.437zm-1.75.437q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm6.29 2.105 1.968 3.938q.19.575-.301.902-.574.192-.875-.3l-.164-.301H4.582l-.164.3q-.3.493-.875.274-.52-.3-.273-.875L5.238 8.48q.193-.355.574-.355.41 0 .602.355m-.602 1.778-.575 1.148h1.149zm5.03.492q-.6.055-.655.656.054.602.656.656.601-.054.656-.656-.055-.601-.656-.656m.657-1.203V8.78q.055-.601.656-.656.602.054.656.656v3.938q-.054.601-.656.656a.63.63 0 0 1-.465-.191 1.9 1.9 0 0 1-.847.191q-.847-.028-1.395-.574-.547-.547-.574-1.395.028-.848.574-1.394.547-.547 1.395-.575.356 0 .656.11' />
    </g>
    <defs>
      <clipPath id='7f3312c19061fa055407c9708794b648__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmBoldIcon);
export default ForwardRef;
