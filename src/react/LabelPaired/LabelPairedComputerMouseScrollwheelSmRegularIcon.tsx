import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelSmRegularIcon = (
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
        d='M9.875 13.375v-5.25c-.018-.984-.355-1.814-1.012-2.488-.674-.657-1.504-.994-2.488-1.012h-1.75c-.984.018-1.814.355-2.488 1.012-.657.674-.994 1.504-1.012 2.488v5.25c.018.984.355 1.814 1.012 2.488.674.657 1.504.994 2.488 1.012h1.75c.984-.018 1.814-.355 2.488-1.012.657-.674.994-1.504 1.012-2.488M.25 8.125c.036-1.24.465-2.27 1.285-3.09.82-.82 1.85-1.249 3.09-1.285h1.75c1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09v5.25c-.037 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.249-3.09 1.285h-1.75c-1.24-.037-2.27-.465-3.09-1.285-.82-.82-1.249-1.85-1.285-3.09zm5.688-1.312v1.75c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-1.75c.018-.274.164-.42.437-.438.273.018.42.164.438.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmRegularIcon);
export default ForwardRef;
