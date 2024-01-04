import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTabletBoldIcon = (
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
      d='M9.75 8.375c-.39.026-.599.234-.625.625v15c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625V9c-.026-.39-.234-.599-.625-.625H9.75ZM7.25 9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v15c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9Zm7.5 13.125h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTabletBoldIcon);
export default ForwardRef;
