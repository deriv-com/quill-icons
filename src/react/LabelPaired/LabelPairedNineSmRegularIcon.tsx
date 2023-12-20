import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedNineSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1 9c.018.984.355 1.814 1.012 2.488.674.657 1.504.994 2.488 1.012.984-.018 1.805-.346 2.46-.984.639-.657.985-1.468 1.04-2.434V9c-.018-.984-.355-1.814-1.012-2.488C6.314 5.855 5.484 5.518 4.5 5.5c-.984.018-1.814.355-2.488 1.012C1.355 7.186 1.018 8.016 1 9m4.402 4.293a4.886 4.886 0 0 1-.902.082c-1.24-.037-2.27-.465-3.09-1.285C.59 11.27.161 10.24.125 9 .161 7.76.59 6.73 1.41 5.91c.82-.82 1.85-1.249 3.09-1.285 1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09v.164a4.63 4.63 0 0 1-1.121 2.816l-4.238 4.758c-.2.183-.41.192-.63.028-.182-.2-.19-.41-.027-.63z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmRegularIcon);
export default ForwardRef;
