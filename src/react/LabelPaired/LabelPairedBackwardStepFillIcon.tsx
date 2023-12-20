import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepFillIcon = (
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
        d='m8.375 17.781-6-5L2 12.47V17a.974.974 0 0 1-.281.719A.974.974 0 0 1 1 18a.974.974 0 0 1-.719-.281A.974.974 0 0 1 0 17V7c0-.292.094-.531.281-.719A.973.973 0 0 1 1 6c.292 0 .531.094.719.281A.973.973 0 0 1 2 7v4.531l.375-.312 6-5c.313-.25.667-.292 1.063-.125.354.187.541.49.562.906v10c-.02.417-.208.719-.562.906-.396.167-.75.125-1.063-.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepFillIcon);
export default ForwardRef;
