import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.438 13.375v-5.25c-.019-.875-.32-1.595-.903-2.16-.565-.583-1.285-.884-2.16-.902h-1.75c-.875.018-1.595.319-2.16.902-.583.565-.884 1.285-.902 2.16v5.25c.018.875.319 1.595.902 2.16.565.584 1.285.884 2.16.902h1.75c.875-.018 1.595-.319 2.16-.902.583-.565.884-1.285.902-2.16M.25 8.125c.036-1.24.465-2.27 1.285-3.09.82-.82 1.85-1.249 3.09-1.285h1.75c1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09v5.25c-.037 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.249-3.09 1.285h-1.75c-1.24-.037-2.27-.465-3.09-1.285-.82-.82-1.249-1.85-1.285-3.09zm5.25-1.75c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v.875a.852.852 0 0 1-.246.629A.852.852 0 0 1 5.5 9a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V7.25c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmBoldIcon);
export default ForwardRef;
