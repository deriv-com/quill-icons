import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoneyBillMdRegularIcon = (
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
      <path d='M15 7q.03.844.594 1.406Q16.157 8.97 17 9V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 16 7zm-1 0H4q-.03 1.282-.875 2.125Q2.282 9.969 1 10v4q1.281.031 2.125.875T4 17h10q.031-1.28.875-2.125.844-.843 2.125-.875v-4q-1.28-.03-2.125-.875Q14.032 8.282 14 7M1 16q0 .438.281.719A.97.97 0 0 0 2 17h1q-.03-.843-.594-1.406Q1.843 15.03 1 15zm16-1q-.843.03-1.406.594Q15.03 16.157 15 17h1a.97.97 0 0 0 .719-.281A.97.97 0 0 0 17 16zM2 7a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v1q.844-.03 1.406-.594Q2.97 7.843 3 7zM0 8q.03-.843.594-1.406Q1.157 6.032 2 6h14q.844.03 1.406.594Q17.97 7.156 18 8v8q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16zm11 4q-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719.03 1.125 1 1.719 1 .562 2 0 .97-.594 1-1.719m-5 0q0-.813.406-1.5T7.5 9.406Q8.22 9.001 9 9a3.01 3.01 0 0 1 2.594 1.5Q12 11.187 12 12t-.406 1.5A3.007 3.007 0 0 1 9 15a3.01 3.01 0 0 1-2.594-1.5A2.9 2.9 0 0 1 6 12' />
    </g>
    <defs>
      <clipPath id='ad2cca1350d011ce3776aefd7da53cbc__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillMdRegularIcon);
export default ForwardRef;
