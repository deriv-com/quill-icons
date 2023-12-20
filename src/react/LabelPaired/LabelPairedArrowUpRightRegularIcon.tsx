import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightRegularIcon = (
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
        d='M10.5 7c.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V8.719l-8.156 8.125c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L9.281 8H3.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightRegularIcon);
export default ForwardRef;
