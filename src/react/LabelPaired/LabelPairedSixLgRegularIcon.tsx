import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.5 18c-.026-1.406-.508-2.591-1.445-3.555C9.09 13.508 7.906 13.026 6.5 13c-1.406.026-2.565.508-3.477 1.445-.937.912-1.445 2.058-1.523 3.438V18c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445 1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555m-6.29-6.094a5.298 5.298 0 0 1 1.29-.156c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C.914 21.242.302 19.771.25 18v-.234a6.446 6.446 0 0 1 1.602-3.985l6.054-6.836c.287-.26.586-.273.899-.039.26.287.273.586.039.899z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixLgRegularIcon);
export default ForwardRef;
