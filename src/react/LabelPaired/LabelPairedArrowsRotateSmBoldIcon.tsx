import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateSmBoldIcon = (
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
      <path d='M2.57 8.89c-.164.329-.547.465-.875.329a.654.654 0 0 1-.355-.848A6.17 6.17 0 0 1 7 4.625c1.422 0 2.79.574 3.8 1.586l1.45 1.45V6.155c0-.355.273-.656.656-.656.356 0 .656.3.656.656V9.22c0 .383-.3.656-.656.656H9.844a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h1.476L9.871 7.14A4.08 4.08 0 0 0 7 5.938 4.8 4.8 0 0 0 2.57 8.89m10.063 4.294c-.957 2.16-3.117 3.691-5.633 3.691-1.45 0-2.816-.547-3.828-1.586L1.75 13.867v1.477c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656V12.28c0-.355.274-.656.657-.656h3.062c.356 0 .657.3.657.656 0 .383-.301.656-.657.656H2.652l1.45 1.45c.765.765 1.804 1.175 2.898 1.175 1.969 0 3.691-1.175 4.402-2.898a.67.67 0 0 1 .875-.355c.329.136.493.52.356.875' />
    </g>
    <defs>
      <clipPath id='8a265a9cf1701879f106469d0e97322b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateSmBoldIcon);
export default ForwardRef;
