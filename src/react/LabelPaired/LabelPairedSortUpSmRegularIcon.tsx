import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpSmRegularIcon = (
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
      <path d='m4.336 5.582-3.281 3.09C1 8.727 1 8.754 1 8.809c0 .109.082.191.191.191h6.59C7.891 9 8 8.918 8 8.809a.15.15 0 0 0-.082-.137l-3.281-3.09A.15.15 0 0 0 4.5 5.5q-.123 0-.164.082m-.602-.656c.192-.192.465-.301.766-.301.273 0 .547.11.738.3L8.52 8.044c.218.191.355.492.355.766 0 .601-.492 1.066-1.094 1.066h-6.59A1.05 1.05 0 0 1 .125 8.809c0-.274.11-.575.328-.766z' />
    </g>
    <defs>
      <clipPath id='c9ad3dc1dd02d5dfd3e34a7ea47da8eb__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpSmRegularIcon);
export default ForwardRef;
