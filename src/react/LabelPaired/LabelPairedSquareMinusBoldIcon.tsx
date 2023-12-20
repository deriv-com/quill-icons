import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSquareMinusBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 6.5c-.312.02-.48.188-.5.5v10c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5V7c-.02-.312-.187-.48-.5-.5zM0 7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7v10c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17zm4.75 4.25h4.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-4.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareMinusBoldIcon);
export default ForwardRef;
