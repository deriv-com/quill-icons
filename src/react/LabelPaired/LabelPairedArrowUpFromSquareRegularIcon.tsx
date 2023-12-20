import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromSquareRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.344 4.156 3.25 3.25c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L8.5 5.719V14c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V5.719L5.094 8.094c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l3.25-3.25c.23-.208.459-.208.688 0M2 5h1c.313.02.48.188.5.5-.02.313-.187.48-.5.5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v11c0 .292.094.531.281.719A.974.974 0 0 0 2 19h12a.974.974 0 0 0 .719-.281A.974.974 0 0 0 15 18V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 14 6h-1c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h1c.563.02 1.031.219 1.406.594S15.98 6.437 16 7v11c-.02.563-.219 1.031-.594 1.406S14.562 19.98 14 20H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareRegularIcon);
export default ForwardRef;
