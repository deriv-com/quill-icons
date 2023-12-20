import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBackwardStepBoldIcon = (
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
        d='M2.5 6.75v3.281l5.531-3.875A.89.89 0 0 1 8.562 6c.271 0 .49.094.657.281a.836.836 0 0 1 .281.657v10.125c0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281.986.986 0 0 1-.532-.156L2.5 13.969v3.281c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75V6.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75m0 5.375L8 16V8.031l-5.5 3.844z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepBoldIcon);
export default ForwardRef;
