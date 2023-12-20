import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourBoldIcon = (
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
        d='M5.906 6.094 2 13.5h6.5V8.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v4.75h1.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H10v3.25c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V15H.75c-.27 0-.49-.125-.656-.375-.125-.23-.125-.469 0-.719l4.5-8.5c.25-.396.583-.5 1-.312.396.25.5.583.312 1'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourBoldIcon);
export default ForwardRef;
