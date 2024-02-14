import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoMdBoldIcon = (
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
      <path d='M2 18.5h6.906a5.3 5.3 0 0 0 1.406 1.469q-.156.03-.312.031H2q-.843-.03-1.406-.594Q.032 18.844 0 18V6q.03-.843.594-1.406Q1.157 4.032 2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844v1.375a5.4 5.4 0 0 0-1.5.656V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5v12q.031.47.5.5M13.5 11a4.43 4.43 0 0 1 2.25.594 4.5 4.5 0 0 1 1.656 1.656Q18 14.312 18 15.5t-.594 2.25a4.5 4.5 0 0 1-1.656 1.656A4.43 4.43 0 0 1 13.5 20a4.43 4.43 0 0 1-2.25-.594 4.5 4.5 0 0 1-1.656-1.656A4.54 4.54 0 0 1 9 15.5q0-1.188.594-2.25a4.5 4.5 0 0 1 1.656-1.656A4.43 4.43 0 0 1 13.5 11m0 3q.687-.063.75-.75-.063-.687-.75-.75-.687.063-.75.75.063.687.75.75m-1 1.5q.031.47.5.5v1.5q-.469.031-.5.5.031.47.5.5h1q.47-.03.5-.5-.03-.469-.5-.5v-2q-.03-.469-.5-.5H13q-.469.031-.5.5' />
    </g>
    <defs>
      <clipPath id='53434e86a5b7e14b6f3f9ae868196026__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoMdBoldIcon);
export default ForwardRef;
