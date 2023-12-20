import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSquareCheckBoldIcon = (
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
        d='M2 6.5c-.312.02-.48.188-.5.5v10c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5V7c-.02-.312-.187-.48-.5-.5zM0 7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h10c.563.02 1.031.219 1.406.594S13.98 6.437 14 7v10c-.02.563-.219 1.031-.594 1.406S12.562 18.98 12 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17zm10.531 3.531-4 4c-.354.292-.708.292-1.062 0l-2-2c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L6 12.938l3.469-3.47c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckBoldIcon);
export default ForwardRef;
