import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.75 5c.458.042.708.292.75.75v11c.042.458.292.708.75.75h13c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-13c-.646-.02-1.177-.24-1.594-.656C.24 17.927.021 17.396 0 16.75v-11c.042-.458.292-.708.75-.75m11 2.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h2.5c.208 0 .385.073.531.219A.723.723 0 0 1 15 6.75v2.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-.687L9.531 12.53c-.354.292-.708.292-1.062 0L6.5 10.562l-1.969 1.97c-.354.29-.708.29-1.062 0-.292-.355-.292-.71 0-1.063l2.5-2.5c.354-.292.708-.292 1.062 0L9 10.938 12.438 7.5zm0 8.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.688l-1.47-1.469 1.063-1.062 1.469 1.469v-.688c.042-.458.292-.708.75-.75.458.042.708.292.75.75v2.5a.723.723 0 0 1-.219.531.723.723 0 0 1-.531.219z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownBoldIcon);
export default ForwardRef;
