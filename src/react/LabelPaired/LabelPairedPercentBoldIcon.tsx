import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPercentBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m11.531 7.531-10 10c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l10-10c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062M3.5 8c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C.77 9 .52 8.563.5 8c.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312m8 8c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0-.48-.313-.73-.75-.75-1.313.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentBoldIcon);
export default ForwardRef;
