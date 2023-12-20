import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.188 3.75h4.374c.274.018.42.164.438.438v4.375c-.018.273-.164.419-.437.437-.274-.018-.42-.164-.438-.437v-3.31l-6.7 6.673c-.2.182-.4.182-.6 0-.183-.2-.183-.401 0-.602l6.671-6.699H9.187c-.273-.018-.419-.164-.437-.437.018-.274.164-.42.438-.438m-7.438.875h3.938c.273.018.419.164.437.438-.018.273-.164.419-.437.437H1.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h9.625a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-3.937c.018-.274.164-.42.438-.438.273.018.419.164.437.438V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52C.19 16.903.018 16.493 0 16V6.375c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareSmRegularIcon);
export default ForwardRef;
