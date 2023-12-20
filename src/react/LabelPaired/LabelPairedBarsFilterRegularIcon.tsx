import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsFilterRegularIcon = (
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
        d='M0 6.5c.02-.312.188-.48.5-.5h13c.313.02.48.188.5.5-.02.313-.187.48-.5.5H.5c-.312-.02-.48-.187-.5-.5m2 5c.02-.312.188-.48.5-.5h9c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-9c-.312-.02-.48-.187-.5-.5m7 5c-.02.313-.187.48-.5.5h-3c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h3c.313.02.48.188.5.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterRegularIcon);
export default ForwardRef;
