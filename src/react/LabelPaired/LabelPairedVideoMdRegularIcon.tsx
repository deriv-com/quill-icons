import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v8q0 .438.281.719A.97.97 0 0 0 2 17h8a.97.97 0 0 0 .719-.281A.97.97 0 0 0 11 16V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 10 7zM0 8q.03-.843.594-1.406Q1.157 6.032 2 6h8q.844.03 1.406.594Q11.97 7.156 12 8v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16zm16.219 8.844L13 15.062v-1.124l3.719 2.03q.03.033.093.032.157 0 .188-.187V8.186A.22.22 0 0 0 16.813 8q-.063 0-.094.031L13 10.062V8.939l3.219-1.782q.28-.156.593-.156.5 0 .844.344.345.344.344.843v7.626q0 .5-.344.843-.343.345-.843.344-.313 0-.594-.156' />
    </g>
    <defs>
      <clipPath id='7745fd91c8bdb560__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoMdRegularIcon);
export default ForwardRef;
