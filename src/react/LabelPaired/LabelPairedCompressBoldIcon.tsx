import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressBoldIcon = (
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
        d='M5 5.75v3.5c-.042.458-.292.708-.75.75H.75C.292 9.958.042 9.708 0 9.25c.042-.458.292-.708.75-.75H3.5V5.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75M.75 14h3.5c.458.042.708.292.75.75v3.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V15.5H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75m9.75-8.25V8.5h2.75c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-3.5c-.458-.042-.708-.292-.75-.75v-3.5c.042-.458.292-.708.75-.75.458.042.708.292.75.75M9.75 14h3.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H10.5v2.75c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3.5c.042-.458.292-.708.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressBoldIcon);
export default ForwardRef;
