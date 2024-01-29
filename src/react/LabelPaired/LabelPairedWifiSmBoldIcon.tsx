import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.344 8.836q-.492.356-.93-.055-.356-.492.055-.93a12.9 12.9 0 0 1 3.883-2.378A12.8 12.8 0 0 1 9 4.625q2.46 0 4.648.848a12.9 12.9 0 0 1 3.883 2.379q.41.437.055.93-.438.409-.93.054a11.4 11.4 0 0 0-3.5-2.133Q11.215 5.938 9 5.937q-2.215 0-4.156.766a11.4 11.4 0 0 0-3.5 2.133M9 10.75q-2.707.055-4.594 1.777-.465.383-.93-.027-.354-.492.055-.93a7.9 7.9 0 0 1 2.489-1.558A7.8 7.8 0 0 1 9 9.437q1.585 0 2.98.575 1.395.547 2.489 1.558.41.438.054.93-.465.41-.93.027Q11.709 10.805 9 10.75m1.531 4.594q-.027.874-.765 1.312-.765.438-1.532 0-.738-.437-.765-1.312.027-.875.765-1.313.765-.437 1.532 0 .738.438.765 1.313' />
    </g>
    <defs>
      <clipPath id='5f0802cb89bf2f5c61d3954e472907d0__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiSmBoldIcon);
export default ForwardRef;
