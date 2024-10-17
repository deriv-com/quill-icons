import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterSmRegularIcon = (
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
      <path d='M.375 5.938A.45.45 0 0 1 .813 5.5h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.813a.43.43 0 0 1-.438-.437m1.75 4.375a.45.45 0 0 1 .438-.438h7.874a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H2.561a.43.43 0 0 1-.437-.437m6.125 4.374a.45.45 0 0 1-.437.438H5.188a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h2.625a.47.47 0 0 1 .437.438' />
    </g>
    <defs>
      <clipPath id='c7290c606b61d62c6be3f1cc5ab3d10a__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterSmRegularIcon);
export default ForwardRef;
