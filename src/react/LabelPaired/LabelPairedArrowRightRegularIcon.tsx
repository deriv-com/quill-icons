import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightRegularIcon = (
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
        d='m13.844 12.344-5.5 5.5c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l4.625-4.656H.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h11.781L7.656 6.844c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l5.5 5.5c.208.23.208.459 0 .688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightRegularIcon);
export default ForwardRef;
