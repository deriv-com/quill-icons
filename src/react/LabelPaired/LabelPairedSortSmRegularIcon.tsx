import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.055 8.672C1 8.727 1 8.754 1 8.809c0 .109.082.191.191.191h6.59C7.891 9 8 8.918 8 8.809a.15.15 0 0 0-.082-.137l-3.281-3.09A.15.15 0 0 0 4.5 5.5q-.123 0-.164.082zm-.602-.629 3.281-3.117c.192-.192.465-.301.766-.301.273 0 .547.11.738.3L8.52 8.044c.218.191.355.492.355.766 0 .601-.492 1.066-1.094 1.066h-6.59A1.05 1.05 0 0 1 .125 8.809c0-.274.11-.575.328-.766m.602 4.813 3.28 3.09c.028.054.083.054.165.054.055 0 .11 0 .137-.055l3.281-3.09c.055-.054.082-.082.082-.136 0-.11-.11-.219-.219-.219h-6.59c-.109 0-.191.11-.191.219 0 .054 0 .082.055.136m-.602.628a1.03 1.03 0 0 1-.328-.765c0-.602.465-1.094 1.066-1.094h6.59c.602 0 1.094.492 1.094 1.094 0 .273-.137.574-.355.765l-3.282 3.118c-.191.191-.465.273-.738.273-.3 0-.574-.082-.766-.273z' />
    </g>
    <defs>
      <clipPath id='001617ca81ec45542bbd9291a751f671__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortSmRegularIcon);
export default ForwardRef;
