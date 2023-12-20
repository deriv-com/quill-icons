import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18 4c.458.042.708.292.75.75v14.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V4.75c.042-.458.292-.708.75-.75m-4 3c.458.042.708.292.75.75v11.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V7.75c.042-.458.292-.708.75-.75m-4 3c.458.042.708.292.75.75v8.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-8.5c.042-.458.292-.708.75-.75m-4 3c.458.042.708.292.75.75v5.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-5.5c.042-.458.292-.708.75-.75m-4 3c.458.042.708.292.75.75v2.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-2.5c.042-.458.292-.708.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalBoldIcon);
export default ForwardRef;
