import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisRegularIcon = (
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
        d='M13 12a.974.974 0 0 1-.281.719A.974.974 0 0 1 12 13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 11 12c0-.292.094-.531.281-.719A.974.974 0 0 1 12 11c.292 0 .531.094.719.281A.974.974 0 0 1 13 12m-5 0a.974.974 0 0 1-.281.719A.974.974 0 0 1 7 13a.974.974 0 0 1-.719-.281A.974.974 0 0 1 6 12c0-.292.094-.531.281-.719A.974.974 0 0 1 7 11c.292 0 .531.094.719.281A.974.974 0 0 1 8 12m-6 1a.974.974 0 0 1-.719-.281A.974.974 0 0 1 1 12c0-.292.094-.531.281-.719A.974.974 0 0 1 2 11c.292 0 .531.094.719.281A.974.974 0 0 1 3 12a.974.974 0 0 1-.281.719A.974.974 0 0 1 2 13'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisRegularIcon);
export default ForwardRef;
