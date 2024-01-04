import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSixRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M21 19c-.026-1.406-.508-2.591-1.445-3.555C18.59 14.508 17.406 14.026 16 14c-1.406.026-2.565.508-3.477 1.445-.937.912-1.445 2.058-1.523 3.438V19c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445 1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555Zm-6.29-6.094A5.299 5.299 0 0 1 16 12.75c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C10.414 22.242 9.802 20.771 9.75 19v-.234a6.446 6.446 0 0 1 1.602-3.985l6.054-6.836c.287-.26.586-.273.899-.039.26.287.273.586.039.899l-3.633 4.101Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSixRegularIcon);
export default ForwardRef;
