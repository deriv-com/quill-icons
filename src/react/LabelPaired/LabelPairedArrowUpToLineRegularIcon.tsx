import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineRegularIcon = (
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
        d='M.5 5h11c.313.02.48.188.5.5-.02.313-.187.48-.5.5H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5m5.844 3.156 4 4c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L6.5 9.719V18.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V9.719l-3.156 3.125c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l4-4c.23-.208.459-.208.688 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineRegularIcon);
export default ForwardRef;
