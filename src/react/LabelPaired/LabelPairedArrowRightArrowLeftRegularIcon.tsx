import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftRegularIcon = (
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
        d='m13.844 8.344-3 3c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L12.281 8.5H.5C.188 8.48.02 8.313 0 8c.02-.312.188-.48.5-.5h11.781l-2.125-2.156c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l3 3c.208.23.208.459 0 .688m-10.688 11-3-3c-.208-.23-.208-.459 0-.688l3-3c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L1.719 15.5H13.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H1.719l2.125 2.156c.208.23.208.459 0 .688-.23.208-.459.208-.688 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftRegularIcon);
export default ForwardRef;
