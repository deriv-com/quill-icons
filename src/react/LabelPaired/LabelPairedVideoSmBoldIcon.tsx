import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoSmBoldIcon = (
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
      <path d='M1.875 6.813q-.41.027-.437.437v7q.027.41.437.438h7q.41-.028.438-.438v-7q-.028-.41-.438-.437zm-1.75.437q.027-.738.52-1.23.492-.493 1.23-.52h7q.738.027 1.23.52.493.492.52 1.23v7q-.027.738-.52 1.23-.492.493-1.23.52h-7q-.738-.027-1.23-.52-.493-.492-.52-1.23zm14.438 6.426V7.824L11.5 9.191V7.742l2.844-1.258q.218-.11.465-.109.437 0 .738.328.328.3.328.766v6.59q0 .437-.328.738a.96.96 0 0 1-.738.328q-.247 0-.465-.082L11.5 13.758v-1.45z' />
    </g>
    <defs>
      <clipPath id='b83c49ae2a506a84ebdec949b5659270__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmBoldIcon);
export default ForwardRef;
