import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineBoldIcon = (
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
        d='M14 6.75v10.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V6.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75m-4.25 5.813.031-.032-4.25 4c-.375.292-.729.282-1.062-.031-.292-.354-.282-.698.031-1.031l2.875-2.719H.75C.292 12.708.042 12.458 0 12c.042-.458.292-.708.75-.75h6.625L4.5 8.531c-.312-.333-.323-.677-.031-1.031.333-.312.677-.323 1.031-.031l4.25 4A.68.68 0 0 1 10 12a.777.777 0 0 1-.25.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineBoldIcon);
export default ForwardRef;
