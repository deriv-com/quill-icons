import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPercentRegularIcon = (
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
        d='M2 7a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 8c0 .292.094.531.281.719A.973.973 0 0 0 2 9a.973.973 0 0 0 .719-.281A.973.973 0 0 0 3 8a.973.973 0 0 0-.281-.719A.973.973 0 0 0 2 7m0 3C1.25 9.98.677 9.646.281 9c-.375-.667-.375-1.333 0-2C.677 6.354 1.25 6.02 2 6c.75.02 1.323.354 1.719 1 .375.667.375 1.333 0 2-.396.646-.969.98-1.719 1m8 5a.974.974 0 0 0-.719.281A.974.974 0 0 0 9 16c0 .292.094.531.281.719A.974.974 0 0 0 10 17a.974.974 0 0 0 .719-.281A.974.974 0 0 0 11 16a.974.974 0 0 0-.281-.719A.974.974 0 0 0 10 15m0 3c-.75-.02-1.323-.354-1.719-1-.375-.667-.375-1.333 0-2 .396-.646.969-.98 1.719-1 .75.02 1.323.354 1.719 1 .375.667.375 1.333 0 2-.396.646-.969.98-1.719 1m1.844-11.156-11 11c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l11-11c.23-.208.459-.208.688 0 .208.23.208.459 0 .688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentRegularIcon);
export default ForwardRef;
