import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m16.531 15.781-3 3c-.354.292-.708.292-1.062 0l-3-3c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l1.719 1.719V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.688l1.719-1.72c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063m-11-10.562 3 3c.292.354.292.708 0 1.062-.354.292-.708.292-1.062 0L5.75 7.562V18.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V7.563L2.531 9.28c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l3-3c.354-.292.708-.292 1.062 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownBoldIcon);
export default ForwardRef;
