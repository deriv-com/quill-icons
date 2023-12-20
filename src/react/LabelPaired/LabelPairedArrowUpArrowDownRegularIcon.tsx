import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m5.344 5.156 3 3c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L5.5 6.719V18.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V6.719L2.344 8.844c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l3-3c.23-.208.459-.208.688 0m11 10.688-3 3c-.23.208-.459.208-.688 0l-3-3c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l2.156 2.125V5.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v11.781l2.156-2.125c.23-.208.459-.208.688 0 .208.23.208.459 0 .688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownRegularIcon);
export default ForwardRef;
