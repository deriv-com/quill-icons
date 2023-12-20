import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownRegularIcon = (
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
        d='m5.656 18.844-5.5-5.5c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0L5.5 17.281V5.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v11.781l4.656-4.625c.23-.208.459-.208.688 0 .208.23.208.459 0 .688l-5.5 5.5c-.23.208-.459.208-.688 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRegularIcon);
export default ForwardRef;
