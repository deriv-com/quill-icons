import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownSmRegularIcon = (
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
      <path d='M4.336 15.945c.027.055.082.055.164.055.055 0 .11 0 .137-.055l3.281-3.09c.055-.054.082-.082.082-.136 0-.11-.11-.219-.219-.219h-6.59c-.109 0-.191.11-.191.219 0 .054 0 .082.055.136zm-.602.657-3.28-3.118a1.03 1.03 0 0 1-.329-.765c0-.602.465-1.094 1.066-1.094h6.59c.602 0 1.094.492 1.094 1.094 0 .273-.137.574-.355.765l-3.282 3.118c-.191.191-.465.273-.738.273-.3 0-.574-.082-.766-.273' />
    </g>
    <defs>
      <clipPath id='b62aa6b7acb0abcd619d53c96380a01b__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmRegularIcon);
export default ForwardRef;
