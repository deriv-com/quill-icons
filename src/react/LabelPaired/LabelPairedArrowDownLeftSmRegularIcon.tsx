import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.563 15.125q-.411-.027-.438-.437V8.561q.027-.41.438-.437.41.027.437.438v5.058l7.137-7.11q.3-.273.601 0 .274.302 0 .602l-7.11 7.137h5.06q.41.027.437.438-.027.41-.437.437z' />
    </g>
    <defs>
      <clipPath id='2fe6e633bd29d2f73a6a6432511bdfa0__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftSmRegularIcon);
export default ForwardRef;
