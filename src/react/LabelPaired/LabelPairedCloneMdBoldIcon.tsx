import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 18.5h7q.47-.03.5-.5v-2H11v2q-.03.844-.594 1.406Q9.843 19.97 9 20H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-7q.03-.843.594-1.406Q1.157 9.032 2 9h2v1.5H2q-.469.031-.5.5v7q.031.47.5.5m5-5h7q.47-.03.5-.5V6q-.03-.469-.5-.5H7q-.469.031-.5.5v7q.031.47.5.5M5 13V6q.03-.843.594-1.406Q6.156 4.032 7 4h7q.844.03 1.406.594Q15.97 5.156 16 6v7q-.03.844-.594 1.406-.563.563-1.406.594H7q-.843-.03-1.406-.594Q5.032 13.843 5 13' />
    </g>
    <defs>
      <clipPath id='aa33aed310a4a44acb9efc0601193855__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdBoldIcon);
export default ForwardRef;
