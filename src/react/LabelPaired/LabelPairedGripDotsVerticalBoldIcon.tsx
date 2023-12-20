import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGripDotsVerticalBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 8a.973.973 0 0 1-.719-.281A.973.973 0 0 1 1 7c0-.292.094-.531.281-.719A.973.973 0 0 1 2 6c.292 0 .531.094.719.281A.973.973 0 0 1 3 7a.973.973 0 0 1-.281.719A.973.973 0 0 1 2 8m0 5a.974.974 0 0 1-.719-.281A.974.974 0 0 1 1 12c0-.292.094-.531.281-.719A.974.974 0 0 1 2 11c.292 0 .531.094.719.281A.974.974 0 0 1 3 12a.974.974 0 0 1-.281.719A.974.974 0 0 1 2 13m1 4a.974.974 0 0 1-.281.719A.974.974 0 0 1 2 18a.974.974 0 0 1-.719-.281A.974.974 0 0 1 1 17c0-.292.094-.531.281-.719A.974.974 0 0 1 2 16c.292 0 .531.094.719.281A.974.974 0 0 1 3 17m3-9a.973.973 0 0 1-.719-.281A.973.973 0 0 1 5 7c0-.292.094-.531.281-.719A.973.973 0 0 1 6 6c.292 0 .531.094.719.281A.973.973 0 0 1 7 7a.973.973 0 0 1-.281.719A.973.973 0 0 1 6 8m1 4a.974.974 0 0 1-.281.719A.974.974 0 0 1 6 13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 5 12c0-.292.094-.531.281-.719A.974.974 0 0 1 6 11c.292 0 .531.094.719.281A.974.974 0 0 1 7 12m-1 6a.974.974 0 0 1-.719-.281A.974.974 0 0 1 5 17c0-.292.094-.531.281-.719A.974.974 0 0 1 6 16c.292 0 .531.094.719.281A.974.974 0 0 1 7 17a.974.974 0 0 1-.281.719A.974.974 0 0 1 6 18'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalBoldIcon);
export default ForwardRef;
