import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.5 4h17c.313.02.48.188.5.5-.02.313-.187.48-.5.5H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5M1 6h1v7c0 .292.094.531.281.719A.974.974 0 0 0 3 14h12a.974.974 0 0 0 .719-.281A.974.974 0 0 0 16 13V6h1v7c-.02.563-.219 1.031-.594 1.406S15.563 14.98 15 15H9.5v1.281l2.844 2.875c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L9 17.219l-2.656 2.625c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L8.5 16.281V15H3c-.562-.02-1.031-.219-1.406-.594S1.02 13.562 1 13z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenRegularIcon);
export default ForwardRef;
