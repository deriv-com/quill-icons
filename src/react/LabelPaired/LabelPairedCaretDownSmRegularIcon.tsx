import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownSmRegularIcon = (
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
      <path d='m4.637 13.32 3.281-3.09c.055-.054.055-.082.055-.136 0-.11-.082-.219-.192-.219h-6.59c-.109 0-.191.11-.191.219 0 .054 0 .082.055.136l3.28 3.09c.028.055.083.055.165.055.055 0 .11 0 .137-.055m.601.657c-.191.191-.465.273-.738.273-.3 0-.574-.082-.766-.273l-3.28-3.118a1.03 1.03 0 0 1-.329-.765C.125 9.492.59 9 1.191 9l6.59.027c.602 0 1.094.465 1.094 1.067 0 .273-.137.574-.355.765z' />
    </g>
    <defs>
      <clipPath id='e4b991956f7534a15abe5e65a4ef24f4__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmRegularIcon);
export default ForwardRef;
