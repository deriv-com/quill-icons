import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsDownBoldIcon = (
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
        d='m7.469 18.531-6-6c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L8 16.938l5.469-5.47c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063l-6 6c-.354.292-.708.292-1.062 0m-6-12c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0L8 10.938l5.469-5.47c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063l-6 6c-.354.292-.708.292-1.062 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownBoldIcon);
export default ForwardRef;
