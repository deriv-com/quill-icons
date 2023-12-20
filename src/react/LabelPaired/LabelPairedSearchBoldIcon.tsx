import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchBoldIcon = (
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
        d='M11.5 10.5c0-.896-.219-1.73-.656-2.5A5.212 5.212 0 0 0 9 6.156 5.095 5.095 0 0 0 6.5 5.5c-.875 0-1.708.219-2.5.656A5.21 5.21 0 0 0 2.156 8a4.98 4.98 0 0 0-.656 2.5c0 .896.219 1.73.656 2.5A5.212 5.212 0 0 0 4 14.844a5.096 5.096 0 0 0 2.5.656c.875 0 1.708-.219 2.5-.656A5.213 5.213 0 0 0 10.844 13c.437-.77.656-1.604.656-2.5m-.969 5.094C9.406 16.51 8.062 16.979 6.5 17c-1.833-.042-3.365-.677-4.594-1.906C.677 13.864.042 12.334 0 10.5c.042-1.833.677-3.365 1.906-4.594C3.136 4.677 4.666 4.042 6.5 4c1.833.042 3.365.677 4.594 1.906 1.229 1.23 1.864 2.76 1.906 4.594-.02 1.563-.49 2.906-1.406 4.031l4.187 4.188c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchBoldIcon);
export default ForwardRef;
