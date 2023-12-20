import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18.5 4.5v15c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-15c.02-.312.188-.48.5-.5.313.02.48.188.5.5M14 7c.313.02.48.188.5.5v12c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-12c.02-.312.188-.48.5-.5m-3.5 3.5v9c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-9c.02-.312.188-.48.5-.5.313.02.48.188.5.5M6 13c.313.02.48.188.5.5v6c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-6c.02-.312.188-.48.5-.5m-4 3c.313.02.48.188.5.5v3c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-3c.02-.312.188-.48.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalRegularIcon);
export default ForwardRef;
