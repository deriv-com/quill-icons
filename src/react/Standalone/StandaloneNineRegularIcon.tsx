import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneNineRegularIcon = (
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
      d='M11 14c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445 1.406-.026 2.578-.495 3.516-1.406.911-.938 1.406-2.097 1.484-3.477V14c-.026-1.406-.508-2.591-1.445-3.555C18.59 9.508 17.406 9.026 16 9c-1.406.026-2.591.508-3.555 1.445-.937.964-1.419 2.149-1.445 3.555m6.29 6.133a6.984 6.984 0 0 1-1.29.117c-1.77-.052-3.242-.664-4.414-1.836C10.414 17.242 9.802 15.771 9.75 14c.052-1.77.664-3.242 1.836-4.414C12.758 8.414 14.229 7.802 16 7.75c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v.234c-.078 1.51-.612 2.852-1.602 4.024l-6.054 6.797c-.287.26-.586.273-.899.039-.26-.287-.273-.586-.039-.899z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneNineRegularIcon);
export default ForwardRef;
