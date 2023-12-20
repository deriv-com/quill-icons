import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownRightBoldIcon = (
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
        d='M10.25 17h-7.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h5.688l-7.22-7.219c-.29-.354-.29-.708 0-1.062.355-.292.71-.292 1.063 0L9.5 14.438V8.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v7.5c-.042.458-.292.708-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightBoldIcon);
export default ForwardRef;
