import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeMdRegularIcon = (
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
      <path d='M2 7a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v1.25l6.125 4.469q.875.594 1.75 0L15 9.25V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 7zm-1 3.5V16q0 .438.281.719A.97.97 0 0 0 2 17h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 16v-5.5l-5.531 4.031q-.656.5-1.469.5a2.36 2.36 0 0 1-1.469-.5zM0 8q.03-.843.594-1.406Q1.157 6.032 2 6h12q.844.03 1.406.594Q15.97 7.156 16 8v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16z' />
    </g>
    <defs>
      <clipPath id='d4bccda83e01e9bfacdbb74eae06a812__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeMdRegularIcon);
export default ForwardRef;
