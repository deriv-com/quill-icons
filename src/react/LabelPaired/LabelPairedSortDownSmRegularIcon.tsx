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
      <path d='M4.336 15.945Q4.419 16 4.5 16q.083 0 .164-.055l3.281-3.117A.19.19 0 0 0 8 12.691a.214.214 0 0 0-.191-.191H1.19a.214.214 0 0 0-.191.191q0 .082.055.137zm-.602.63-3.28-3.09a1.08 1.08 0 0 1-.329-.794q0-.465.3-.765.302-.3.766-.301H7.81q.465 0 .765.3.3.302.301.766 0 .465-.328.793l-3.281 3.09q-.329.3-.766.301-.438 0-.766-.3' />
    </g>
    <defs>
      <clipPath id='60690978c884d3c87c481309210cf3b9__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmRegularIcon);
export default ForwardRef;
