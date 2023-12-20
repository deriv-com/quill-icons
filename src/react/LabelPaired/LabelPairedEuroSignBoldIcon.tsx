import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.531 11.5H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h1.031c.459-1.48 1.292-2.677 2.5-3.594C5.49 5.49 6.896 5.021 8.5 5h.75c.458.042.708.292.75.75-.042.458-.292.708-.75.75H8.5c-1.187.02-2.23.344-3.125.969a5.56 5.56 0 0 0-2 2.531H8.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H3.031a4.028 4.028 0 0 0 0 1H8.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H3.375a5.559 5.559 0 0 0 2 2.531c.896.625 1.938.948 3.125.969h.75c.458.042.708.292.75.75-.042.458-.292.708-.75.75H8.5c-1.604-.02-3.01-.49-4.219-1.406-1.208-.917-2.041-2.115-2.5-3.594H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.781a4.028 4.028 0 0 1 0-1'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignBoldIcon);
export default ForwardRef;
