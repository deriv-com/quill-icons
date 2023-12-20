import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepRegularIcon = (
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
        d='M8 6.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v11c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5v-4.25l-5.594 4.563a.789.789 0 0 1-.531.187.848.848 0 0 1-.625-.25.848.848 0 0 1-.25-.625V6.875c0-.25.083-.458.25-.625A.848.848 0 0 1 1.875 6c.208 0 .385.063.531.188L8 10.75zm-6 .656v9.688L7.969 12z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepRegularIcon);
export default ForwardRef;
