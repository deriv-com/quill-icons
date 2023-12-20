import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 2 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 5.75v9c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-9C.292 5.292.542 5.042 1 5c.458.042.708.292.75.75M1 19a.974.974 0 0 1-.719-.281A.974.974 0 0 1 0 18c0-.292.094-.531.281-.719A.974.974 0 0 1 1 17c.292 0 .531.094.719.281A.974.974 0 0 1 2 18a.974.974 0 0 1-.281.719A.974.974 0 0 1 1 19'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationBoldIcon);
export default ForwardRef;
