import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillMdBoldIcon = (
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
      <path d='M3.5 7.5q-.03.844-.594 1.406-.563.563-1.406.594v5q.844.03 1.406.594.563.563.594 1.406h11q.03-.843.594-1.406.563-.563 1.406-.594v-5q-.843-.03-1.406-.594-.563-.563-.594-1.406zM0 8q.03-.843.594-1.406Q1.157 6.032 2 6h14q.844.03 1.406.594Q17.97 7.156 18 8v8q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16zm9 1q.813 0 1.5.406t1.094 1.094Q12 11.22 12 12a3.01 3.01 0 0 1-1.5 2.594Q9.813 15 9 15a2.9 2.9 0 0 1-1.5-.406A3.007 3.007 0 0 1 6 12a3.01 3.01 0 0 1 1.5-2.594Q8.187 9.001 9 9' />
    </g>
    <defs>
      <clipPath id='11c74b7b1ee77c90f18377a8f3285947__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillMdBoldIcon);
export default ForwardRef;
