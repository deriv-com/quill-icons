import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownRightRegularIcon = (
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
        d='M10.5 17h-7c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h5.781L1.156 7.844c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L10 15.281V9.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v7c-.02.313-.187.48-.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightRegularIcon);
export default ForwardRef;
