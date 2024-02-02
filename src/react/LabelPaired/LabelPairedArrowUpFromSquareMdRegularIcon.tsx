import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareMdRegularIcon = (
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
      <path d='m8.344 4.156 3.25 3.25q.312.345 0 .688-.345.312-.688 0L8.5 5.719V14q-.03.47-.5.5-.469-.03-.5-.5V5.719L5.094 8.094q-.345.312-.688 0-.312-.345 0-.688l3.25-3.25q.345-.312.688 0M2 5h1q.47.031.5.5-.03.47-.5.5H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v11q0 .438.281.719A.97.97 0 0 0 2 19h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 18V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 6h-1q-.469-.03-.5-.5.031-.469.5-.5h1q.844.03 1.406.594Q15.97 6.156 16 7v11q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18V7q.03-.843.594-1.406Q1.157 5.032 2 5' />
    </g>
    <defs>
      <clipPath id='80b3cf8cd3bc537b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareMdRegularIcon);
export default ForwardRef;
