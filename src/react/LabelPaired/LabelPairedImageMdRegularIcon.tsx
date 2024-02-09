import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageMdRegularIcon = (
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
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v7.281l2.125-2.094A1.2 1.2 0 0 1 4 11.814a1.2 1.2 0 0 1 .875.374L7 14.282l4.125-4.094A1.2 1.2 0 0 1 12 9.814a1.2 1.2 0 0 1 .875.374L15 12.282V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 6zm-1 9.719V17q0 .438.281.719A.97.97 0 0 0 2 18h1.281l3-3-2.093-2.125a.31.31 0 0 0-.375 0zm11.188-4.844a.31.31 0 0 0-.376 0L4.72 18H14a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 17v-3.281zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h12q.844.03 1.406.594Q15.97 6.156 16 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm5 1.5q-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5.47-.03.5-.5m-2 0q.03-.843.75-1.312.75-.375 1.5 0 .72.469.75 1.312-.03.844-.75 1.313-.75.375-1.5 0Q3.03 9.344 3 8.5' />
    </g>
    <defs>
      <clipPath id='fff4b7f6191c7c389eeaf780e2a6da8c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdRegularIcon);
export default ForwardRef;
