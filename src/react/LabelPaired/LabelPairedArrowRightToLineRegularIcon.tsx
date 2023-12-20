import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineRegularIcon = (
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
        d='M14 6.5v11c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-11c.02-.312.188-.48.5-.5.313.02.48.188.5.5m-3.156 5.844-4 4c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L9.281 12.5H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h8.781L6.156 8.344c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l4 4c.208.23.208.459 0 .688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineRegularIcon);
export default ForwardRef;
