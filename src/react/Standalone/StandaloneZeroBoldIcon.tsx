import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneZeroBoldIcon = (
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
      d='M9.75 14c.052-1.77.664-3.242 1.836-4.414C12.758 8.414 14.229 7.802 16 7.75c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C10.414 22.242 9.802 20.771 9.75 19zM16 9.625c-1.25.026-2.279.456-3.086 1.29-.833.806-1.263 1.835-1.289 3.085v5c.026 1.25.456 2.279 1.29 3.086.806.833 1.835 1.263 3.085 1.289 1.25-.026 2.279-.456 3.086-1.29.833-.806 1.263-1.835 1.289-3.085v-5c-.026-1.25-.456-2.279-1.29-3.086-.806-.833-1.835-1.263-3.085-1.289'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneZeroBoldIcon);
export default ForwardRef;
