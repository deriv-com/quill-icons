import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandRegularIcon = (
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
        d='M4.5 5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H1v3.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-4c.02-.312.188-.48.5-.5zM0 14.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5V18h3.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-4c-.312-.02-.48-.187-.5-.5zM13.5 5c.313.02.48.188.5.5v4c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V6H9.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5zm-.5 9.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v4c-.02.313-.187.48-.5.5h-4c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5H13z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandRegularIcon);
export default ForwardRef;
