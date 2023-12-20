import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftBoldIcon = (
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
        d='m3.219 19.531-3-3c-.292-.354-.292-.708 0-1.062l3-3c.354-.292.708-.292 1.062 0 .292.354.292.708 0 1.062L2.563 15.25H13.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H2.563l1.718 1.719c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0m10.562-11-3 3c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l1.719-1.719H.75C.292 8.708.042 8.458 0 8c.042-.458.292-.708.75-.75h10.688l-1.72-1.719c-.29-.354-.29-.708 0-1.062.355-.292.71-.292 1.063 0l3 3c.292.354.292.708 0 1.062'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftBoldIcon);
export default ForwardRef;
