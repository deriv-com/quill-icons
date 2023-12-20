import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.75 19.25v-7.5c-.026-1.406-.508-2.591-1.445-3.555-.964-.937-2.149-1.419-3.555-1.445h-2.5c-1.406.026-2.591.508-3.555 1.445-.937.964-1.419 2.149-1.445 3.555v7.5c.026 1.406.508 2.591 1.445 3.555.964.937 2.149 1.419 3.555 1.445h2.5c1.406-.026 2.591-.508 3.555-1.445.937-.964 1.419-2.149 1.445-3.555M0 11.75c.052-1.77.664-3.242 1.836-4.414C3.008 6.164 4.479 5.552 6.25 5.5h2.5c1.77.052 3.242.664 4.414 1.836C14.336 8.508 14.948 9.979 15 11.75v7.5c-.052 1.77-.664 3.242-1.836 4.414-1.172 1.172-2.643 1.784-4.414 1.836h-2.5c-1.77-.052-3.242-.664-4.414-1.836C.664 22.492.052 21.021 0 19.25zm8.125-1.875v2.5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-2.5c.026-.39.234-.599.625-.625.39.026.599.234.625.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelLgRegularIcon);
export default ForwardRef;
