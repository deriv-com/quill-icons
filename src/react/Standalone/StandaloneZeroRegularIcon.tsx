import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneZeroRegularIcon = (
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
      d='M9.75 14c.052-1.77.664-3.242 1.836-4.414C12.758 8.414 14.229 7.802 16 7.75c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C10.414 22.242 9.802 20.771 9.75 19zM16 9c-1.406.026-2.591.508-3.555 1.445-.937.964-1.419 2.149-1.445 3.555v5c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445 1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555v-5c-.026-1.406-.508-2.591-1.445-3.555C18.59 9.508 17.406 9.026 16 9'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneZeroRegularIcon);
export default ForwardRef;
