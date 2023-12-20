import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRegularIcon = (
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
        d='m6.344 5.156 5.5 5.5c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L6.5 6.719V18.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V6.719L.844 11.344c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l5.5-5.5c.23-.208.459-.208.688 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRegularIcon);
export default ForwardRef;
