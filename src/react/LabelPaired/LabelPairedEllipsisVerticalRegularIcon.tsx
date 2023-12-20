import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 4 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 16c.292 0 .531.094.719.281A.974.974 0 0 1 3 17a.974.974 0 0 1-.281.719A.974.974 0 0 1 2 18a.974.974 0 0 1-.719-.281A.974.974 0 0 1 1 17c0-.292.094-.531.281-.719A.974.974 0 0 1 2 16m0-5c.292 0 .531.094.719.281A.974.974 0 0 1 3 12a.974.974 0 0 1-.281.719A.974.974 0 0 1 2 13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 1 12c0-.292.094-.531.281-.719A.974.974 0 0 1 2 11m1-4a.973.973 0 0 1-.281.719A.973.973 0 0 1 2 8a.973.973 0 0 1-.719-.281A.973.973 0 0 1 1 7c0-.292.094-.531.281-.719A.973.973 0 0 1 2 6c.292 0 .531.094.719.281A.973.973 0 0 1 3 7'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalRegularIcon);
export default ForwardRef;
