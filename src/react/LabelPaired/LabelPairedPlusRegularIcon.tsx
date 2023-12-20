import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusRegularIcon = (
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
        d='M7.5 6v5.5H13c.313.02.48.188.5.5-.02.313-.187.48-.5.5H7.5V18c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-5.5H1c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h5.5V6c.02-.312.188-.48.5-.5.313.02.48.188.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusRegularIcon);
export default ForwardRef;
