import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7q-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5.47-.03.5-.5M0 7q.03-.843.75-1.312.75-.375 1.5 0Q2.97 6.156 3 7q-.03.844-.75 1.313-.75.375-1.5 0Q.03 7.844 0 7m2 5q-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5.47-.03.5-.5m-2 0q.03-.844.75-1.312.75-.375 1.5 0 .72.469.75 1.312-.03.844-.75 1.313-.75.375-1.5 0Q.03 12.844 0 12m1.5 5.5q.47-.03.5-.5-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5m0-2q.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75-.843-.03-1.312-.75-.375-.75 0-1.5.468-.72 1.312-.75M7 7q-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5.47-.03.5-.5M5 7q.03-.843.75-1.312.75-.375 1.5 0Q7.97 6.156 8 7q-.03.844-.75 1.313-.75.375-1.5 0Q5.03 7.844 5 7m1.5 5.5q.47-.03.5-.5-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5m0-2q.844.03 1.313.75.375.75 0 1.5-.469.72-1.313.75-.843-.03-1.312-.75-.375-.75 0-1.5.468-.72 1.312-.75M7 17q-.03-.469-.5-.5-.469.031-.5.5.031.47.5.5.47-.03.5-.5m-2 0q.03-.844.75-1.312.75-.375 1.5 0 .72.468.75 1.312-.03.844-.75 1.313-.75.375-1.5 0Q5.03 17.844 5 17' />
    </g>
    <defs>
      <clipPath id='82c0e7909bdde308ccf426549087f4f9__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalMdRegularIcon);
export default ForwardRef;
