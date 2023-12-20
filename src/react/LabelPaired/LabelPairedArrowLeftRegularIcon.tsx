import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftRegularIcon = (
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
        d='m.156 11.656 5.5-5.5c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L1.719 11.5H13.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H1.719l4.625 4.656c.208.23.208.459 0 .688-.23.208-.459.208-.688 0l-5.5-5.5c-.208-.23-.208-.459 0-.688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftRegularIcon);
export default ForwardRef;
