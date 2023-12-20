import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixSmRegularIcon = (
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
        d='M8 12.5c-.018-.984-.355-1.814-1.012-2.488C6.314 9.355 5.484 9.018 4.5 9c-.984.018-1.796.355-2.434 1.012-.656.638-1.011 1.44-1.066 2.406v.082c.018.984.355 1.814 1.012 2.488.674.657 1.504.994 2.488 1.012.984-.018 1.814-.355 2.488-1.012.657-.674.994-1.504 1.012-2.488M3.598 8.234c.291-.073.592-.109.902-.109 1.24.036 2.27.465 3.09 1.285.82.82 1.249 1.85 1.285 3.09-.036 1.24-.465 2.27-1.285 3.09-.82.82-1.85 1.249-3.09 1.285-1.24-.037-2.27-.465-3.09-1.285C.59 14.77.161 13.74.125 12.5v-.164a4.512 4.512 0 0 1 1.121-2.79l4.238-4.784c.2-.183.41-.192.63-.028.182.2.19.41.027.63z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmRegularIcon);
export default ForwardRef;
