import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 6.5v4.25l5.594-4.562A.789.789 0 0 1 8.125 6c.25 0 .458.083.625.25.167.167.25.375.25.625v10.25c0 .25-.083.458-.25.625a.848.848 0 0 1-.625.25.789.789 0 0 1-.531-.187L2 13.25v4.25c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-11c.02-.312.188-.48.5-.5.313.02.48.188.5.5m6 .656L2.031 12 8 16.844z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepRegularIcon);
export default ForwardRef;
