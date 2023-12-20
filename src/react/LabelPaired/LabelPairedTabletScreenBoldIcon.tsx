import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTabletScreenBoldIcon = (
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
        d='M1.5 18c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5v-2.5h-11zm0-4h11V6c-.02-.312-.187-.48-.5-.5H2c-.312.02-.48.188-.5.5zM0 6c.02-.562.219-1.031.594-1.406S1.438 4.02 2 4h10c.563.02 1.031.219 1.406.594S13.98 5.437 14 6v12c-.02.563-.219 1.031-.594 1.406S12.562 19.98 12 20H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18zm6 10.5h2c.313.02.48.188.5.5-.02.313-.187.48-.5.5H6c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenBoldIcon);
export default ForwardRef;
