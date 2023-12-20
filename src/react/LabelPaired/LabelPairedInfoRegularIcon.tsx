import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 6c0-.292.094-.531.281-.719A.973.973 0 0 1 3 5c.292 0 .531.094.719.281A.973.973 0 0 1 4 6a.973.973 0 0 1-.281.719A.973.973 0 0 1 3 7a.973.973 0 0 1-.719-.281A.973.973 0 0 1 2 6M.5 9.5c.02-.312.188-.48.5-.5h2c.313.02.48.188.5.5V18h2c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h2v-8H1c-.312-.02-.48-.187-.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoRegularIcon);
export default ForwardRef;
