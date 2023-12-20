import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepBoldIcon = (
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
        d='M7.5 6.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v10.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-3.281l-5.531 3.875a.986.986 0 0 1-.532.156.836.836 0 0 1-.656-.281.836.836 0 0 1-.281-.657V6.938c0-.27.094-.49.281-.656A.836.836 0 0 1 1.438 6a.89.89 0 0 1 .53.156L7.5 10.031zm0 5.375v-.25L2 8.031V16z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepBoldIcon);
export default ForwardRef;
