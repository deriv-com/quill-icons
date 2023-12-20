import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedZeroLgRegularIcon = (
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
        d='M.25 13c.052-1.77.664-3.242 1.836-4.414C3.258 7.414 4.729 6.802 6.5 6.75c1.77.052 3.242.664 4.414 1.836 1.172 1.172 1.784 2.643 1.836 4.414v5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836-1.77-.052-3.242-.664-4.414-1.836C.914 21.242.302 19.771.25 18zM6.5 8c-1.406.026-2.591.508-3.555 1.445C2.008 10.41 1.526 11.594 1.5 13v5c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445 1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555v-5c-.026-1.406-.508-2.591-1.445-3.555C9.09 8.508 7.906 8.026 6.5 8'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroLgRegularIcon);
export default ForwardRef;
