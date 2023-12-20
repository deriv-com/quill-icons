import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 6.25c.02-.48.23-.844.625-1.094a1.328 1.328 0 0 1 1.25 0c.396.25.604.615.625 1.094-.02.48-.23.844-.625 1.094a1.328 1.328 0 0 1-1.25 0c-.396-.25-.604-.615-.625-1.094m-1.25 4c.042-.458.292-.708.75-.75H3c.458.042.708.292.75.75v8.25h1.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h1.5V11h-1c-.458-.042-.708-.292-.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoBoldIcon);
export default ForwardRef;
