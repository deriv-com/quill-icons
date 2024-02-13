import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneMdRegularIcon = (
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
      <path d='M2 19h7a.97.97 0 0 0 .719-.281A.97.97 0 0 0 10 18v-2h1v2q-.03.844-.594 1.406Q9.843 19.97 9 20H2q-.843-.03-1.406-.594Q.032 18.844 0 18v-7q.03-.843.594-1.406Q1.157 9.032 2 9h2v1H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 11v7q0 .438.281.719A.97.97 0 0 0 2 19m5-5h7a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 13V6a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 5H7a.97.97 0 0 0-.719.281A.97.97 0 0 0 6 6v7q0 .438.281.719A.97.97 0 0 0 7 14m-2-1V6q.03-.843.594-1.406Q6.156 4.032 7 4h7q.844.03 1.406.594Q15.97 5.156 16 6v7q-.03.844-.594 1.406-.563.563-1.406.594H7q-.843-.03-1.406-.594Q5.032 13.843 5 13' />
    </g>
    <defs>
      <clipPath id='062b843e155ebc0e1ccbd5c599cf3d64__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneMdRegularIcon);
export default ForwardRef;
