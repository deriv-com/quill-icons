import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneComputerMouseScrollwheelBoldIcon = (
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
      d='M21.625 20.25v-7.5c-.026-1.25-.456-2.279-1.29-3.086-.806-.833-1.835-1.263-3.085-1.289h-2.5c-1.25.026-2.279.456-3.086 1.29-.833.806-1.263 1.835-1.289 3.085v7.5c.026 1.25.456 2.279 1.29 3.086.806.833 1.835 1.263 3.085 1.289h2.5c1.25-.026 2.279-.456 3.086-1.29.833-.806 1.263-1.835 1.289-3.085ZM8.5 12.75c.052-1.77.664-3.242 1.836-4.414 1.172-1.172 2.643-1.784 4.414-1.836h2.5c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v7.5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836h-2.5c-1.77-.052-3.242-.664-4.414-1.836-1.172-1.172-1.784-2.643-1.836-4.414v-7.5Zm7.5-2.5c.365 0 .664.117.898.352.235.234.352.533.352.898v1.25c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352s-.664-.117-.898-.352c-.235-.234-.352-.533-.352-.898V11.5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneComputerMouseScrollwheelBoldIcon);
export default ForwardRef;
