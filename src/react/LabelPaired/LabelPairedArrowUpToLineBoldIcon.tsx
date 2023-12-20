import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.75 5h10.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75C.292 6.458.042 6.208 0 5.75c.042-.458.292-.708.75-.75m5.813 4.25H6.53l4 4.25c.292.354.281.698-.031 1.031-.354.292-.698.281-1.031-.031L6.75 11.656V18.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V11.656l-2.719 2.875c-.333.292-.677.302-1.031.031-.312-.354-.323-.708-.031-1.062l4-4.25A.68.68 0 0 1 6 9c.208 0 .396.083.563.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineBoldIcon);
export default ForwardRef;
