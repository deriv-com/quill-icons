import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownLeftBoldIcon = (
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
        d='M1.75 17c-.458-.042-.708-.292-.75-.75v-7.5c.042-.458.292-.708.75-.75.458.042.708.292.75.75v5.688l7.219-7.22c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063L3.562 15.5H9.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftBoldIcon);
export default ForwardRef;
