import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneComputerMouseScrollwheelRegularIcon = (
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
      d='M22.25 20.25v-7.5c-.026-1.406-.508-2.591-1.445-3.555-.964-.937-2.149-1.419-3.555-1.445h-2.5c-1.406.026-2.591.508-3.555 1.445-.937.964-1.419 2.149-1.445 3.555v7.5c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445h2.5c1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555M8.5 12.75c.052-1.77.664-3.242 1.836-4.414 1.172-1.172 2.643-1.784 4.414-1.836h2.5c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v7.5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836h-2.5c-1.77-.052-3.242-.664-4.414-1.836-1.172-1.172-1.784-2.643-1.836-4.414zm8.125-1.875v2.5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-2.5c.026-.39.234-.599.625-.625.39.026.599.234.625.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneComputerMouseScrollwheelRegularIcon);
export default ForwardRef;
