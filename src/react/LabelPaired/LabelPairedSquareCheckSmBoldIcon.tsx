import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.938q-.41.027-.437.437v8.75q.027.41.437.438h8.75q.41-.028.438-.438v-8.75q-.028-.41-.438-.437zm-1.75.437q.027-.738.52-1.23.492-.493 1.23-.52h8.75q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52h-8.75q-.738-.027-1.23-.52-.493-.492-.52-1.23zm9.215 3.09-3.5 3.5q-.465.383-.93 0l-1.75-1.75q-.382-.465 0-.93.465-.383.93 0l1.285 1.285L8.66 8.535q.465-.383.93 0 .383.465 0 .93' />
    </g>
    <defs>
      <clipPath id='bdb313968046ffff27813bb7ca6b31b7__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckSmBoldIcon);
export default ForwardRef;
