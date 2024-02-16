import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutMdRegularIcon = (
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
      <path d='M14 6H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v2h14V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 6M1 17q0 .438.281.719A.97.97 0 0 0 2 18h3v-8H1zm5 1h8a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 17v-7H6zM2 5h12q.844.03 1.406.594Q15.97 6.156 16 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V7q.03-.843.594-1.406Q1.157 5.032 2 5' />
    </g>
    <defs>
      <clipPath id='83b717f657a0c0cac024be9f3bb2ceb2__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutMdRegularIcon);
export default ForwardRef;
