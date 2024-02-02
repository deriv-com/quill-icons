import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareMdRegularIcon = (
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
      <path d='M10.5 4h5q.47.031.5.5v5q-.03.47-.5.5-.469-.03-.5-.5V5.719l-7.656 7.625q-.345.312-.688 0-.312-.345 0-.688L14.281 5H10.5q-.469-.03-.5-.5.031-.469.5-.5M2 5h4.5q.47.031.5.5-.03.47-.5.5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v11q0 .438.281.719A.97.97 0 0 0 2 19h11a.97.97 0 0 0 .719-.281A.97.97 0 0 0 14 18v-4.5q.031-.469.5-.5.47.031.5.5V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V7q.03-.843.594-1.406Q1.157 5.032 2 5' />
    </g>
    <defs>
      <clipPath id='7636c8d32a3c512963b204f6b68b7e46__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareMdRegularIcon);
export default ForwardRef;
