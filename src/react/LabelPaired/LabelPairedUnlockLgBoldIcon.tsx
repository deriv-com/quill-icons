import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.875 10.5V13h9.375c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742C.523 24.289.276 23.703.25 23v-7.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H4v-2.5c.026-1.406.508-2.591 1.445-3.555C6.41 6.008 7.594 5.526 9 5.5c1.12.026 2.11.352 2.969.977.86.625 1.458 1.458 1.797 2.5.13.546-.079.937-.625 1.171-.547.13-.938-.078-1.172-.625A3.076 3.076 0 0 0 10.875 8 3.011 3.011 0 0 0 9 7.375c-.885.026-1.628.326-2.227.898-.572.6-.872 1.342-.898 2.227m-3.75 5V23c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-7.5c-.026-.39-.234-.599-.625-.625H2.75c-.39.026-.599.234-.625.625'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockLgBoldIcon);
export default ForwardRef;
