import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsBoldIcon = (
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
        d='M0 6.75c.042-.458.292-.708.75-.75h12.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75C.292 7.458.042 7.208 0 6.75m0 5c.042-.458.292-.708.75-.75h12.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.458-.042-.708-.292-.75-.75m14 5c-.042.458-.292.708-.75.75H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h12.5c.458.042.708.292.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsBoldIcon);
export default ForwardRef;
