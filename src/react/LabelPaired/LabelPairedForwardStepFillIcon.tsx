import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepFillIcon = (
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
        d='M1.656 17.781c-.333.25-.698.292-1.093.125C.208 17.72.02 17.416 0 17V7c.02-.417.208-.719.563-.906.395-.167.76-.125 1.093.125l6 5L8 11.53V7c0-.292.094-.531.281-.719A.973.973 0 0 1 9 6c.292 0 .531.094.719.281A.973.973 0 0 1 10 7v10a.974.974 0 0 1-.281.719A.974.974 0 0 1 9 18a.974.974 0 0 1-.719-.281A.974.974 0 0 1 8 17v-4.531l-.344.312z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepFillIcon);
export default ForwardRef;
